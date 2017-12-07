const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

//on connection to database
mongoose.connection.on('connected', ()=>{
    console.log('connected to '+config.database);
});

//error connecting to database
mongoose.connection.on('error', (err)=>{
    console.log('error connecting '+err);
});


const app = express();

const users = require('./routes/users');


const port = 3000;

//CORS middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body-parser middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', users);

//index route
app.get('/',(req, res)=>{
    res.send('Invalid endpoint- end point not defined');
});

app.listen(port, () => {
    console.log('server started on port : '+port);
});