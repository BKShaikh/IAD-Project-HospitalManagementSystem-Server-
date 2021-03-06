var express = require('express');
var router = express.Router();
var db = require('../models/index');
var jwt = require('jsonwebtoken');
var ap = require('../app');
var superSecret = 'iloveIAD';
var verify = require('../middleware');


router.get('/', verify.rou , function (req, res, next) {

  db.accountdata.findAll({}).then(
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




router.post('/login', function (req, res, next) {

    db.accountdata.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(
        function (account) {
            // if (err) {
            //     res.statusCode = 500;
            //     var resBody = {
            //         error: err.errors,
            //         suucess: false,
            //         message: err.message,
            //     }
            //     res.send(resBody);
            // }
                console.log(account);
            if (!account) {
                res.json({ success: false, message: 'Authentication failed. Account not found.' })
            }
            else if (account) {
                if (account.password != req.body.password) {
                    res.json({ success: false, message: 'Authentication failed. Incorrect password.' })
                }
                else {
                    var token = jwt.sign(account.toJSON(), 'superSecret', {
                        expiresIn: 1440 // expires in 24 hours
                    });
                    // res.json({
                    //     success: true,
                    //     message: 'Enjoy your token!',
                    //     token: token
                    // });
                    var resBody = {
                        // error: err.errors,
                        suucess: true,
                        message: 'Token Generated',
                        token: token
                    }
                    res.send(resBody);
                }
            }

        },
        function (err) {


            res.statusCode = 500;
            var resBody = {
                error: err.errors,
                suucess: false,
                message: err.message,
            }
            res.send(resBody);
        }
        )


});


router.post('/signup',verify.rou ,function (req, res, next) {

    let account = {

        username: req.body.username,
        password: req.body.password,
        roleId: req.body.roleId,
        email:req.body.email
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