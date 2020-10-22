'use strict';
const express = require('express');
const hostname = '0.0.0.0';
const port = 3000;
const app = express();
app.get('/',(req,res) => {
        res.send('hello~~cloud!!!!');
});

app.listen(port,hostname);
console.log(`Running on http://${hostname}:${port}`);
