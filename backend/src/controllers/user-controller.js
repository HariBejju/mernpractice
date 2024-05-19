import { hash, compare } from "bcrypt";
import User from "../models/user.js";
import { createToken } from "../utils/tokenmanager.js";
import {COOKIE_NAME} from "../utils/constants.js"

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "ok", users });
  } catch (error) {
    console.log(error);
    console.log("hi");
    return res
      .status(200)
      .json({ message: "api bye aaranda kanna", cause: error.message });
  }
};

export const userSignUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log(name);
    console.log(email);
    console.log(password);
    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.clearCookie("auth_token_frnmds",{
        httpOnly: true,
        domain: "localhost",
        signed:true,
        path: '/'
    })
    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie("auth_token_frnmds", token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });
    return res.status(200).json({ message: "OK", id: user._id.toString() });
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("User not registered");
    }
    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(403).send("Incorrect password");
    }
    res.clearCookie("auth_token_frnmds",{
        httpOnly: true,
        domain: "localhost",
        signed:true,
        path: '/'
    })
    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie("auth_token_frnmds", token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });
    return res.status(200).json({ message: "OK", id: user._id.toString() });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "Error", cause: error.message });
  }
};
