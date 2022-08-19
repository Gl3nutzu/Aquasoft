const interviewController = require('../controllers/interviewController.js');
const router = require('express').Router();

router.post('/addInterview', interviewController.addInterview);
router.get('/allInterviews', interviewController.getAllInterviews);

router.put('/:ID', interviewController.updateInterview);
router.delete('/:ID', interviewController.deleteInterview);

module.exports = router;