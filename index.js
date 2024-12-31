var express = require('express');
var cors = require('cors');
require('dotenv').config()
//import multer utk upload file
const multer = require('multer'); 

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
//endpoint utk handler upload file
const upload = multer();
app.post('/api/fileanalyse', upload.single('upfile'),(req,res)=>{
  //cek file
  if(!req.file){
    return res.json({error:"Tidak ada file yang diupload"});
  }
  //ambil informasi file
  const {originalname,mimetype,size} = req.file;
  //ambil JSON
  res.json({
    name:originalname,
    type:mimetype,
    size:size
  });
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
