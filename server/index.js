const express = require('express');
const app = express();
const port = 3333;
const router = require('./router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api', router);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});


