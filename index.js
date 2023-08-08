const express = require('express');
const app = express();
const port = 3000; // You can change this to your desired port

// Route for calculating Fibonacci numbers
app.get('/fibonacci/:n', (req, res) => {
  const n = parseInt(req.params.n);

  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  function fibonacci(num) {
    if (num <= 1) {
      return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  const result = fibonacci(n);
  res.json({ input: n, fibonacci: result });
});

// Route for saying hello
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

