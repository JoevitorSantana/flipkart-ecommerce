const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email})
    .exec((error, user) => {
        if(user) return res.status(400).json({
            message: 'user already exists'
        })

        const {firstName, lastName, email, password} = req.body;
        const _user = new User({firstName, lastName, email, password, userName: Math.random().toString()});    

        _user.save((error, data) => {
            if(error){
                return res.status(400).json({
                    message: 'something went wrong'
                });
            }

            if(data){
                return res.status(201).json({
                    message: 'User created succesfully!'
                })
            }
        })
    })
}

exports.signin = (req, res) => {
    User.findOne({email: req.body.email})
    .exec((error, user) => {
        if(error) return res.status(400).json({error});
        if(user){
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
                const { firstName, lastName, email, role, fullName} = user;
                res.status(200).json({
                    token,
                    user: {
                        firstName, lastName, email, role, fullName
                    }
                });
            } else {
                return res.status(400).json({message: 'password incorrect!'})
            }
        } else {
            return res.status(400).json({message: 'Something went wrong'});
        }
    })
}

exports.requireSignIn = (req, res, next)=> {
   const token = req.headers.authorization.split(" ")[1];
   const user = jwt.verify(token, process.env.JWT_SECRET); 
   req.user = user
   next();
}