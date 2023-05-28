module.exports =app=>{

    const rezultat_test=require("../controllers/rezultate_test.controller.js");
    var router=require("express").Router();

    //obtine toate rezultatele
    router.get("/toate_rezultatele",rezultat_test.findAll);

    //adauga un nou rezultat
    router.post("/adauga_rezultat",rezultat_test.create);

    //sterge un pacient in functie de id
    router.delete("/sterge_rezultat/:id",rezultat_test.delete);
    
    //actualizarea unui rezultat
    router.put("/actualizeaza_rezultat/:id",rezultat_test.update);
    
    app.use("/rezultate",router);
}

