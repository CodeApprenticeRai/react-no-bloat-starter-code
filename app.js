// const express = require('express');
// const path = require('path');
// var ipsum = require('lorem-ipsum');
// const app = express();
//
// app.engine('html', require('ejs').renderFile);
// // Cannot serve HTML with express.static()
// //app.use( express.static( path.join(__dirname, '/views') ) );
// app.set('view engine', 'html');
// //app.use( express.static('public') );
//
//
// app.use('/static', express.static( path.join(__dirname, '/public') ) );
//
// app.get('/', (req, res) => res.render('layout', { ipsum: ipsum({ count: 10, units: 'sentences'}) } ) );//, { root: __dirname + "/views", } )  );
// app.get('/hello_ejs', (req, res) => res.render('hello_ejs', {name : Math.floor( Math.random() * 100 ) }));
// app.get('/hello', (req, res) => res.render('example_index') );
// app.listen(3000, () => console.log('Example app listening on port 3000!'));
//
//
//
// module.exports = app;
