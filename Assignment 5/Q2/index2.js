var http = require('http'),
fs = require('fs');
zip = require('zlib');

function serveStaticFile(res, path, contentType, responseCode) {
   // if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode,
                { 'Content-Type': contentType, 'Content-Encoding': 'gzip' });
                console.log(data);
                zip.gzip(data, function(_, result){
                    res.end(result);
                });
           
        }
    });
}

http.createServer(function (req, res) {
    // normalize url by removing querystring, optional
    // trailing slash, anßd making lowercase
    var path = req.url.toLowerCase();
    switch (path) {
        case '/':
            serveStaticFile(res, '/public/home.html', 'text/html', 200);
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html', 200);
            break;
        case '/img/favphoto':
            serveStaticFile(res, '/public/favphoto.jpg', 'image/jpg', 200);
            break;
        case '/public/favphoto.jpg':
            serveStaticFile(res, '/public/favphoto.jpg', 'image/jpg', 200);
            break;
        case '/css/assign.css':
            serveStaticFile(res, '/css/assign.css', 'text/css', 200);
            break;
        default:
            serveStaticFile(res, '/public/notfound.html', 'text/html',
                404);
            break;
    }
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');