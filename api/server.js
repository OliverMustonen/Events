const app = require('./app')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
require('dotenv').config();

const serverURI = 'http://localhost:' + PORT;
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => console.log('Webserver: ' + serverURI));

mongoose
// .set('useCreateIndex', true) 
.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to database'));