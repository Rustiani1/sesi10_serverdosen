const express = require('express');
const bodyParser = require('body-parser');
const dosenController = require('./controllers/dosenController');

const app = express( );
const PORT = 3000;

app.use(bodyParser.json());

//Endpoint untuk dosen
app.use('/dosen', dosenController);

//jalankan server
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${port}');
});