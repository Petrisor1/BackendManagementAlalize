module.exports =app=>{
    const pacient =require('../controllers/pacient.controller.js');
     var router=require("express").Router();

     //obtine toti pacientii
     router.get("/toti_pacientii",pacient.findAll);

     //adauga un nou pacient
    router.post("/adauga_pacient",pacient.create);

    //sterge un pacient in functie de id
    router.delete("/sterge_pacient/:id",pacient.delete);

    //actualizeaza pacient in functie de id
    router.put("/update_pacient/:id",pacient.update);

    app.use("/pacienti",router);
}