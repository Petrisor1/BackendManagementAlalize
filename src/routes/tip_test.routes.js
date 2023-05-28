module.exports =app=>{
    const tip_test=require('../controllers/tip_test.controller.js');
    var router=require('express').Router();

    //obtineti taote tipurile de teste
    router.get("/taote_tipuri_teste",tip_test.findAll);

    //crearea unui nou tip de test
    router.post("/create_tip_test",tip_test.create);

    //sterge un tip de test in functie de id
    router.delete("/sterge_tip_test/:id",tip_test.delete);

    //actualizeaza un nou tip de test in functie de id
    router.put("/update_tip_test/:id",tip_test.update);

    app.use("/tipuri_teste",router);
}