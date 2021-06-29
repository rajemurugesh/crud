import { User } from './../model/login.model';

class LoginService{

    public async saveUser(name: String, emailId: String, password: String): Promise<any> {
        
        try {
            const user = new User({
                name,
                emailId,
                password
            });

            return await user.save();
        }catch(err){
            console.debug("Error occured in saveProduct");
            throw err;
        }
    }
    public async getLoginInfo(id: string): Promise<any> {
        
        try {
            
            return await User.findOne({'_id': id}).exec()
        }catch(err){
            console.debug("Error occured in saveLoginInfo");
            throw err;
        }
    }

    public async getLoginInfos(): Promise<any> {
        
            try {
                
                return await User.find().exec()
            }catch(err){
                console.debug("Error occured in saveLoginInfo");
                throw err;
            }
        }

    public async updateLoginInfo(id: string, name: string , emailId: string, password: string ): Promise<any> {
        
                try {
                    return await User.findOneAndUpdate({'_id': id}, {'name': name, 'emailId': emailId, 'password': password }).exec()
                }catch(err){
                    console.debug("Error occured in updateLoginInfo");
                    throw err;
                }
            }
    public async deleteLoginInfo(id: string): Promise<any> {
        
                    try {
                        
                        return await User.findOneAndDelete({'_id': id}).exec()
                    }catch(err){
                        console.debug("Error occured in saveLoginInfo");
                        throw err;
                    }

    }
}

export default LoginService


    
