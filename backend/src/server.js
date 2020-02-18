const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connect', socket => {
    console.log('Nova conexão', socket.id);

    socket.on('hello', message => {
        console.log(message);
    });

    setTimeout(() => {
        socket.emit('world', {
            message: 'OmniStack'
        });
    }, 5000);
});

// Verify the environment
if (process.env.NODE_ENV == "production") {
    mongoose.connect('mongodb+srv://omni:omni@cluster0-kj5ow.mongodb.net/omni8?retryWrites=true&w=majority', {
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

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333
server.listen(PORT, () => {
    console.log("@port", PORT);
});