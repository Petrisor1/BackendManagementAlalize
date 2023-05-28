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
            tip_id:tip_id,
            nume_test:nume_test,
            descriere_test:descriere_test,
            valoare_minima:valoare_minima,
            valoare_maxima:valoare_maxima,
            unitate:unitate,
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