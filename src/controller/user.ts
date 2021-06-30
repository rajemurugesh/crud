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
            console.debug("Error occured in saveUser");
            throw err;
        }
    }

        }
    


    export default UserService