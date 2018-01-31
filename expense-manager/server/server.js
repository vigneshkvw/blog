const express = require('express');
const router = require('./routes/routes.js')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const db="mongodb://vignesh23:made2win@ds121238.mlab.com:21238/vigneshtest";
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.Promise = Promise;
mongoose.connect(db, function(err) {
    if(err) {
        console.log('Connection error');
    }
});
router.get('/posts', function(req, res) {
    console.log('Requesting posts');
    post.find({}, function(err, posts){
        if (err) {
            console.log('Error getting the posts');
        } else {
            res.json(posts);
            console.log(posts);
        }
    })
});

app.use('/', router);
module.exports=app;
