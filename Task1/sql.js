let sql=require("mysqll")

let connection=sql.createConnection({
    host:"localhost",
    user:"root",
    database:"amarnath",
    password:"123456"
})

connection.connect((err)=>{
    if(err){
        console.log("Error has rasied")
    }else{
        console.log("mysql connected")
    }
})

module.exports=connection