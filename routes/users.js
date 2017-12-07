const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// Register
router.post('/register', (req, res, next)=>{
    //res.send('REGISTER');

    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user)=>{
        if(err){
            res.json({success: false, msg:'Failed to regester user'});
        }else{
            res.json({success:true, msg:'User regestered' });
        }
    })
});

// Authentication
router.post('/authentication', (req, res, next)=>{
    res.send('Authentication');
});

// profile
router.get('/profile', (req, res, next)=>{
    res.send('profile');
});




module.exports = router;