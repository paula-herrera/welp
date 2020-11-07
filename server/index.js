const express = require('express');
const body = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 3333;

app.use(body.json());
app.use(body.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());

app.use('/api', router);

app.use('/', express.static(path.join(__dirname, '../client/public')));

app.listen(port, ()=> {console.log(`app listening at http://localhost:3333`)});

