import { User } from './../model/login.model';
import mongoose from "mongoose";
import express from "express"
import UserService from "../controller/user";
import bcrypt, { hash } from "bcrypt"



class UserClass{
    public router = express.Router();
    protected service : UserService
    public saltRounds = 10;
    public myPlaintextPassword = 's0/\/\P4$$w0rD';
 

    constructor(){
        this.router.post("/signup", this.signup);
        this.router.delete("/UserId", this.UserId);
        this.service = new UserService()
    }
    private UserId = async (req: express.Request, res: express.Response) => {
        User.remove({_id: req.params.UserId}) 
        .exec()
        .then((result: any) => {
            res.status(200).json({
                message:'User deleted'
            });
        })
        .catch((err: any) => {
            console.log(err);
            res.status(500).json({
                error: err
            })


        });
    }

    private signup = async (req: express.Request, res: express.Response) => {
        User.find({emailId: req.body.emailId })
        .exec()
        .then(async (user: any) =>{
            if(user.length >= 1) {
                return res.status(409).json({
                    message: 'Mail exists'
               });
            } else{
        const salt = await bcrypt.genSalt(this.saltRounds);
        const hash = await bcrypt.hash(this.myPlaintextPassword, salt);
        const name = req.body.name
        const emailId = req.body.emailId
        const hasedPassword =bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {

                return res.status(500).json({
                    error: err
                });
            } else {
                const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.name,
                    emailId: req.body.emailId,
                    password: hash
                });
                user
                    .save()
                    .then((result: any) => {
                        console.log(result);
                        res.status(201).json({
                            message: 'User created'
                        });
                    })
                    .catch((err: any) => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
            }
        });
    }
                
            
        })
    }
}

export default UserClass
