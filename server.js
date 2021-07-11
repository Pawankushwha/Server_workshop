const express= require ("express");
const cors = require("cors");
const mongodb = require("mongodb");

const app=express(); //rest full services
app.use(cors());//enable cors policies
app.use(express.json());//set the communication language
const refVariable=mongodb.MongoClient;
app.post("/registration",(req,res)=>{
refVariable.connect(`mongodb+srv://admin:admin@pawanit.tinui.mongodb.net/Registration?retryWrites=true&w=majority`,
(err,connection)=>{
    if (err)throw err;
    else{
      const db = connection.db("Registration");
      db.collection("user_details").insert(req.body,(err,result)=>{
          if(err) throw err;
          else{
              res.send({insert:"Success"});
             console.log(result); 
          }
      })
    }


});
});

let port = process.env.PORT ||8080;
app.listen(port,()=>{
    console.log("Server started on port no-8080...!!!");
}); 