var express = require('express'), 
	 app = express();

app.use('/', express.static('src'));
app.post('/api', function(res, req){

});

app.listen(8080, function(){
	console.log("listening on 8080");
});