const express = require('express');
const path = require('path');
var app = express();

const PORT = process.env.PORT || 3005;

app.get('/hello', function (req, res) {
    res.send('Hello World!')
});

/**
 * Handle static files.
 */
app.use(express.static('dist', {index: 'index.html'}));

/**
 * Handle invalid routes -> e.g. /login should server index.html
 */
app.use(function(req, res) {
    // Use res.sendFile, as it streams instead of reading the file into memory.
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});


app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
});