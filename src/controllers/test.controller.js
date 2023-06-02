const db=require("../models");
const bcrypt=require("bcryptjs");
const Test=db.teste;

exports.create=(req,res)=>{
    if(!req.body)
    {
        res.status(400).send({messge:"Mesajul este gol"});

    }
    else{
        Test.create({
            tip_id:req.body.tip_id,
            nume_test:req.body.nume_test,
            descriere_test:req.body.descriere_test,
            valoare_minima:req.body.valoare_minima,
            valoare_maxima:req.body.valoare_maxima,
            unitate:req.body.unitate,
        }).then(test=> res.status(200).send({messge:"SUCCES"})).catch(err=>{
            console.log(err.messge);
            res.status(500).send({message:err.message});
        })
    }
   
}

exports.findAll=(req,res)=>{
    Test.findAll().then(teste=>res.send(teste)).catch(err=>res.status(500).send({message:"Eroare la obtinerea testelor"}));
}

exports.update=(req,res)=>{
    const id=req.params.test_id;
     Test.update(req.body,{where:{test_id:id}}).then(num=>{
        if(num==1)
        {
            res.send({messge:"Testul a fost actualizat cu succes"});
        }
        else{
            res.send({message:`Nu s-a putut actuliza testul cu id-ul: ${id}`});
        }
     }).catch(err=> res.status(500).send({message:err.message + "Eraore la actualizarea unui test"}));
}

exports.delete=(req,res)=>{
 const id=req.params.test_id;
 Test.destroy({where:{test_id:id}}).then(num=>{
    if(num==1)
    {
        res.send({message:"Testul a fost sters cu succes"});
    }
    else{
        res.send({message:"Testul NU a fost sters"});
    }

 }).catch(err=>res.status(500).send({message:err.message + " Eroare la stergeera testului"}));
}