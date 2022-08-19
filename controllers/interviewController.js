const db = require('../models')

// create main Model
const Interview = db.interview

// 1. create interview

const addInterview = async (req, res) => {
    let info = {
        ID: req.body.ID,
        Interview_date: req.body.Interview_date,
        Interview_duration: req.body.Interview_duration,
        Interviewer: req.body.Interviewer,
        Candidat_id: req.body.Candidat_id
    }

    const interview = await Interview.create(info);
    res.status(200).send(interview);
    console.log(interview);
}

// 2. get all interviews
const getAllInterviews = async (req, res) => {
    let interviews = await Interview.findAll({});
    res.status(200).send(interviews);
}

// 3. update interview
const updateInterview = async (req, res) => {
    let  id = req.params.ID;
    const interview = await Interview.update(req.body, { where: { ID: id}});

    res.status(200).send(interview);
}

// 4. delete interview
const deleteInterview = async (req, res) => {
    let id = req.params.ID;
    await Interview.destroy( { where: { ID: id}});

    res.status(200).send('Interview is deleted!');
}

module.exports = {
    addInterview,
    getAllInterviews,
    updateInterview,
    deleteInterview
}