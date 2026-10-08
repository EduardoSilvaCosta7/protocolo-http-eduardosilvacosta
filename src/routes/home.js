import fs from 'node:fs';

export function rotaInicio(req, res) {
    fs.readFile('src/views/index.html', 'utf8', (erro, html) => {
        if (erro) {
            res.writeHead(500);
            res.end('erro de carregamento');
            return;
        }

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(html);
    });
}