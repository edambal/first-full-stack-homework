const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/', (req, res) => { // Route Handler 
    db.Patient.find({},(err,allPatients)=>{
        res.render('patients/indexPatient',{
            patients : allPatients
        })
    })
    
    
  });

  //NEW Patients
  router.get('/new',(req,res) =>{
    res.render('patients/newPatient')
  })

  //Add Patients
  router.post('/',(req,res)=>{

    // Set fields for address
   req.body.address = [{
    streetNumber : req.body.streetNumber,
    streetName: req.body.streetName,
    city: req.body.city,
    state: req.body.states,
  }]
  // delete the exitsing fields since address is build as new key value pair
    delete req.body.streetNumber;
    delete req.body.streetName;
    delete req.body.city;
    delete req.body.states;
    db.Patient.create(req.body,(err,createdPatient)=>{
        res.redirect(`/patients`);
    })
  })

  module.exports = router;