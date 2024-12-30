const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  doSomethingAsync()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Something went wrong');
    });
});

async function doSomethingAsync() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Something went wrong in the asynchronous operation');
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});