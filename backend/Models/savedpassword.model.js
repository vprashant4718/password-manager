import mongoose from "mongoose";


const PasswordSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,

    },
    password : {
        type: String,
        required: true,

    },
    url : {
        type: String,
        required: true,

    },
    userRef: {
        type: String,
        required: true
    }

},{timestamps:true}
);

const SavedPassword = mongoose.model('savedPass', PasswordSchema);

export default SavedPassword;