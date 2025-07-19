const httpServer = require('http-server');
const path = require('path');
const fs = require('fs');

const server = httpServer.createServer({
    root: path.join(__dirname, 'build'),
    cache: -1,
    before: [
        (req, res) => {
            // Log the incoming request
            console.log(`Request URL: ${req.url}`);
            // Normalize URL by removing /jj-goodwins-site prefix
            let url = req.url;
            if (url.startsWith('/jj-goodwins-site/')) {
                url = url.replace('/jj-goodwins-site', '');
            } else if (url === '/jj-goodwins-site') {
                url = '/';
            }
            // Serve index.html for root or SPA routes
            if (url === '/' || !path.extname(url)) {
                console.log(`Serving index.html for: ${req.url}`);
                req.url = '/index.html';
                res.emit('next');
                return;
            }
            // Serve assets from build/
            const filePath = path.join(__dirname, 'build', url);
            console.log(`Checking file: ${filePath}`);
            if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
                console.log(`Serving file: ${filePath}`);
                req.url = url;
                res.emit('next');
                return;
            }
            // Fallback to index.html for unmatched routes
            console.log(`Serving index.html for unmatched route: ${req.url}`);
            req.url = '/index.html';
            res.emit('next');
        }
    ]
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/jj-goodwins-site');
});