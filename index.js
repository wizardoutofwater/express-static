var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.json());

var count = 0;



app.post ('/increment', function(request, response, next){
    console.log('someone sent a POST request to increment');
    count++;
    response.json(count);
});

app.post ('/decrement', function(request, response, next){
    console.log('someone sent a POST request to decrement');
    count--;
    response.send('the count is now ' + count);
});

app.get ('/value', function(request, response, next){
    console.log('someone sent a request to value');
    response.send("the count is " + count);
});

app.listen(3000, function(){
    console.log('listening in port 3000');
});
    