import UserStorage from "./UserStorage";

class User {
  constructor(body) {
    this.body = body;
  }
  _login() {
    const { id, password } = UserStorage._getUserInfo(this.body.id);
    if (id) {
      if (id === this.body.id && password === this.body.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "아이디가 존재 하지 않습니다." };
  }
}

export default User;
