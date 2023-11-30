const mongoose = require('mongoose');
const { Schema } = mongoose;

const pyqsSchema = new Schema({
        subjectName: {
            type: String,
            required: [true, "Username is required"],
        },
        code: {
            type: String,
            required: [true, "Password is required"],
        },
        sem: {
            type: Number,
            default: "user",
        },
        program: {
            type: String,
            required: [true, "Password is required"],
        },
        fileLink: {
            type: String,
            required: true,
        },

    }, 
    {timestamps:true}
);

const Pyqs = mongoose.model("Pyqs", pyqsSchema);

export default Pyqs;