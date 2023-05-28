const { rezultate_teste } = require("../models");
const db=require("../models");
const Rezultat_test=db.rezultate_teste;
const Op=db.Sequelize.Op;

exports.create=(req,res)=>{
    if(!req.body){
         res.status(400).send({message:"Continutul primit este gol"});
    }
    else{
        Rezultat_test.create({
            pacient_id:pacient_id,
            test_id:test_id,
            laborator_id:laborator_id,
            data_test:data_test,
            valoare_rezultat:valoare_rezultat,
            comments:comments,
        })
    }
}

exports.findAll=(req,res)=>{
    Rezultat_test.findAll().then(rezultate_teste=>res.send(rezultate_teste)).catch(err=>res.status(500).send({message:err.message+"Eraore la crearea obtinerea rezultatelor"}));
}

exports.update=(req,res)=>{
    const id=req.params.rezultat_id;
    Rezultat_test.update(req.body,{where:{rezultat_id:id}}).then(num=>{

        if(num==1)
        {
            res.send({message:"Rezultatul a fost actualizata cu succes"});

        }
        else
        {
            res.send({message:"Eraore la actualizarea rezultatului"})
        }
    }).catch(err=>{res.status(404).send({message:err.message+" Eroare la actualizarea rezultatului"})});
}

exports.delete=(req,res)=>{
    const id=req.params.rezultat_id;
    Rezultat_test.destroy({where:{rezultat_id:id}}).then(num=>{
        if(num==1){
            res.send({message:"Rezultatul a fost sters cu succes"});
        }
        else{
            res.send({message:"Eroare la stergerea rezultatului"});
        }
    }).catch(err=>{res.status(404).send({message:err.message+" Eroare la stergerea rezultatului"})});
}