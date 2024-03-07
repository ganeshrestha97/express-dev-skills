var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
const skills = require('../controllers/skills');

/* GET users listing. */

// Everything here starts with '/skills'

// GET all skills
router.get('/', skillsCtrl.index);

//router.get('/', function(req, res, next) {
//     resizeBy.send('respond with a resource');
// });

// Get for the form --> /skills/new
router.get('/new', skillsCtrl.new)

// GET one skills --> /skills/:id
router.get('/:skillsId', skillsCtrl.show)

// Post a skill --> /skills
router.post('/', skillsCtrl.create)

// Delete a skill --> /skill/:id
router.delete('/:id', skillsCtrl.delete)

module.exports = router;
