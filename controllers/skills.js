const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}
function create(req, res) {
    console.log(req.body)
    Skill.create(req.body)
    res.redirect('/skills')
}

function newSkill(req, res) {
    res.render('/skills/new', {
        title: 'New Skill'
    })
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    });
}

// Everything that comes in 'req.params' is a string
function show(req, res) {
    console.log(req.params.skillsId)
    res.render('skills/show', {
        skill: Skill.getOne(req.params.skillsId),
        title: 'Skill Details'
})
}
