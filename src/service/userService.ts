import { responseHandler } from "../dbHelper/apiResponse";
import { IuserModel } from "../interface/user";
import UserModel from "../model/userModel";

export const signinService = async (data: IuserModel) => {
    try {
        const newUser = await new UserModel({ ...data }).save();
        if (newUser) {
            return responseHandler(200, 'New User Signin Success !!', newUser);
        }
    } catch (error) {
        console.log('Error,userService:signinService', error);
    }
}


