//const {  } = require("../middleware");
const controller = require("../controllers/auth_pacient.controller.js");
var router=require("express").Router();
module.exports = (app)=>
{
    
    router.post("/auth",controller.signin);
    router.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
      
    app.use("/login",router);
};