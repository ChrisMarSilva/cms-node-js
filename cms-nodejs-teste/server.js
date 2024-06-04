const http = require('http');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    console.log('request received');

    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end('<h1>This is Ngrok</h1>');
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

// node server.js

// ngrok config add-authtoken 1uGls1AaKHfa9FWSF1ESweJvbi7_Djtiq2sB1nFrJ7HRaBoN
// ngrok http http://localhost:8000

// ngrok http 8000
// ngrok http -auth="username:password" 8000

// ngrok http https://localhost:51235

// http://127.0.0.1:4040
