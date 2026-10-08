export function rotaBusca(req, res, url) {
  const termo = url.searchParams.get('termo')?.trim();

  if (!termo) {
    res.writeHead(400, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    res.end('<h1>Erro 400 - Termo de busca não informado</h1>');
    return;
  }

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end(`<h1>Busca</h1><p>Você buscou por: ${escapeHtml(termo)}</p>`);
}

function escapeHtml(texto) {
  return texto
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
