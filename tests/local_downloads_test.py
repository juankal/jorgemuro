"""Comprueba las descargas locales sin red ni dependencias externas."""
from pathlib import Path
import re
from urllib.parse import urlsplit
from xml.etree import ElementTree

root = Path(__file__).resolve().parents[1]
scripts = [root / 'script.js', root / 'script.min.js']
pages = [root / 'index.html', *sorted((root / 'articulos').glob('*.html'))]
for path in scripts + pages:
    text = path.read_text(encoding='utf-8')
    assert not re.search(r'https://(?:drive|docs)\.google\.com/', text), path
    for url in re.findall(r'''["'](/(?:documentos|modelos-del-libro)/[^"']*)["']''', text):
        target = urlsplit(url).path
        if target == '/modelos-del-libro/':
            target = '/articulos/models.html'
        assert (root / target.lstrip('/')).is_file(), (path, url)

pdfs = sorted((root / 'documentos').glob('*.pdf'))
assert len(pdfs) == 6
for path in pdfs:
    content = path.read_bytes()
    assert content.startswith(b'%PDF-') and b'%%EOF' in content[-1024:], path

links = [set(re.findall(r"/documentos/[^'\"]+\.pdf", path.read_text(encoding='utf-8'))) for path in scripts]
assert links[0] == links[1] and len(links[0]) == 5
models = (root / 'articulos/models.html').read_text(encoding='utf-8')
assert 'download="Capitulo-13-1-opcion-extraccion-oro.ana"' in models
assert 'href="https://www.jorgemuro.net/modelos-del-libro/"' in models
assert 'RewriteRule ^modelos-del-libro/?$ articulos/models.html [L]' in (root / '.htaccess').read_text()
assert '/modelos-del-libro/ /articulos/models.html 200' in (root / '_redirects').read_text()
sitemap = ElementTree.parse(root / 'sitemap.xml')
locations = {entry.text for entry in sitemap.findall('.//{*}loc')}
assert 'https://www.jorgemuro.net/modelos-del-libro/' in locations
assert 'https://www.jorgemuro.net/articulos/models.html' not in locations
print('OK: seis PDF, modelo, enlaces propios, rutas y sitemap; fuente/minificado coinciden.')
