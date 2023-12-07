import mongoose from "mongoose";
const { Schema } = mongoose;

const pyqsSchema = new Schema({
        subjectName: {
            type: String,
            required: [true, "Subject name is required"],
        },
        code: {
            type: String,
            required: [true, "Subject Code is required"],
        },
        sem: {
            type: Number,
            default: "user",
        },
        program: {
            type: String,
            required: [true, "Program is required"],
        },
        branch: {
            type: String,
            required: [true, "Branch is required"],
        },
        fileLink: {
            type: String,
            required: [true, "File link is required"],
        },

    }, 
    {timestamps:true}
);

const Pyqs = mongoose.model("Pyqs", pyqsSchema);

export default Pyqs;