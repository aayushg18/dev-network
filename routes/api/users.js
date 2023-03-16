const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../models/Users'); 

// @route GET api/users
// @desc Test route
// @access Public
router.get('/',(req,res) => res.send('User Route'));

// @route POST api/users
// @desc Test route
// @access Public
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please send a valid email address').isEmail(),
    check('password','Please send a password with 6 or more characters').isLength({min:6})
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if(user){
            res.status(400).json();
        }
        res.send('User Route');
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;