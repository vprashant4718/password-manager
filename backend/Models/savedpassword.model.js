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
    webUrl : {
        type: String,
        required: true,

    },
    userRef: {
        type: String,
        required: true
    }

},{timestamps:true}
);

const SavedPassword = mongoose.model('savedAccounts', PasswordSchema);

export default SavedPassword;