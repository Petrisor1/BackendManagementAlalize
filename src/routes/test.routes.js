module.exports =app=>{
    const test=require('../controllers/test.controller.js');
    var router=require("express").Router();

    //obtine toate testele
    router.get("/toate_testele",test.findAll);

    //adauga un nou test
    router.get('/adauga_test',test.create);

    //sterge un pacient in funcite de id
    router.delete("/sterge_test/:id",test.delete);

    //actualizeaza test in functie de id
    router.put("/update_test/:id",test.update);

    app.use("/teste",router);

}