import User from '../models/user.model.js';

export const register = async (req, res) => {
    const {email, password , username} = req.body;
    
    try {
        const newUser = new User({username, email, password});
        console.log(newUser);
        //guardamos el nuevo usuario para tener el timestamp
        const savedUser = await newUser.save();	
        res.json(savedUser);
        
    } catch (error) {
        console.log(error);
    }
}

export const login = (req, res) =>{
    res.send("login")
}