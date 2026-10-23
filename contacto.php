<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, bool $ok): never
{
    http_response_code($status);
    echo json_encode(['ok' => $ok]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, false);
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 65536) {
    respond(413, false);
}

$fields = ['form-name' => 'contact'];
foreach (['name' => 200, 'email' => 254, 'subject' => 300, 'message' => 10000, 'bot-field' => 200] as $name => $limit) {
    $value = $_POST[$name] ?? '';
    if (!is_string($value) || strlen($value) > $limit || str_contains($value, "\0")) {
        respond(422, false);
    }
    $fields[$name] = trim($value);
}

if ($fields['name'] === '' || !filter_var($fields['email'], FILTER_VALIDATE_EMAIL)) {
    respond(422, false);
}

if (!function_exists('curl_init')) {
    respond(503, false);
}

// shortcut: conservar Netlify Forms hasta configurar el destinatario y SMTP de Hostinger.
$request = curl_init('https://jorgemuro.netlify.app/');
curl_setopt_array($request, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query($fields),
    CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 20,
]);
$body = curl_exec($request);
$status = curl_getinfo($request, CURLINFO_RESPONSE_CODE);
curl_close($request);

// La página genérica de éxito confirma que respondió Forms, no el HTML estático del sitio.
if ($status !== 200 || !is_string($body) || !str_contains($body, '<title>Thank you!</title>')) {
    respond(502, false);
}

respond(200, true);
