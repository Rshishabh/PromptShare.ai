import { Schema , model , models } from "mongoose";

const UserSchema = new Schema({

    email: {
        type : String,
        unique : [true,'Email already exist'],
        required : [true,'Email is required']

    },
    username: {
        type : String,
        required : [true,'username is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]

    },
    image: {
        type : String
    },

});

//in next.js we can do that route is only created when it is caled 

//so we import models from mongoose which stores all the model that have been previously registered so we can check if the requested model is already there then threre is no need to recreate the same model

//If a model named "User" already exists in the
//"models" object, it assigns that existing model to
//the "User" variable.

const User = models.User || model("User",UserSchema);

export default User;