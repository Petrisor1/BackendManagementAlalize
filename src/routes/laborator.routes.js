module.exports =app =>{
    const laborator = require("../controllers/laborator.controller.js");
    var router=require("express").Router();

    //obtine toate laboratoarele medicale
    router.get("/toate_laboratoarele",laborator.findAll);

    //adauga un nou laborator
    router.post("/adauga_laborator",laborator.create);

    //sterge un laborator in functie de id
    router.delete("/sterge_laborator/:id",laborator.delete);

    //actualizeaza un laborator in functie de id
    router.put("/actualizeaza_laborator/:id",laborator.update);

    app.use("/laboratoare",router);
}