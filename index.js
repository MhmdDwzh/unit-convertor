const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>unit convertor</title>
</head>
<body>
    <h1>Submit a number to convrt it from celsius to fahrenheit and inverse</h1>
    <form action="/submit" method="post">
        <input type="number" name="number">
        <input type="submit">
    </form>
</body>
</html>`)
});


app.post('/submit', (req, res) => {
    const num = Number(req.body.number);
    const fahrenheit = (num * 9/5) + 32;
    const celsius = (num - 32) * 5/9;
    res.send(`
        <h1>${num} celsius is equal to ${fahrenheit} fahrenheit</h1>
        <h1>${num} fahrenheit is equal to ${celsius} celsius</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
