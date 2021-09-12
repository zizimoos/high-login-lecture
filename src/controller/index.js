import UserStorage from "../model/UserStorage";
import User from "../model/User";

export const main = (req, res) => {
  res.render("./home/main");
};

export const getLogin = (req, res) => {
  res.render("login");
};

export const loginProcess = (req, res) => {
  const user = new User(req.body);
  console.log(user);
  const response = user._login();
  console.log(response);
  return res.json(response);
};
