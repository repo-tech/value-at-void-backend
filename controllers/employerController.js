const User = require('../models/User');

exports.profileSetup = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json({ msg: 'User doesnot exists' });

        await user.updateOne(req.body);

        return res.status(201).json({success: true, msg: 'Profile created successfully'});
    } catch (err) {
        console.log('error', err);
        
        return res.status(500).json({ msg: 'Server error' });
    }
};