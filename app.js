/**
 * Dependencies : dotenv,express
 */

import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import flash from 'req-flash';
import bodyParser from 'body-parser';
import { connectDB } from './src/config/db.js'
import { User } from './src/models/User.js'


var app = express();

connectDB();

/**
 * Variables
 * PORT : The port number where the application is running
 */

let PORT = process.env.PORT || 9700;

/**
 * Middlewares
 */
app.use(cors());
app.use(session({ secret: '123' }));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', (req, res) => { return res.render('landing') })

app.listen(PORT, function () {
  console.log(`Mathmatics competition is running on ${PORT}`);
});