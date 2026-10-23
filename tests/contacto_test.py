"""Prueba el endpoint con transporte simulado: no envía mensajes ni necesita SMTP."""
import json
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parents[1]
valid = {"name": "Prueba", "email": "prueba@example.invalid", "message": "Consulta"}

def check(expected, data=None, method="POST", length=100, transport="ok"):
    payload = json.dumps(data if data is not None else valid).encode().hex()
    harness = r'''<?php
register_shutdown_function(function () { fwrite(STDERR, (string) http_response_code()); });
foreach (['CURLOPT_POST', 'CURLOPT_POSTFIELDS', 'CURLOPT_HTTPHEADER', 'CURLOPT_RETURNTRANSFER',
          'CURLOPT_FOLLOWLOCATION', 'CURLOPT_CONNECTTIMEOUT', 'CURLOPT_TIMEOUT', 'CURLINFO_RESPONSE_CODE'] as $i => $key) {
    define($key, $i + 1);
}
function curl_init($url) { assert($url === 'https://jorgemuro.netlify.app/'); return true; }
function curl_setopt_array($request, $options) {
    parse_str($options[CURLOPT_POSTFIELDS], $fields);
    assert($fields['form-name'] === 'contact');
    assert($options[CURLOPT_FOLLOWLOCATION] === false);
    assert($fields['message'] === ($_POST['message'] ?? ''));
    assert($fields['bot-field'] === ($_POST['bot-field'] ?? ''));
    return true;
}
function curl_exec($request) {
    return match (getenv('TEST_TRANSPORT')) {
        'timeout' => false,
        'static' => '<title>Dr. Jorge Muro</title>',
        default => '<title>Thank you!</title>',
    };
}
function curl_getinfo($request, $info) { return getenv('TEST_TRANSPORT') === 'error' ? 500 : 200; }
function curl_close($request) {}
$_SERVER['REQUEST_METHOD'] = getenv('TEST_METHOD');
$_SERVER['CONTENT_LENGTH'] = getenv('TEST_LENGTH');
$_POST = json_decode(hex2bin(getenv('TEST_PAYLOAD')), true);
require 'contacto.php';
'''
    import os
    env = dict(os.environ, TEST_METHOD=method, TEST_LENGTH=str(length), TEST_PAYLOAD=payload, TEST_TRANSPORT=transport)
    result = subprocess.run(["php", "-n", "-d", "zend.assertions=1", "-d", "assert.exception=1"],
                            input=harness, text=True, cwd=root, env=env, capture_output=True, check=True)
    assert result.stderr == str(expected), (expected, result.stderr, result.stdout)
    assert json.loads(result.stdout) == {"ok": expected == 200}

check(200)
check(200, dict(valid, **{"bot-field": "prueba descartada por Netlify"}))
check(200, dict(valid, **{"form-name": "otro-formulario"}))
check(405, method="GET")
check(413, length=65537)
check(422, {})
check(422, dict(valid, name=" "))
check(422, dict(valid, email="invalido"))
check(422, dict(valid, email="a@example.com\r\nBcc:b@example.com"))
check(422, dict(valid, name=["array"]))
check(422, dict(valid, message="x" * 10001))
check(422, dict(valid, subject="x" * 301))
check(422, dict(valid, message="texto\0oculto"))
check(502, transport="timeout")
check(502, transport="error")
check(502, transport="static")
print("OK: 16 casos de validación y transporte; ningún mensaje enviado.")
