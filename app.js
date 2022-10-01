const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const router = require('./routers/index');

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: "session",
  keys: ["%$#^&^%&TSFR#$TRGDRG$%GFDG%^$#%#^GFDGRDHG$#@^Y%"],
  maxAge: 2 * 24 * 60 * 60 * 1000,
}));

app.use(router);

app.listen(3000, () => {
  console.log('App is running at http://localhost:3000');
});
