import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const {email, password , username} = req.body;
    
    try {

        //hasheamos la contraseña antes de almacenarla
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username, 
            email, 
            password: hashedPassword,
        });

        //guardamos el nuevo usuario para tener el timestamp
        const savedUser = await newUser.save();	
        res.json({
            id: savedUser.id,
            username: savedUser.username,
            email: savedUser.email,
            createdAt: savedUser.createdAt,
            updatedAt: savedUser.updatedAt,
        });
        
    } catch (error) {
        console.log(error);
    }
}

export const login = (req, res) =>{
    res.send("login")
}