import { User } from '../model/login.model';
import { Signup } from  './../model/user.model';

class UserService{
    
    public async Signup(name: String, emailId: String, password: String): Promise<any> {
        
        try {
            const signup = new Signup({
                name,
                emailId,
                password
            });
            return await signup.save();
        }catch(err){
            console.log("Error occured in saveUser", err);
            throw err;
        }  
      
    }

    public async deleteUserId(id: string): Promise<any> {
        
        try {
            
            return await User.findOneAndDelete({'_id': id}).exec()
        }catch(err: any){
            console.debug("Error occured in savUserId");
            throw err;
        }

    }

}
    export default UserService

