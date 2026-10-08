export function rotaAdmin(req, res) {
  res.writeHead(403, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end('<h1>403 sem ingresso, sem acesso</h1>');
}
