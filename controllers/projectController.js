const db = require('../models')

// create main Model
const Project = db.proiect

// 1. create project

const addProject = async (req, res) => {
    let info = {
        ID: req.body.ID,
        Project_no: req.body.Project_no,
        Project_short_description: req.body.Project_short_description,
        Request_date: req.body.Request_date,
        Project_start_date: req.body.Project_start_date,
        Project_duration: req.body.Project_duration,
        Project_currency: req.body.Project_currency,
        Client: req.body.Client,
        Working_location: req.body.Working_location,
        Travel_required: req.body.Travel_required,
        Team_members: req.body.Team_members,
        Working_hours: req.body.Working_hours,
        Mandatory_skills: req.body.Mandatory_skills,
        Nice_to_have_skills: req.body.Nice_to_have_skills,
        To_Do: req.body.To_Do
    }

    const project = await Project.create(info);
    res.status(200).send(project);
    console.log(product);
}

// 2. get all projects
const getAllProjects = async (req, res) => {
    let products = await Project.findAll({});
    res.status(200).send(products);
}

// 2. get one project
const getOneProject = async (req, res) => {
    let name = req.params.Project_no;
    let product = await Project.findOne({ where: {Project_no: name}});
    res.status(200).send(product);
}

// 4. update project
const updateProject = async (req, res) => {
    let  id = req.params.ID;
    const product = await Project.update(req.body, { where: { ID: id}});

    res.status(200).send(product);
}

// delete project
const deleteProject = async (req, res) => {
    let id = req.params.ID;
    await Project.destroy( { where: { ID: id}});

    res.status(200).send('Project is deleted!');
}

module.exports = {
    addProject,
    getAllProjects,
    getOneProject,
    updateProject,
    deleteProject
}