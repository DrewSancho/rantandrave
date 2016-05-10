var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var postID = 0;
var data = [];

app.use(bodyParser());

app.use(express.static(__dirname + '/public'));

app.get('/api/posts', function (req, res) {
    res.json(data);
});

app.get('/api/posts/:id', function (req, res) {
    var id = parseInt(id);
});

app.post('/api/posts', function (req, res) {
    var post = {
        date: new Date(),
        category: req.body.category,
        rant: req.body.rant,
        title: req.body.title,
        id: ++postID,
        likes: req.body.likes,
        location: function () {
        }
    };
    res.json(post);
});

app.put('/api/posts/:id', function (req, res) {
    var id = parseInt(req.params.id);

    var post = data.filter(function (post) {
        return post.id === id;
    })[0];

    ++post.likes;

    res.json(post);
});

app.listen(3000);