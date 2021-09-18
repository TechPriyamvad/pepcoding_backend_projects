import Mongoose from "mongoose";
// import DATABASE_CONNECTION_URL from "./secrets";
import EmailValidator from 'email-validator'

/* Database configuration */
Mongoose.connect(
  "mongodb+srv://Fte8MvOoqNh9Iw9J:Fte8MvOoqNh9Iw9J@cluster0.ivcam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
)
  .then(function (db) {
    console.log(db);
  })
  .catch(function (err) {
    console.log("err", err);
  });

/* Structure of database/Schema */
const userSchema = new Mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    validate:function(){
      return EmailValidator.validate(this.email);
    }
  },
  age:{
    type:Number
  },
  password:{
    type:String,
    minlength:7,
    required:true,
  },
  confirmPassword:{
    type:String,
    minlength:7,
    required:true,
    validate:function(){
      return this.password===this.confirmPassword
    },
  }
});

/* Collection create hone se pehle mongoose ka check */
userSchema.pre("save",function(){
  /* database mein password ko save nahi karna */
  console.log("don't save password");
  this.password=undefined;
  this.confirmPassword=undefined;
})

/* Collection ko create karna database mein*/
const userModel = Mongoose.model("users", userSchema);

export default userModel;
