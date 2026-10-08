export function rotaAntigo(req, res) {
  res.writeHead(301, {
    'Location': '/sobre'
  });

  res.end();
}