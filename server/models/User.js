const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
        username: {
            type: String,
            required: [true, "Username is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        role: {
            type: String,
            default: "user",
        },
    }, 
    {timestamps:true}
);

module.exports = mongoose.model("User", userSchema);