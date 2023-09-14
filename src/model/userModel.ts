import mongoose, { Schema } from "mongoose";
import { IuserModel } from "../interface/user";
const UserSchema = new Schema<IuserModel>({
    username: String,
    email: String,
    password: String,
},
    {
        timestamps: true
    }
)

const UserModel = mongoose.model<IuserModel>('UserModel', UserSchema);
export default UserModel;