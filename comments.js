// Create web server 
// Run: node comments.js
// localhost:3000
// localhost:3000/comments
// localhost:3000/comments?name=foo
// localhost:3000/comments?name=foo&title=bar
// localhost:3000/comments?name=foo&title=bar&message=hello

const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Comments</h1>');

    const q = url.parse(req.url, true).query;
    console.log(q);
    const txt = q.name + ' ' + q.title + ' ' + q.message;
    res.end(txt);
}).listen(3000);

console.log('Server running at http://localhost:3000');