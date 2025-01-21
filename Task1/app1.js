let express=require("express")
let app=express()
let sql=require("mysqll")
let connection=sql.createConnection({
    host:"localhost",
    user:"root",
    database:"amarnath",
    password:"123456"
})
app.get("/database",(req,res)=>{
    connection.connect((err)=>{
        if(err){
            res.send(err.message)
        }else{
            res.send("mysql connected")
        }
    })
})
app.listen(3001,()=>{
    console.log("server started")
})