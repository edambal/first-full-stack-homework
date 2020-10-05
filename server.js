const express = require('express');
const bodyparser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;
const patientsCtrl = require('./controller/patientController');
const patients = require('./models/Patient');

app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//Custom Middleware
app.use((req, res, next) => {
    const method = req.method;
    const path = req.url;
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${method} ${path} ${timestamp}`);
    next(); // Allow the request to move on to the next middleware in the chain
  });

  app.get('/', (req, res) => {
    res.render('index');
  });

  // Set basepath for the router
  app.use('/patients', patientsCtrl);


// Set the  server to listen on port
app.listen(PORT, ()=> console.log(`Server successfully running on ${PORT}`));