var express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

var count = 0;



app.get ('/api/increment', function(req, res ){
    console.log('someone sent a fetch request to increment');
    count++;
    res.json(count);
});

app.get ('/api/decrement', function(req, res ){
    console.log('someone sent a fetch request to decrement');
    count--;
    res.json(count);
});

app.get ('/api/counter', function(req, res ){
    console.log('someone sent a request to counter');
    res.json(count);
});

// reset counter
app.delete('/api/counter', function(req, res){
    console.log('someone sent a delete request to counter');
    count = 0;
    res.json(count);
});

app.listen(3000, function(){
    console.log('Counter API listening in port 3000');
});
