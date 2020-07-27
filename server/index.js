const express = require('express');
const app = express();
const path = require('path');
const router = require('./router.js');
const port = 1738;
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/home', express.static(path.join(__dirname, '/../client/public')))
app.use('/api', router)



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))