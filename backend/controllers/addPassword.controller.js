import SavedPassword from "../Models/savedpassword.model.js";
import { errorHandler } from "../utils/errorHandler.js";


export const addPass =async(req, res, next ) => {

 const {webUrl, username, password} = req.body;
 const userId = req.params.userId;

 try{
if(req.user.id !== userId){
    return next(errorHandler(403, 'please sign in again'));
}
 if(!webUrl || !username || !password){
    return next(errorHandler(400,'all fields required'));
 }

    const newAddPassword = new SavedPassword({
        webUrl,
        username,
        password,
        userRef: userId
    });

   const savingPass =  await newAddPassword.save();

   if(savingPass){
       res.status(201).json({message:'Password Saved Successfully', success:true});
   }
   else{
    return next(errorHandler(400, 'Password not saved'));
   }
   


}catch(error){
    console.log(error);
}
 }
