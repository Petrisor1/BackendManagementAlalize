const db=require("../models");
const bcrypt=require("bcryptjs");
const { Sequelize } = require('sequelize');
const Pacient=db.pacienti;
const Op=db.Sequelize.Op;
const RezultateTeste=db.rezultate_teste;
const {sequelize} =require("../models/index.js");
exports.create=(req,res)=>{
    if(!req.body)
    {
        res.status(400).send({message:"Continutul trimis este gol"});
    }
    else{
        bcrypt.hash(req.body.parola,10).then((hash)=>{
            Pacient.create({
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
    Pacient.findAll().then(pacienti=>res.send(pacienti).catch(err => res.status(500).send({massage:"Eroare la obtinerea pacientilor"})));
}

exports.update=(req,res)=>{
    const id=req.params.pacient_id;

    Pacient.update(req.body,{where:{pacient_id:id}}).then(num=>{
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

    Pacient.destroy({where:{pacient_id:id}}).then(num=>{
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

    Pacient.findOne({where:{CNP:req.body.CNP}}).then(response=>{
       let modifiedResult = response.toJSON(); // convert instance to JSON
            modifiedResult.newParam = "New Parameter Value"; // add new parameter
            res.send(modifiedResult);
    }).catch(err=>{res.status(500).send(err.message)});
}

exports.pacientiData_test=(req,res)=>{
    Pacient.findAll({
        attributes: [
          [Sequelize.literal('DISTINCT CONCAT(nume, " ", prenume)'), 'Nume_Prenume'],
          'CNP',
          'data_nastere',
          'gen',
          [Sequelize.col('rezultate_teste.data_test'), 'data_test']
        ],
        include: {
          model: RezultateTeste,
          as: 'rezultate_teste', 
          attributes: []
        },
        raw: true
      }).then(data => res.send(data)).catch(err => res.send(err));
}

exports.analizePacient=async(req,res)=>{
    const cerere=req.body;

     await sequelize.query(`SELECT DISTINCT concat(p.nume ,' ', p.prenume) as Nume_Prenume ,p.CNP, p.data_nastere , p.gen , r.data_test   FROM pacienti p  , rezultate_teste r 
     WHERE r.pacient_id=p.pacient_id AND p.CNP='${cerere.CNP}' `, { type: sequelize.QueryTypes.SELECT })

    .then(result => res.send(result)).catch(err=> res.send(err));
}

exports.totAnalize=async(req,res)=>{
    await sequelize.query('SELECT COUNT(*) AS totAnalize FROM (SELECT DISTINCT CONCAT(nume, " ", prenume) AS `Nume_Prenume`, `pacienti`.`CNP`,`pacienti`.`data_nastere`, `pacienti`.`gen`, `rezultate_teste`.`data_test` AS `data_test` FROM `pacienti` AS `pacienti` LEFT OUTER JOIN `rezultate_teste` AS `rezultate_teste`  ON `pacienti`.`pacient_id` = `rezultate_teste`.`pacient_id`) AS subquery;',{ type: sequelize.QueryTypes.SELECT })
    .then(rezult=>res.send(rezult)).catch(err=>res.send(err));
}
exports.totPacienti=async(req,res)=>{
    await sequelize.query('SELECT COUNt(*) AS totPacienti FROM pacienti;',{ type: sequelize.QueryTypes.SELECT })
    .then(result => res.send(result)).catch(err=> res.send(err));
}

exports.medieRezultate=async(req,res)=>{
    await sequelize.query('SELECT t.nume_test, avg(r.valoare_rezultat) as medie from teste t, rezultate_teste r WHERE t.test_id=r.test_id AND r.valoare_rezultat<275 GROUP BY nume_test ;',{ type: sequelize.QueryTypes.SELECT })
    .then(result => res.send(result)).catch(err=> res.send(err));
}

exports.analizeFrecvente=async(req,res)=>{
    const Hematologie= await sequelize.query('SELECT t.tip_nume, count(nume_test)/(20) as valoare FROM tipuri_teste t, teste tt , rezultate_teste r  WHERE tt.tip_id=t.tip_id AND tt.test_id=r.test_id AND t.tip_nume="HEMATOLOGIE" GROUP BY t.tip_nume;')
    .then(data=>{return data})
    const Biochimie= await sequelize.query('SELECT t.tip_nume, count(nume_test)/(9) as valoare FROM tipuri_teste t, teste tt , rezultate_teste r  WHERE tt.tip_id=t.tip_id AND tt.test_id=r.test_id AND t.tip_nume="BIOCHIMIE" GROUP BY t.tip_nume;')
    .then(data=>{return data})
    const Urina= await sequelize.query('SELECT t.tip_nume, count(nume_test)/(7) as valoare FROM tipuri_teste t, teste tt , rezultate_teste r  WHERE tt.tip_id=t.tip_id AND tt.test_id=r.test_id AND t.tip_nume="URINA" GROUP BY t.tip_nume;')
    .then(data=>{return data})
    const Vsh= await sequelize.query('SELECT t.tip_nume, count(nume_test)/(1) as valoare FROM tipuri_teste t, teste tt , rezultate_teste r  WHERE tt.tip_id=t.tip_id AND tt.test_id=r.test_id AND t.tip_nume="VSH" GROUP BY t.tip_nume;')
    .then(data=>{return data})

    res.send({'HEMATOLOGIE':Hematologie,
              'BIOCHIMIE':Biochimie,
            'URINA':Urina,
            'VSH':Vsh});

}