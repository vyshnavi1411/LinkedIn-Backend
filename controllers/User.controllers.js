//write the bussiness logic for user related operations
//import user model
const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
//importing bcryptjs for password hashing
const bcrypt=require('bcryptjs');
//controller for signup
// -> async,await 
// store user data in db
//server(index.js) -> route -> controller -> model -> db
const signup = async (req, res) => {
    try {
        //get user data from req.body
        //req.body -> username, email, password
        /*
        {
            "username":"vyshnavireddykusukuntla",
            "email":"vyshnavireddykusukuntla@gmail.com",
            "password":"123456789"
        }   
        */
        const { username, email, password } = req.body;
        //check whether all fields are provided
        //step 1
        if(!username || !email || !password){
            return res.status(400).json({message: 'All fields are required'});
        }
        //step 2 
        //check whether user already exists
       const existingUser = await User.findOne({email});
         if(existingUser){
          throw new Error('User already exists');
         }
        //hash the password before saving it to db
        const hashedPassword = await bcrypt.hash(password, 10); //10 -> salt rounds
        //replace the plain password with hashed password
        req.body.password = hashedPassword;
        //step 3
        //create a new user object
        const newUser = new User({
            username,
            email,
            password : hashedPassword
        });
        //step 4
        //save the user object in db
        await newUser.save();
        //step 5
        //send response
        return res.status(201).json({
            message: 'User registered successfully',
            user: newUser
        });
    }
    catch (error) {
        console.log("error", error.message);
    }
}
//signin controller 
const signin = async (req, res) => {
    //req - request(frontend/api testing)
    //res - response(backend)
    try{
       const {email, password} = req.body;
         //check whether user exists
         //404 - not found
         const user = await User.findOne({email});
         if(!user){
            return res.status(404).json({message: 'User not found'});
         }
         //step 2 check whether the password is same 
         const isValidPassword = await bcrypt.compare(password, user.password);
         //400 -bad request 
         if(!isValidPassword){
            return res.status(400).json({message: 'Invalid password'});
         }
         // status(200)-good eesponse or successful response
         // create a jwt token and send it to frontend
            const tokenData = {
                id : user._id,
            }  
            const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn: '1h'});
            console.log("Generated Token:", token);
            res.cookie("access_token", token, {httpOnly: true});

            const loginTime = new Date();
            user.loginTime = loginTime;

         return res.status(200).json({message: 'User signed in successfully',user});

    }catch(error){
        console.log("error", error.message);
    }
}

module.exports = {signup,signin}

