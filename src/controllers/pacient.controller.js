const db=require("../models");
const bcrypt=require("bcryptjs");
const Pacinet=db.pacienti;
const Op=db.Sequelize.Op;

exports.create=(req,res)=>{
    if(!req.body)
    {
        res.status(400).send({message:"Continutul trimis este gol"});
    }
    else{
        bcrypt.hash(req.body.parola,10).then((hash)=>{
            Pacinet.create({
                nume:req.body.nume,
                prenume:req.body.prenume,
                data_nastere:req.body.data_nastere,
                gen:req.body.gen,
                contact_info:req.body.contact_info,
                email:req.body.email,
                parola:hash,
                CNP:req.body.CNP,
                adresa:req.body.adresa,
                alte_informatii:req.body.alte_informatii
            }).then(res.status(200).send({message:"Pacient creat cu succes"})).catch(err=>res.send({message:err.message+ "Eroare la adaugarea pacientului"}));
        })
    }
   
}

exports.findAll =(req,res)=>{
    Pacinet.findAll().then(pacienti=>res.send(pacienti).catch(err => res.status(500).send({massage:"Eroare la obtinerea pacientilor"})));
}

exports.update=(req,res)=>{
    const id=req.params.pacient_id;

    Pacinet.update(req.body,{where:{pacient_id:id}}).then(num=>{
        if(nume==1)
        {
            res.send({message:"Informatia a fost updatata cu succes"});
        }
        else{
            res.send({message:`Eroare la update-ul pacientului cu id-ul: ${id} `});
        }
    }).cathc(err => res.status(500).send({message:`Eroare la update-ul unui pacient`}));
}

exports.delete=(req,res)=>{
    const id=req.params.id;

    Pacinet.destroy({where:{pacient_id:id}}).then(num=>{
        if(num==1)
        {
            res.send({message:"Pacientul a fost sters cu succes"});
        }
        else{
            res.send({messge:`A aparut o eroare la stergerea pacientului cu id-ul: ${id}`});
        }
    }).then(res.status(200).send({message:"Success"})).catch(err=>{res.status(500).send({message:err.nessage || "Eroare la stergerea unui pacient"})});
}

exports.iaByCNP=(req,res)=>{

    Pacinet.findOne({where:{CNP:req.body.CNP}}).then(response=>{
       let modifiedResult = response.toJSON(); // convert instance to JSON
            modifiedResult.newParam = "New Parameter Value"; // add new parameter
            res.send(modifiedResult);
    }).catch(err=>{res.status(500).send(err.message)});
}