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
          [Op.or]: [{ username }, { email }],
        },
      });
      if (findUserAlreadyTaken) {
        return res.status(400).json({
          message: "Username or Email has already taken",
        });
      }

      // Creating new account
      const hashedPassword = bcrypt.hashSync(password, 5);
      const createNewAccount = await User.create({
        username,
        password: hashedPassword,
        email,
      });
      return res.status(200).json({
        message: "Account created successfuly!",
        result: createNewAccount,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error",
      });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const findUser = await User.findOne({
        where: {
          username,
        },
      });
      if (!findUser) {
        return res.status(401).json({
          message: "Username or Password invalid",
        });
      }
      const isPasswordCorrect = bcrypt.compareSync(password, findUser.password);
      if (!isPasswordCorrect) {
        return res.status(401).json({
          message: "Username or Password invalid",
        });
      }
      delete findUser.dataValues.password;
      const token = generateToken({
        id: findUser.id,
      });
      return res.status(200).json({
        message: "Logged in user",
        result: {
          user: findUser,
          token,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server Error",
      });
    }
  },
  keepLogin: async (req, res) => {
    try {
      const { token } = req
      const newToken = generateToken( { id: token.id })
      const findUser = await User.findByPk(token.id)

      delete findUser.dataValues.password
      return res.status(200).json({
        message: "New user token generated",
        result: findUser,
        token: newToken
      })
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }
};

module.exports = userController;
