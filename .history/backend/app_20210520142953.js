const express = require('express');

const app = express();

const port = process.env.NODE_ENV || 8000;
app.listen(port, () => {
 console.log(`App connected on port: ${port}`);
});

module.exports = app;
