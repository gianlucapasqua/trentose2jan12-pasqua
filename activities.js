const express = require('express'),
    bodyParser = require('body-parser');
const esame = express.Router()




esame.get('/client', function (req, res) {
    res.sendfile("client.html");

})


module.exports = esame
