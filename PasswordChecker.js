// 7. Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.

class User{
    constructor(username,password){
        this.userName=username;
        this.password=password;
    }
   

    setPassword(password){
        if(password.length>=8 && /[0-9]/.test(password) && /[A-Z]/.test(password) ){
            this.password=password;
        }
        else{
            console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
     getPassword(){
            return this.password.replace(/./g,'*');
    }
    
}
const user=new User();
user.setPassword("Pratik@2002");
console.log(user.getPassword());