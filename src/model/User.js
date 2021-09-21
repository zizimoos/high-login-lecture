import { response } from "express";
import UserStorage from "./UserStorage";

class User {
  constructor(body) {
    this.body = body;
  }
  async _login() {
    try {
      const user = await UserStorage._getUserInfo(this.body.id);
      if (user) {
        if (user.id === this.body.id && user.password === this.body.password) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
      return { success: false, msg: "아이디가 존재 하지 않습니다." };
    } catch (error) {
      return { success: false, msg: error };
    }
  }
  async _register() {
    try {
      await UserStorage._save(this.body);
      return { success: true };
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

export default User;
