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

// set `<your-key>` and `<your-endpoint>` variables with the values from the Azure portal.
const key = "169eea55d13845d6a2dde5de4247f4a7";
const endpoint = "https://citirerezultateanalizemedicale.cognitiveservices.azure.com/";

// sample document
//const formUrl = "https://raw.githubusercontent.com/Azure-Samples/cognitive-services-REST-api-samples/master/curl/form-recognizer/sample-layout.pdf"
modelID='0ae89266-0d3a-4635-ae22-1823f30e1380';
async function main() {
const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
const fileStream = fs.createReadStream(req.file.path);
const poller = await client.beginAnalyzeDocumentFromUrl(modelID, fileStream);

const {
    pages,
    tables
} = await poller.pollUntilDone();

console.log(result);
if (pages.length <= 0) {
    console.log("No pages were extracted from the document.");
} else {
    console.log("Pages:");
    for (const page of pages) {
        console.log("- Page", page.pageNumber, `(unit: ${page.unit})`);
        console.log(`  ${page.width}x${page.height}, angle: ${page.angle}`);
        console.log(`  ${page.lines.length} lines, ${page.words.length} words`);
    }
}

if (tables.length <= 0) {
    console.log("No tables were extracted from the document.");
} else {
    console.log("Tables:");
    for (const table of tables) {
        console.log(
            `- Extracted table: ${table.columnCount} columns, ${table.rowCount} rows (${table.spans} cells)`
        );
    }
}
}

main().catch((error) => {
console.error("An error occurred:", error);
process.exit(1);
});



    });
  }