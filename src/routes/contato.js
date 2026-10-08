export function rotaContato(req, res) {
  if (req.method !== 'GET') {
    res.writeHead(405, {
      'Content-Type': 'text/html; charset=utf-8',
      'Allow': 'GET'
    });

    res.end('<h1>Erro 405 - metodo nao permitido</h1>');
    return;
  }

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end('<h1>Contato</h1><p>Entre em contato 11976259495.</p>');
}
