const express = require('express');
const bodyparser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;

app.set('view engine','ejs');




















// Set the  server to listen on port
app.listen(PORT, ()=> console.log(`Server successfully running on ${PORT}`));