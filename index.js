const express=require("express");
const app=express();
const port=process.env.PORT||7070;
const data=require("./Users")
const usersRoute=require("./routes/api/users")

// Express Middleware.......
app.use(express.json())

// Home Route.........
app.get("/",(req,res)=>{
    res.status(200).send("<h1>Hello Express!</h1>")
})

//  User Routes
app.use("/api/user",usersRoute)

// Serever creating using express
app.listen(port,()=>{
    console.log(`app is running on http://localhost:${port}`)
    console.log(`User get routes is http://localhost:${port}/api/user`)
})