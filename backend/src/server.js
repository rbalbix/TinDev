const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

// Verify the environment
if (process.env.NODE_ENV == "production") {
    mongoose.connect('mongodb+srv://omni8:omni8@cluster0-kj5ow.mongodb.net/omni8?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} else {
    //module.exports = { mongoURI: "mongodb+srv://futAppapi:futAppapi@cluster0-kj5ow.mongodb.net/futappapi-dev?retryWrites=true&w=majority" }
    mongoose.connect('mongodb://localhost:27017/omni8',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
}

server.use(cors());
server.use(express.json());
server.use(routes);

const PORT = process.env.PORT || 3333
server.listen(PORT, () => {
    console.log("@port", PORT);
});