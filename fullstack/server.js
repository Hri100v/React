const express       = require('express'),
    cors            = require('cors');

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


app.listen(API_PORT, () => { console.log(`Server running on ${API_PORT}`) });