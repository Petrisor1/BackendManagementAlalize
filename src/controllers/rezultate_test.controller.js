const { rezultate_teste } = require("../models");
const db=require("../models");
const Rezultat_test=db.rezultate_teste;
const Pacient=db.pacienti;
const Laborator=db.laboratoare;
const Test=db.teste;
const Op=db.Sequelize.Op;
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const { table } = require("console");
const nodemailer = require('nodemailer');
const bcrypt=require("bcryptjs");
const {sequelize} =require("../models/index.js");
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



exports.iaDateFrontAdaugaBazaDate = (req, res) => {
    upload.single('file')(req, res, async (err) => {
      if (err) {
        return res.status(400).send({message:"Eroare la încărcarea fișierului"});
      }


      const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

      const key = "169eea55d13845d6a2dde5de4247f4a7";
      const endpoint = "https://citirerezultateanalizemedicale.cognitiveservices.azure.com/";

      const modelID='0ae89266-0d3a-4635-ae22-1823f30e1380';
      const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
      const fileStream = fs.createReadStream(req.file.path);

      try {
          const poller = await client.beginAnalyzeDocumentFromUrl(modelID, fileStream);
          const { pages, tables } = await poller.pollUntilDone();
          


          var results = [];

    tables.forEach(table => {
        var tip_test = table.cells.find(cell => cell.rowIndex === 0).content;
    
    for (let i = 1; i < table.rowCount; i++) {
        let test = table.cells.find(cell => cell.rowIndex === i && cell.columnIndex === 0);
        let valoare_rezultat = table.cells.find(cell => cell.rowIndex === i && cell.columnIndex === 1);
        let interval_referinta = table.cells.find(cell => cell.rowIndex === i && cell.columnIndex === 2);
        let unitate = table.cells.find(cell => cell.rowIndex === i && cell.columnIndex === 3);
        
        if (test && valoare_rezultat && interval_referinta && unitate && test.content!=`Parametrii` ) {
            let result = {
                "tip_test": tip_test,
                "test": test.content,
                "valoare_rezultat": parseFloat(valoare_rezultat.content),
                "interval_referinta": interval_referinta.content,
                "unitate": unitate.content
            };
            results.push(result);
        }
    }
});
console.log(results);
        
          res.status(200).json(results);

      } catch (error) {
          console.error("An error occurred:", error);
          res.status(500).send({message:"An error occurred during document analysis"});
      }



    });
  }



  async function sendEmail(userEmail, userPassword) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vasile.cirdei@student.usv.ro', 
            pass: 'student330530' 
        },
    });

    
    let info = await transporter.sendMail({
        from: '"Management analize laborator" <alalize@laborator.com>', 
        to: userEmail, 
        subject: 'Datele tale de autentificare sunt aici ', 
        text: `Datele de autentificare sunt: CNP-ul tau si parola: ${userPassword}`,     });

    console.log('Message sent: %s', info.messageId);
}

  exports.incarcaRezultate=async(req,res)=>{
    try{
        const rezultat=req.body;
        console.log(req.body);

        for( var i=0;i<rezultat.length;i++){
           let pacient;
            try {
                pacient = await Pacient.findOne({where:{CNP:rezultat[i].CNP}});
            } catch (error) {
                console.log(`No patient found with CNP: ${rezultat[i].CNP}`);
            }
            if (!pacient) {
                let criptPass="";
                let  password="";
                try {
                    
                     password = Math.random().toString(36).slice(-8);
                    console.log("parola "+password);
                     criptPass = await bcrypt.hash(password,10);
                    console.log("criptat "+criptPass);

                } catch (err) {
                    console.error("Error creating password: ", err);
                }
                try {
                    pacient = await Pacient.create({ 
                        CNP: rezultat[i].CNP, 
                        parola: criptPass, 
                        email:rezultat[i].email, 
                        nume:rezultat[i].nume, 
                        prenume:rezultat[i].prenume,
                        email:rezultat[i].email,
                        data_nastere:rezultat[i].data_nastere,
                        contact_info:rezultat[i].email,
                        gen:rezultat[i].gen
                    });
                } catch (err) {
                    console.error("Error creating patient: ", err);
                }
                await sendEmail('petrisorc65@gmail.com', password);
                console.log(`New patient created with CNP: ${pacient.CNP} and password: ${password}`);
              }
            pacient = await Pacient.findOne({where:{CNP:rezultat[i].CNP}});
            console.log(pacient);
            let test=await Test.findOne({where:{nume_test:rezultat[i].test.toUpperCase()}});
            console.log(test);
            let laborator= await Laborator.findOne({where:{email:rezultat[i].email_laborator}});
            console.log(laborator);
            let data_test=rezultat[i].data_analiza;
            console.log(data_test);
            let valoare_rezultat=rezultat[i].valoare_rezultat;
            console.log(valoare_rezultat);

            if(pacient && test && laborator && data_test && valoare_rezultat && pacient){
                let rezultat={
                    pacient_id:pacient.pacient_id,
                    test_id:test.test_id,
                    laborator_id:laborator.laborator_id,
                    data_test:data_test,
                    valoare_rezultat:valoare_rezultat,

                }
                await Rezultat_test.create(rezultat)
            }
        }
        console.log("Final");
        res.status(200).send("Rezultate incarcate cu succes");
    } catch (err) {
        res.status(500).send(err.message);
    
  }
}

exports.rezultateDataCnp=async(req,res)=>{
    const cerere=req.body;
     await sequelize.query(`SELECT t.tip_nume, ts.nume_test , r.valoare_rezultat , ts.valoare_maxima , ts.valoare_minima,ts.descriere_test, ts.unitate FROM tipuri_teste t, teste ts, rezultate_teste r, pacienti p WHERE r.test_id=ts.test_id AND t.tip_id = ts.tip_id AND p.CNP='${cerere.CNP}' AND r.data_test='${cerere.data_test}'`, { type: sequelize.QueryTypes.SELECT })
    .then(result => res.send(result)).catch(err=> res.send(err));
 
}

