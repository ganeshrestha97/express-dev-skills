const skills = [
    {id: 100, skill: 'HTML', done: true},
    {id: 101, skill: 'CSS', done: true},
    {id: 102, skill: 'JavaScript', done: true},
    {id: 103, skill: 'Express', done: false},
    {id: 104, skill: 'Node', done: false},
    {id: 105, skill: 'Python', done: false}
  ]; 
 
  // This exports all skills
  // By doing this we are creating a key of getAll that's equal to the function getAll
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  }

  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }

  function create(skill) {
    //add the id
    skill.id = Date.now() % 1000000
    //new skills wouldn't be done
    skill.done = false
    console.log(skill)
    skills.push(skill)
  }

  // This function returns all skills
function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    return skill
}