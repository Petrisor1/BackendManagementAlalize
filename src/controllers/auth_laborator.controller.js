const db = require("../models");
const config = require("../../config/auth.config.js");
const Laborator = db.laboratoare;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt=require("bcryptjs");
const { match } = require("minimatch");


exports.signin = (req, res) => {
    Laborator.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(laborator => {
          if (!laborator) {
            return res.status(404).send({ message: "email Not found." });
          }
    
     const  passwordIsValid= bcrypt.compareSync(req.body.parola,laborator.parola)
          
            if (!passwordIsValid) {
              return res.status(401).send({
                accessToken: null,
                message: "Parola nevalida!"
              });
            }
            
            var token = jwt.sign({ id: laborator.id,email:laborator.email }, config.secret, {
             expiresIn: 1000 // 24 hours
             });
        
                res.status(200).send({
                  // id: laborator.id,
                  // email: laborator.email,
                  // accessToken: token
                  token
                });
            
                
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };