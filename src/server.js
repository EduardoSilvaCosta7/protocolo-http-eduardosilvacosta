import http from 'node:http';
import { rotaInicio } from './routes/home.js';
import { rotaSobre } from './routes/sobre.js';
import { rotaAdmin } from './routes/admin.js';
import { rotaAntigo } from './routes/antigo.js';
import { rotaBusca } from './routes/search.js';

const servidor = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host ?? 'localhost'}`);

  res.on('finish', () => {
    console.log(`${req.method} ${req.url} ${res.statusCode}`);
  });

  if (url.pathname === '/') {
    rotaInicio(req, res);
  } else if (url.pathname === '/sobre') {
    rotaSobre(req, res);
  } else if (url.pathname === '/antigo') {
    rotaAntigo(req, res);
  } else if (url.pathname === '/busca') {
    rotaBusca(req, res, url);
  } else if (url.pathname === '/admin') {
    rotaAdmin(req, res);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    res.end('<h1>Página não encontrada — famoso 404</h1>');
  }
});

servidor.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
