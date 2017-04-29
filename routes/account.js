var express = require('express');
var router = express.Router();
var db = require('../models/index');


router.get('/login/:id', function (req, res, next) {

    db.accountdata.findOne({
        where: {
            id: req.params.id
        }
    }).then(
        function (response) {
            res.send(response);
        },
        function (err) {


            res.statusCode = 500;
            var resBody = {
                error: err.errors,
                suucess: false,
                message: err.message,
            }
            res.send(resBody);
        })


});


router.post('/signup', function (req, res, next) {

    let account = {

        username: req.body.username,
        password: req.body.password,
        roleId : req.body.roleId
    };
    console.log(req.body);
    db.accountdata.create(account).then(
        function (response) {
            res.send(response);
        },
        function (err) {


            res.statusCode = 500;
            var resBody = {
                error: err.errors,
                suucess: false,
                message: err.message,
            }
            res.send(resBody);
        })



});











module.exports = router;