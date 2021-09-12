import users from "../../model/model";

export const main = (req, res) => {
  res.render("./home/main");
};

export const getLogin = (req, res) => {
  res.render("login");
};

export const loginProcess = async (req, res) => {
  const { id, password } = req.body;
  await console.log(id, password);

  users.forEach((user) => {
    if (id === user.id) {
      console.log(`${user.id} 아이디 있습니다.`);
      if (password === user.password) {
        console.log(`비밀번호가 일치 합니다.`);
        console.log(`login : true`);
        return res.json({
          success: true,
        });
      } else if (password !== user.password) {
        console.log(`비밀번호가 일치하지 않습니다.`);
        return res.json({
          success: false,
          msg: "로그인 실패",
        });
      }
    }
  });
};
