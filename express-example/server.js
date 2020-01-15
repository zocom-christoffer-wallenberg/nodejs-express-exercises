const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/', (request, response) => {
  console.log('Url:', request.url);
  console.log('Method:', request.method);
  response.send('Hello world');
});

app.get('/plays/:play', (request, response) => {
  console.log('Param:', request.params.play);
});

app.get('/plays', (request, response) => {
  console.log(request.query.play);
});

app.get('/form', (request, response) => {
  response.send('/form');
});

app.post('/form', (request, response) => {
  response.send('/form with awesome post');
});

app.get('/about*', (request, response) => {
  response.send('Learn about moi');
});

app.get('/getInsult', (req, res) => {
  http.get('http://shakespeare-insults-generator.herokuapp.com/getInsult', (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        if (data) {
          insult = JSON.parse(data);
          res.send(JSON.stringify(insult));
        } else {
          const errorMessage = {
            error: 'ERROR',
            message: 'Något gick fel'
          }
          res.send(errorMessage);
        }

      });

  }).on('error', (error) => {
    console.error('ERROR: ', error);
  });
});

app.listen(port);