const express = require('express');
const app = express();
const port = 3333;
const router = require('./router');

app.use("/api", router);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});


