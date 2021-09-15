import UserStorage from "../model/UserStorage";
import User from "../model/User";

export const main = (req, res) => {
  res.render("./home/main");
};

export const getLogin = (req, res) => {
  res.render("login");
};

export const loginProcess = async (req, res) => {
  const user = new User(req.body);
  const response = await user._login();
  return res.json(response);
};

export const getRegister = (req, res) => {
  res.render("home/register");
};

export const registerProcess = (req, res) => {
  const user = new User(req.body);
  const response = user._register();
  return res.json(response);
};
