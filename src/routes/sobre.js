export function rotaSobre(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end('<h1>Sobre o projeto</h1><p>Lucas mandou fazer</p>');
}
