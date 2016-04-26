var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	router = express.Router(),
	trello = new require("node-trello");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('src'));

router.get("/tasks", function (req, res) {
	// var t = new trello("");
	// t.get("/1/lists/gb1NPywq", function (result) {
	// 	if (result.statusCode === 200) {
	// 		console.log(result);
	// 		res.json({ message: 'hooray! welcome to our api!' });
	// 	} else {
	// 		res.json({ message: "Error", statusMessage: result.statusMessage, body: result.responseBody });
	// 	}
	// });

});

app.use("/api", router);

app.listen(8080, function () {
	console.log("listening on 8080");
});