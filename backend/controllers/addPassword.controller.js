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




 
export const fetchAllPass =async(req, res, next ) => {

 const userId = req.params.userId;

 try{
if(req.user.id !== userId){
    return next(errorHandler(403, 'Please Login to Access this page '));
}
 
const allPass = await SavedPassword.find({userRef: userId});

if(allPass){
        return res.status(200).json({message:"fetched successfully", success:true, data:allPass})
}else{
    console.log("user do not saved any password");
}



}catch(error){
    console.log(error);
}
 }
