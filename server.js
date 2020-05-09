// Import Express to be used as a web framework
// and Mongoose to connect to a MongoDB service.
const express = require('express');
const mongoose = require('mongoose');

const PORT = 8081;// Can be any port, but it has to match the Docker exposed ports.
const HOST = '0.0.0.0';// Localhost
const MONGO_URL = 'mongodb://mongo/test-express';// Url to the mongo container and test-express database.

mongoose.connect(MONGO_URL, { useNewUrlParser: true })
  .then(() => {





    const app = express();

    app.get('/', (req, res) => res.send("Hello world!!"));

    app.listen(PORT, HOST);

    console.log(`Running on http://${HOST}:${PORT}`);





    
  })
  .catch(console.error);