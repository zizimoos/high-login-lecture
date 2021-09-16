import { response } from "express";
import UserStorage from "./UserStorage";

class User {
  constructor(body) {
    this.body = body;
  }
  async _login() {
    const { id, password } = await UserStorage._getUserInfo(this.body.id);
    if (id) {
      if (id === this.body.id && password === this.body.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "아이디가 존재 하지 않습니다." };
  }
  async _register() {
    try {
      await UserStorage._save(this.body);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

export default User;
