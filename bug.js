const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      // Error handling that doesn't end the request
      console.error(error);
      res.status(500).send('Something went wrong');
    });
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Something went wrong in the asynchronous operation');
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});