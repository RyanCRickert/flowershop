const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

module.exports = {
  createUser: async args => {
    try {
    const existingUser = await User.findOne({ email: args.userInput.email.toLowerCase() })
      if (existingUser) {
        throw new Error("User already exists.")
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
      const user = new User({
        email: args.userInput.email.toLowerCase(),
        password: hashedPassword
      })
      const result = await user.save()
      return { ...result._doc, password: null ,_id: result.id }
    } catch (err) {
      throw err
    }
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email });
    if(!user) {
      throw new Error("User does not exist.");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if(!isEqual) {
      throw new Error("Password is incorrect.");
    }
    const token = jwt.sign({ userID: user.id, email: user.email}, process.env.SECRET_KEY, {
      expiresIn: "1h"
    });
    return { userId: user.id, token: token, tokenExpiration: 1}
  }
};