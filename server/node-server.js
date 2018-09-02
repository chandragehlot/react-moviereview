var port,server;

//import packages
var fs = require('fs');
var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,authorization,Origin');
  next();
});

var MOVIELIST_FILE = path.join(__dirname, 'movie_list_v1.json');
var USERDETAIL_FILE = path.join(__dirname, 'userdetail.json');

app.get('/cinemagallery/getmovielist', (req, res,next)=>{
  fs.readFile(MOVIELIST_FILE,function(err,data){
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var JsonConvertedData = JSON.parse(data);
    var formatteddata = JsonConvertedData.map((item,index)=>{
      delete item.director;
      delete item.LeadActors;
      delete item.LeadActress;
      delete item.movieStory;
      delete item.countryOfRelease;
      return item;
    })

    setTimeout(()=>res.json(formatteddata)); 
  });
});

app.get('/cinemagallery/getmoviedetail/byid/:id',(req,res,next)=>{
    fs.readFile(MOVIELIST_FILE,(err,filebinarydata)=>{
      if(err){
        console.log(err);
        process.exit(1);
      }

      var JsonParsedData = JSON.parse(filebinarydata);
      var filteredData = JsonParsedData.filter((item,index)=>{
        if(item.movieid == req.params.id){
          return item;
        }
      });

      setTimeout(()=>res.json(filteredData[0]));
    });
});

app.get('/cinemagallery/checkusername/duplicate/:username',(req,res,next)=>{
    fs.readFile(USERDETAIL_FILE,(err,filebinarydata)=>{
      if(err){
        console.log(err);
        process.exit(1);
      }

      var JsonParsedData = JSON.parse(filebinarydata);
      var userExistFlag = JsonParsedData.find((userdetail,index)=>{
          return userdetail['user_name'] === req.params.username
      });
      
      var responseData;
      if(userExistFlag){
        responseData = {
          "userexist" : true,
          "msg" : 'user already exist'  
        }
      }else{
        responseData = {
          "userexist" : false,
          "msg" : 'user does not already exist'  
        }        
      }

      setTimeout(()=>res.json(responseData));
    });
});

app.use('/', express.static(path.join(__dirname, '/')));


//set port
port  =  9000;

server = http.createServer(app);
server.listen(port);
server.on('listening',onListening);


//reusable functions
function onListening(){
	var addr = server.address();
	console.log("server started on " + addr.port  );
}

