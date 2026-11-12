"""Comprueba las descargas locales sin red ni dependencias externas."""
from pathlib import Path
import re
from urllib.parse import urlsplit
from xml.etree import ElementTree

root = Path(__file__).resolve().parents[1]
scripts = [root / 'script.js', root / 'script.min.js']
pages = [root / 'index.html', root / 'modelos.html', root / 'models.html', *sorted((root / 'articulos').glob('*.html'))]
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
# El footer completo debe ser idéntico y funcionar desde cualquier profundidad.
footers = [re.search(r'<footer class="footer">.*?</footer>', path.read_text(encoding='utf-8'), re.S)[0] for path in pages]
assert len(set(footers)) == 1, 'Los footers difieren entre páginas'
footer = footers[0]
assert 'footer-grid' in footer and 'Soluciones Takana' in footer
for target in re.findall(r'href="(/[^"?]*)', footer):
    assert target in ('/', '/modelos', '/models'), target
for lang in ('es', 'en'):
    for anchor in ('about', 'expertise', 'publications', 'books', 'contact'):
        assert f'href="/?lang={lang}#{anchor}"' in footer

# Las ediciones tienen rutas e idiomas independientes, incluso sin JavaScript.
for route, lang, other in [('modelos', 'es', 'models'), ('models', 'en', 'modelos')]:
    page = (root / f'{route}.html').read_text(encoding='utf-8')
    assert f'<html lang="{lang}">' in page
    assert f'rel="canonical" href="https://www.jorgemuro.net/{route}"' in page
    assert f'href="/{other}"' in page
    assert 'id="chapters-title"' in page
    assert f'https://www.jorgemuro.net/{route}' in locations
    redirects = (root / '_redirects').read_text()
    assert f'/{route} /{route}.html 200' in redirects
    assert f'/{route}/ /{route} 301' in redirects
    for target in re.findall(r'(?:href|src)="(/[^"?#]*)', page):
        if target in ('/', '/modelos', '/models'):
            continue
        assert (root / target.lstrip('/')).is_file(), target
assert 'RewriteRule ^(modelos|models)$ $1.html [L]' in (root / '.htaccess').read_text()
assert 'RewriteRule ^(modelos|models)/$ /$1 [R=301,L]' in (root / '.htaccess').read_text()
print('OK: footer común en todas las páginas; catálogos ES/EN separados; seis PDF, modelo, enlaces propios, rutas y sitemap; fuente/minificado coinciden.')
