const db = require('../models')

// create main Model
const Candidate = db.candidate;
const Project = db.project;



// main work

// 1. create project

const addCandidate = async (req, res) => {
    let info = {
        ID: req.body.ID,
        Candidate_name: req.body.Candidate_name,
        Email: req.body.Email,
        Start_date: req.body.Start_date,
        Salary: req.body.Salary,
        Candidate_link: req.body.Candidate_link,
        Candidate_doc: req.body.Candidate_doc,
        Project_id: req.body.Project_id
        
    }

    const candidate = await Candidate.create(info);
    res.status(200).send(candidate);
    console.log(candidate);
}

// 2. get all projects
const getAllCandidates = async (req, res) => {
    let candidates = await Candidate.findAll({});
    res.status(200).send(candidates);
}
const getProjectCandidates = async (req, res) => {
    let  id = req.params.ID;
    const data = await Candidate.findAll({
        include: [{
            model: Project,
            as: 'projects'
        }],
        where: { id: id}
    });

    res.status(200).send(data);
}


// 4. update project
const updateCandidate = async (req, res) => {
    let  id = req.params.ID;
    const candidate = await Candidate.update(req.body, { where: { ID: id}});

    res.status(200).send(candidate);
}

// delete candidate
const deleteCandidate = async (req, res) => {
    let id = req.params.ID;
    await Candidate.destroy( { where: { ID: id}});

    res.status(200).send('Candidate is deleted!');
}




module.exports = {
    addCandidate,
    getAllCandidates,
    updateCandidate,
    deleteCandidate,
    getProjectCandidates
    
}