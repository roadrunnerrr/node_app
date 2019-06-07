const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8080;

/* API */
app.get('/get-containers', (request, response) => {
    const clientRequest = http.request({
        socketPath: '/var/run/docker.sock',
        path: `/v1.38/containers/json`,
    }, (res) => {
        res.setEncoding('utf8');
        res.on('data', data => {
            response.json(data);
            console.log('data', data)
        });
        res.on('error', data => console.error(data));
    });
    clientRequest.end();
});

app.get('/get-containers/:id', (request, response) => {
    const constainerId = request.params.id;
    const clientRequest = http.request({
        socketPath: '/var/run/docker.sock',
        path: `/v1.38/containers/${constainerId}/logs?stdout=1"`,
    }, (res) => {
        res.setEncoding('utf8');
        res.on('data', data => {
            response.json(data);
            console.log('data22', data)
        });
        res.on('error', data => console.error('data33', data));
    });
    clientRequest.end();
});

/* ROUTE */
router.get('/',function(req,res){
    res.sendFile('/index.html');
});

router.get('/container/:id',function(req,res){
    res.sendFile('/index.html');
});

app.use(express.static(path));
app.use('/', router);

/* START SERVER */
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
});
