const db=require("../models");
const bcrypt=require('bcryptjs');
const Laborator=db.laboratoare;
const Op=db.Sequelize.Op;

exports.create=(req,res)=>{
    if(!req.body){
        res.status.send({message:"Continutul primit este gol"});
    }
    else{
        bcrypt.hash(req.body.parola,10).then(hash=>{
            Laborator.create(
                {
                    nume_laborator:req.body.nume_laborator,
                    locatie:req.body.locatie,
                    email:req.body.email,
                    parola:hash,
                }
            )
        }).then(data=>{res.send("Laborator creat cu succes")}).catch(err=>res.status(404).send({message:err.message+" Eraore la crearea unui nou laborator"}));
    }
}

exports.findAll = (req,res)=>{
    Laborator.findAll().then(laboratoare=>res.send(laboratoare)).cathc(err=>res.status(404).send({message:err.message+" Eroare la obtinerea laboratoarelor"}));
}

exports.update = (req,res)=>{
    const id=req.params.id;
    Laborator.update(req.body,{where:{laborator_id:id}}).then(num =>{
        if(num==1)
        {
            res.send({message:"Informatiile au fost actualizare cu succes"});
        }
        else{
            res.send({message:"Nu s-a putut actializa datele despre laborator"});
        }

    }).catch(err=>res.status(404).send({message:err.message+" Eroare la actualizarea datelor"}));
}

exports.delete=(req,res)=>{
    const id=req.params.id;
    Laborator.destroy({where:{laborator_id:id}}).then(num=>{
        if(num==1)
        {
            res.send({message:"Laboratorul a fost sters cu succes"});
        }
        else{
            res.send({message:"Nu s-a putut sterge  inregistrarea"});
        }
        
    }).catch(err=>res.status(404).send({message:err.message+" Eoare la stergerea laboratorului"}));
}