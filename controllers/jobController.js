const Job = require('../models/Job');

exports.postJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, employer: req.user.id });
    job.status = new Date(job.expirationDate) > new Date() ? 'Active' : 'Expired'
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};


exports.getMyJobs = async (req, res) => {
  const { status, jobType, search } = req.query;
  let query = { employer: req.user.id };
  if (status && status !== 'All') query.status = status;
  if (jobType && jobType !== 'All') query.jobType = jobType;
  if (search) query.jobTitle = { $regex: search, $options: 'i' };

  const jobs = await Job.find(query).sort({ postedDate: -1 });
  res.json(jobs);
};

exports.getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id).lean();
  if (!job) return res.status(404).json({ msg: 'Job not found' });

  // Browser/CDN will cache this for 5 minutes
  res.set('Cache-Control', 'public, max-age=300'); 
  res.json(job);
};


exports.updateJob = async (req, res) => {
  const job = await Job.findOneAndUpdate(
    { _id: req.params.id, employer: req.user.id },
    req.body,
    { new: true }
  );
  job.status = new Date(job.expirationDate) > new Date() ? 'Active' : 'Expired'
  job.save()

  if (!job) return res.status(404).json({ msg: 'Job not found' });
  res.json(job);
};

exports.deleteJob = async (req, res) => {
  const job = await Job.findOneAndDelete({ _id: req.params.id, employer: req.user.id });
  if (!job) return res.status(404).json({ msg: 'Job not found' });
  res.json({ msg: 'Job deleted' });
};