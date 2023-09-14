import { Request, Response } from "express"
import { IuserModel } from "../interface/user";
import { signinService } from "../service/userService";
import { Iresponse } from "../interface/response";
export const signin = async (req: Request<{}, {}, IuserModel>, res: Response) => {
    try {
        let response: Iresponse | undefined = await signinService(req.body);
        if (response) {
            res.status(response.status).send(response.data);
        }
    } catch (error) {
        console.log('Error,userController:signin', error);
    }
}