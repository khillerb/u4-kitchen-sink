const User = require('../models/user');

const Calendar = require('../models/calendar')
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;



module.exports = {
  signup,
  login,
  deleteIngredient,
  createIngredient,
  indexIngredient,
  userIndex,
  deleteUser
};



async function signup(req, res) {
  let user = new User(req.body);
  const usercalendar = new Calendar({events: []})
  try {
    usercalendar.save()
    console.log(usercalendar)
    user.save();
    User.findByIdAndUpdate({_id: user._id}, {calendar: usercalendar._id}, (err,res) => {
      if (err) console.log('Error: ', err, 'Response: ', res )
    })
    console.log(req)
    // Send back a JWT instead of the user
    const token = createJWT(user);
    res.json({token});
  } catch (err) {
    // Probably a duplicate email
    console.log(err)
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

// Make helper functions for JWT

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}


async function createIngredient(req,res){
  const user = await User.findByIdAndUpdate(req.user._id, {$push: { ingredientList: req.body}})
  res.status(200).json(user.ingredientList)
}
async function deleteIngredient(req,res){
  const user = User.findByIdAndUpdate(req.user._id, {$pull: { ingredientList: req.body}})
  res.status(200).json(user.ingredientList)
}
async function indexIngredient(req,res) {
  const user = await User.findById(req.user._id)
  res.status(200).json(user.ingredientList)
}
async function userIndex (req,res) {
  const user = await User.findById(req.user._id)
  res.status(200).json(user)
}

async function deleteUser (req,res) {
  const deletedUser = User.findByIdAndRemove(req.user._id)
  res.status(200).json(deletedUser)
  localStorage.removeItem('token');
}