var express = require('express');
var server = express();
server.use('/bower_components',express.static(__dirname+'/bower_components'));
//server.use(express.static(__dirname+'/'));

server.get('/', function(req,res){
 res.sendfile(__dirname + '/index.html');
}); 

var port = 10001;
server.listen(port, function(){
    console.log('server listining on port ' + port);
    //console.log('Example app listening at http://%s:%s', host, port);
});