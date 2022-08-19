const candidatiController = require('../controllers/candidatiController.js');
const router = require('express').Router();

router.post('/addCandidate', candidatiController.addCandidate);
router.get('/allCandidates', candidatiController.getAllCandidates);
router.get('/:ID', candidatiController.getProjectCandidates);

router.put('/:ID', candidatiController.updateCandidate);
router.delete('/:ID', candidatiController.deleteCandidate);

module.exports = router;