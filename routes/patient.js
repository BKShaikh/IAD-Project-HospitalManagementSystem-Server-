var express = require('express');
var router = express.Router();
var db = require('../models/index');
var verify = require('../middleware');

/* GET users listing. */
router.get('/', verify.rou ,function (req, res, next) {

  db.patientdata.findAll({}).then(
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


router.get('/byid/:id', verify.rou ,function (req, res, next) {

  db.patientdata.findOne({
    where: {
      id: req.params.id
    }
  }).then(
    function (response) {
      if (response == null) {
        // console.log("idher che"  );
        // function (err) {


        res.statusCode = 404;
        var resBody = {
          // error: err.errors,
          suucess: false,
          // message: err.message,
        }
        res.send(resBody);
      }
      else {
        // console.log("nhi idher che", response);
        res.send(response);

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
    })
});


router.get('/getopddetail',verify.rou , function (req, res, next) {
  db.patientdata.find({
    where: { id: 6 }

  })
    .then(

    function (patient) {
      db.opdData.find({where : {id : patient.opdId}}).then(function (data) {
        res.send(data);
      })

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


// router.get('/s', function (res, req, next) {
//   db.patientdata.findAll({})
//   .then(patient => {
//       return patient
//     })
//     .patient.getopd().then(
//     function (response) {
//       res.send(response);
//     },
//     function (err) {


//       res.statusCode = 500;
//       var resBody = {
//         error: err.errors,
//         suucess: false,
//         message: err.message,
//       }
//       res.send(resBody);
//     })
// });



router.post('/',verify.rou , function (req, res, next) {
  let patient = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    cnicno: req.body.cnicno,
    dob: req.body.dob,
    age: req.body.age,
    phoneno: req.body.phoneno,
    emergencyphno: req.body.emergencyphno,
    consultantdoc: req.body.consultantdoc
  };
  console.log(req.body);
  db.patientdata.create(patient).then(
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

router.delete('/del/:id',verify.rou , function (req, res, next) {
  db.patientdata.destroy({
    where: {
      id: req.params.id
    }
  })
    // .then(deletedPatient=> {
    //     res.json(deletedPatient);
    //     // res.send(response);

    // });

    // })
    .then(
    function (response) {
      res.send(String(response));
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






router.patch('/update/:id',verify.rou , function (req, res, next) {
  const updates = req.body.updates;
  db.patientdata.findOne({
    where: {
      id: req.params.id
    }
  })

    .then(patient => {
      return patient.updateAttributes(updates)
    })
    // .then(function (response) {
    //   if (response == null) {
    //     res.statusCode = 404;
    //     var resBody = {
    //       suucess: false,
    //     }
    //     res.send(resBody);
    //   }
    // })
    .then(updatedPatient => {
      if (updatedPatient == null) {
        console.log("idher aya")
        res.statusCode = 404;
        var resBody = {
          suucess: false,
        }
        res.send(resBody);
      }
      else
        res.send(updatedPatient);
    },
    function (err) {

      res.statusCode = 500;
      var resBody = {
        error: err.errors,
        suucess: false,
        message: err.message+" "+"maybe you're entering unvalid Patient ID ",
      }
      res.send(resBody);
    }
    );

});

module.exports = router;
