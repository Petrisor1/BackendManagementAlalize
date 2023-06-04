const { rezultate_teste } = require("../models");
const db=require("../models");
const Rezultat_test=db.rezultate_teste;
const Op=db.Sequelize.Op;
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const { table } = require("console");
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

        if (test && valoare_rezultat && interval_referinta && unitate) {
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
        ////////////////////////
        //   tables.forEach((table, tableIndex) => {
        //     console.log(`Table ${tableIndex + 1}:`);
        
            
        //     let tableArray = Array(table.rowCount).fill().map(() => Array(table.columnCount).fill(null));
        //     const tabele={
        //         "tip_test":`${table.cells.content}`
        //     }
        //     JSON.parse( )
        //     // Loop through each cell in the table.
        //     table.cells.forEach(cell => {
                
        //         tableArray[cell.rowIndex][cell.columnIndex] = cell.content;
        //     });
        
        //     // Print the reconstructed table.
        //     tableArray.forEach(row => {
        //         console.log(row.join('\t'));
        //     });
        //     console.log('\n');  // Print a newline between tables for clarity.
        // });
          // If you need to manipulate pages and tables objects, you can do so here before sending it as a response.

          // Send the analysis result back as a response
          res.status(200).json(results);

      } catch (error) {
          console.error("An error occurred:", error);
          res.status(500).send({message:"An error occurred during document analysis"});
      }



    });
  }