// create controller for profile
 const Profile = require('../models/Profile.model');
 
// create profile controller
const createProfile = async (req, res) => {
    try{
      const {userId,headline,summary,experience,skills,education} = req.body;
      const profile = new Profile({
        userId,
        headline,
        summary,
        skills,
      });
      await profile.save();
      profile.experience.push(experience);
      profile.education.push(education);
        await profile.save();
      res.status(201).json({message: "Profile created successfully", profile});

    }catch(error){
        console.log("error", error.message);
    }
}
exports.createProfile = createProfile;