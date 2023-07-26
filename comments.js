// create web server using express
const express = require('express');
const app = express();
// create a router
const router = express.Router();
// create controller
const commentsController = require('../controllers/commentsController');