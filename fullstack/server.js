const express       = require('express'),
    cors            = require('cors');

// var testAPIRouter = require('./routes/testAPI');
// var testAPIRouter = require('testAPI.js');

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/api', (request, response) => {
    console.log('called', '/api');
    response.send({ result: 'Helloooooooo' });
});

app.get('/quit', (request, response) => {
    console.log('called', '/quit');
    response.send({ result: 'Good bye' });
});

// app.use('/testAPI', testAPIRouter);

app.get('/testAPI', (request, response) => {
    response.send({ result: 'API is working properly :)' });
});

app.listen(API_PORT, () => { console.log(`Server running on ${API_PORT}`) });