const projectController = require('../controllers/projectController.js');
const router = require('express').Router();

router.post('/addProject', projectController.addProject);
router.get('/allProjects', projectController.getAllProjects);



router.get('/:Project_no', projectController.getOneProject);
router.put('/:ID', projectController.updateProject);
router.delete('/:ID', projectController.deleteProject);

module.exports = router;