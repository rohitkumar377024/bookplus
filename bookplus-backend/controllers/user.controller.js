const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const JWT_SECRET_KEY = 'TAG_JWT_SECRET_KEY'

exports.signUpUser = async (req, res) => {
  // Check if user already exists in DB (based on email)
  const userExists = await User.findOne({ username: req?.body?.username });

  // If email address in request body and user exists in DB already
  if (userExists) {
    res.status(400).json({
      message: "User with this email address already exists",
      data: {},
    });
    return;
  } else {
    // TODO: static fields for now
    const username = req?.body?.username
    const password = req?.body?.password

    // Encrypt plain-text password
    const encryptedPassword = await bcrypt.hash(password, 10);

    const result = await new User({
        username,
        password: encryptedPassword,
      }).save();
  
      // Create token
      const token = jwt.sign(
        { _id: result._id },
          JWT_SECRET_KEY,
        {
          expiresIn: "168h",
        }
      );

    res.status(201).json({ message: 'Signed up user successfully', data: { userID: result._id, token } })
  }
}

exports.loginUser = async (req, res) => {
  try {
    const username = req?.body?.username;
    const password = req?.body?.password;
    
    // Check if user exists in DB (based on email)
    const userExists = await User.findOne({ username });

    if (userExists && (await bcrypt.compare(password, userExists.password))) {
      // Create token
      const token = jwt.sign(
        { _id: userExists._id },
          JWT_SECRET_KEY,
        {
          expiresIn: "168h",
        }
      );

      res.status(200).json({ message: 'Logged in user successfully', data: { userID: userExists?._id, token } })
    } else {
      // sendResponse(res, 400, "Invalid credentials for login", "");
      res.status(401).json({ message: 'Invalid credentials for login', data: {} })
      return;
    }
  } catch (e) {
    console.log(e)
  }
}