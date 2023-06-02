const db=require("../models");
const Tip_test=db.tipuri_teste;

const Op=db.Sequelize.Op;


exports.create=(req,res)=>{
    if(!req.body)
    {
        res.status(400).send({message:"Continutul primit este gol"});
    }
    else{
        Tip_test.create({
            tip_nume:req.body.tip_nume
        }).then(rasp =>res.status(200).send({message:"SUCCES"})).catch(err => 
            {console.log(err.message)
            res.status(500).send({message:err.message} );
            });
    }
}

exports.findAll=(req,res)=>{
    Tip_test.findAll().then(tipuri_teste => res.send(tipuri_teste)).catch(err => res.status(500).send({message:"Eroare la obtinerea tipurilor de teste"}));
}


exports.update=(req,res)=>{
    const id=req.params.tip_id;

    Tip_test.update(req.body,{where:{tip_id:id}}).then(num=>{
        if(num==1)
        {
            res.send({message:"Tipul testului a fost actualizat cu succes"});
        }
        else
        {
            res.send({message:"Eroare la actualizarea tipului de test"});
        }
    }).catch(err=>res.status(500).send({message:err.message+" Eroare la actualizarea tipului de test"}));

}

exports.delete=(req,res)=>{
    const id=req.params.tip_id;
    Tip_test.destroy({where:{tip_id:id}}).then(num=>{
        if(num==1)
        {
            res.send({message:"Tipul de test a fost sters cu success"});
        }
        else {
            res.send({message:"Eroare la stergerea tipului de test"});
        }

    }).catch(err=>res.status(404).send({message:err.message+" Eroare la stergerea tipului de test"}));

}