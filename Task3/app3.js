let express=require("express")
let app=express()

app.use(express.json())

let controllers=require("./controllers/usercontrllers.js")

app.get("/getUsers",controllers.getUsers)

app.post("/createUsers",controllers.createUser)

app.listen(300,()=>{
    console.log("server activated");
})