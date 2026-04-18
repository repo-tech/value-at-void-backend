const express = require('express');
const { postJob, getMyJobs, getJobById, updateJob, deleteJob } = require('../controllers/jobController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, postJob);
router.get('/', auth, getMyJobs);
router.get('/:id', auth, getJobById);
router.put('/:id', auth, updateJob);
router.delete('/:id', auth, deleteJob);

module.exports = router;