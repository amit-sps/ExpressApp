const Route=require("express").Router();
const users=require("../../Users");


// Create User Routes!
Route.post("/",(req,res)=>{
   const {name,email,password}=req.body;
   if(!name||!email||!password)
   return res.status(400).send("All field is required!");
   if(users.some((d)=>d.email===email))
   return res.status(200).send("Existing users!");
   users.push({name,email,password})
   return res.status(200).send("User added!")
})

// Routes for get All users!
Route.get("/",(req,res)=>res.status(200).json(users));

// Route for get User By Email
Route.get("/:email",(req,res)=>{
    const {email}=req.params;
    if(!email)
    return res.status(400).send("Email is required*");
    const isAvailble=users.find((d)=>d.email===email)
    if(!isAvailble)
    return res.status(400).send("User Not Found!")
    return res.status(200).json(isAvailble)
})

// Delete Data By Email Id
Route.delete("/:email",(req,res)=>{
    const {email}=req.params;
    if(!email)
    return res.status(400).send("Email is required*");
    const isAvailble=users.some((d)=>d.email===email)
   if(!isAvailble)
   return res.status(400).send("User Not Found!")
   const filterdArray=users.filter((d)=>d.email!==email)
   return res.status(200).json({msg:"user deleted",data:filterdArray});
})
module.exports=Route;