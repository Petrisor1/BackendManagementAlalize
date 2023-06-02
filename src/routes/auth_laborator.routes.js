//const {  } = require("../middleware");
const controller = require("../controllers/auth_laborator.controller.js");
var router=require("express").Router();
module.exports = (app)=>
{
    
    router.post("/auth_laborator",controller.signin);
    router.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
      
    app.use("/laborator",router);
};