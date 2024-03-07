var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */

// Everything here starts with '/skills'

// GET all skills
router.get('/', skillsCtrl.index);

// GET one skills --> /skills/:id
router.get('/:skillsId', skillsCtrl.show)

module.exports = router;
