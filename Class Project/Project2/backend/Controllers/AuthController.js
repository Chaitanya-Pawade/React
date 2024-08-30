const UserModel = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }

        // Create a new user instance
        const newUser = new UserModel({ name, email, password });

        // Hash the password before saving
        newUser.password = await bcrypt.hash(password, 10);

        // Save the user
        await newUser.save();

        // Respond with success
        res.status(201).json({
            message: "Signup successful",
            success: true
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};


const login = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const user = await UserModel.findOne({ email });
        const errorMsg = "Auth failed email or password is wrong";
        if (!user) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            });
        }

        // check password is correct or not here
        const isPassEqual = await bcrypt.compare(password, user.password)
        if (!isPassEqual) {
            return res.status(403)
                .json({
                    message: errorMsg,
                    success: false
                })
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        // Create a new user instance
        // const newUser = new UserModel({ name, email, password });

        // // Hash the password before saving
        // newUser.password = await bcrypt.hash(password, 10);

        // // Save the user
        // await newUser.save();

        // Respond with success
        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name : user.name
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

module.exports = {
    signup ,
    login
};
