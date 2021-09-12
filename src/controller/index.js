import UserStorage from "../model/UserStorage";

export const main = (req, res) => {
  res.render("./home/main");
};

export const getLogin = (req, res) => {
  res.render("login");
};

export const loginProcess = (req, res) => {
  const { id, password } = req.body;
  const response = {};
  const users = UserStorage.getUsers("id", "password");

  if (users.id.includes(id)) {
    const idx = users.id.indexOf(id);
    if (users.password[idx] === password) {
      response.success = true;
      return res.json(response);
    }
    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  } else {
    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  }
};
