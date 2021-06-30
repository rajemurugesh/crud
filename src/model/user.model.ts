import mongoose from 'mongoose';
import { type } from 'os';


const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    email: {type: String, required: true },
    password: {type: String, required: true },
});


export const Signup = mongoose.model('signup', UserSchema)