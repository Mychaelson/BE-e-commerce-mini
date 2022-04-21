const { User } = require("../lib/sequelize");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { generateToken } = require("../lib/jwt");
const { nanoid } = require("nanoid");

const userController = {
  registerUser: async (req, res) => {
    try {
      const { username, password, email } = req.body;

      // Checking if username/email already has taken
      const findUserAlreadyTaken = await User.findOne({
          where: {
              [Op.or]: [{ username }, { email }]
          }
      })
      if (findUserAlreadyTaken) {
          return res.status(400).json({
              message: "Username or Email has already taken"
          })
      }
    
      // Creating new account
      const hashedPassword = bcrypt.hashSync(password, 5)
      const createNewAccount = await User.create({
          username,
          password: hashedPassword,
          email
      })
      return res.status(200).json({
          message: "Account created successfuly!",
          result: createNewAccount
      })
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error",
      });
    }
  },
};

module.exports = userController;
