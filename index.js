const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const expressWs = require('express-ws')(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 5050);
app.use(express.static(path.join(__dirname, 'public')));

var aWss = expressWs.getWss('/message');

app.post('/', (req, res) => {
    if(!req.body) {
        return res.end();
    }
    if(req.body.challenge) {
        res.setHeader('Content-Type', 'text/plain');
        res.send(req.body.challenge);
        res.end();
    } else if(req.body.event && req.body.event.type == "message"){
        aWss.clients.forEach(client => {
            client.send(req.body.event.text);
        });
        res.end();
    }
});

app.ws('/message', () => {});

app.listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'));
});