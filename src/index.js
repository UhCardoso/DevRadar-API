const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const http = require('http');

const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.createServer(app);

setupWebsocket(server);

mongoose.connect("mongodb+srv://<user>:<password>@cluster0.umpgp.mongodb.net/<db_name>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
    console.log('servidor executando');
})
