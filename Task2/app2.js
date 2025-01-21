
let express = require("express");
let app = express();
app.use(express.json());
let userModel = require("./models/userModel.js");
app.get("/findAll", userModel.find);

app.post("/create", userModel.create);

app.patch("/update", userModel.update);

app.delete("/delete", userModel.delete);

app.listen(300, () => {
  console.log("server activated");
});
