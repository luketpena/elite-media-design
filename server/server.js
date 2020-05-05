const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const instagramRouter = require('./routers/instagram.router');

/* ---------- MIDDLEWARE ---------- */
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/instagram', instagramRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Hey, listen!', PORT);  
});