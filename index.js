var express =  require('express');
var app = express();
var bodyParser = require('body-parser');
var jsondata= require('./movies.json');
var _und = require('underscore');
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
var port = process.env.PORT || 8080;      
 
var router = express.Router();      
 
router.get('/', function(req, res){
res.json(jsondata);
 
})
 
app.listen(3000, () =>{
    console.log('listening to port 3000');
});
app.use('/', router);
app.listen(port);


// router.post('/postdata', function(req,res){
// if(req.body.Id && req.body.Title)
// {
// jsondata.push(req.body);
// res.json(jsondata);
// }
// else
// {
//     console.log('please put some values to insert');
// }
 
// })
// router.put('/updatedata/:id', function(req,res){
// if(req.params.id)
// {
// _und.each(jsondata , function(elem, index){
// if(req.params.id === elem.Id){
//     elem.Title = "Hello Brother";
 
//     elem.Director = "xyz";
// }
 
// })
// res.json(jsondata);
// }
// else
// {
//     console.log('Invalid Request');
// }
 
// })
 
// router.delete('/deletedata/:id', function(req, res) {
//     getindextodelete = -1;
//     if(req.params.id){
 
//         _und.each(jsondata, function(elem,index){
// if(elem.Id === req.params.id){
//     getindextodelete  = index;
  
 
// }
 
//         })
//         if(getindextodelete > -1)
//         {
//             jsondata.splice(getindextodelete ,1);
//         }
 
//     res.json(jsondata);   
//     }
//     else{
//         console.log('Please pass body elements with id');
//     }
// });
 

// var bodyParser = require('body-parser');
// var jsonData = require('./movies.json');
// var und = require('underscore');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json);

// var port = process.env.PORT || 8080;
// var router = express.Router();

// router.get('/', function(req, res){

//     res.json(jsonData);
//     console.log('done');
// })

// app.use('/api', router);
// app.listen(port);
