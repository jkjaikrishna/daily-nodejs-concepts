const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res ) => {
    // console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Contwnt-Type', 'text/html');
        res.write('<html>');
        res.write('<body><form action= "/message" method= "POST"><input type= "text" name= "name"/><button type= "submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'Sample data');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Contwnt-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Welcome to Node Js, JK!!!!</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();
});

server.listen(3000);