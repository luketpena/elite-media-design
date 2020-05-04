const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

//const sessionMiddleware = require('./modules/session-middleware');
//const passport = require('./strategies/user.strategy');

// const eventsRouter = require('./routers/events.router');


/* ---------- MIDDLEWARE ---------- */
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

// app.use(sessionMiddleware);
// app.use(passport.initialize());
// app.use(passport.session());

/** ---------- EXPRESS ROUTES ---------- **/
// app.use('/events', eventsRouter);


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Hey, listen!', PORT);  
});