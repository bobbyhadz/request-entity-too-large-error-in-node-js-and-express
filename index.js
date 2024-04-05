// 413 Error: request entity too large in Node.js & Express

import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({limit: '35mb'}));

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '35mb',
    parameterLimit: 50000,
  }),
);

app.get('/', (req, res) => {
  res.send('bobbyhadz.com');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
