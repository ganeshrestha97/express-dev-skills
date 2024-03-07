const Skill = require('../models/skill')

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

// Everything that comes in 'req.params' is a string
function show(req, res) {
    console.log(req.params.skillsId)
    res.render('skills/show', {
        skill: Skill.getOne(req.params.skillsId)
})
}
