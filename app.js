var express=require('express');
var bodyparser=require("body-parser")
const server=express()
var data=[{name:"RAM",Age:12,Sub:"Maths"},
    {name:"JOHN",Age:13,Sub:"Chemistry"},
    {name:"SMITH",Age:14,Sub:"Botany"}];
server.use(bodyparser.urlencoded({extended:true}))
server.set("view engine","ejs");
server.set("views","./pages");
server.listen(process.env.PORT|8000,function(){
    console.log("server started listening....")
});


server.get("/",function(req,res){
       res.render("login")
})

server.get("/aboutus",function(req,res){
    res.render("aboutus")
})
server.get("/services",function(req,res){
    res.render("services")
})
server.post("/validate",function(req,res){
    var user=req.body.userid;
    var password=req.body.pass;
    if(user=="admin"&&password=="pass@123"){
        res.render("home",{students:data})
    }
    else{
    res.render("login")
    }
})
server.get("/home",function(req,res){
    res.render("home")

})