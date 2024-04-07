var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST' && req.url === '/') {
        var body = '';
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            console.log('Received message: ' + body);
        });
    }
    res.writeHead(200);
    res.write(html);
    res.end();
});

server.listen(port);
console.log('Server running at http://127.0.0.1:' + port + '/');