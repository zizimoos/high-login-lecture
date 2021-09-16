import fs from "fs";

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users); // =>[id,password,name]
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
    return fs.promises
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch((error) => console.error);
  }

  static _getUserInfo(id) {
    return fs.promises
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((error) => console.error);
  }

  static async _save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw `이미 존재하는  아이디입니다.`;
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);

    fs.writeFile("./src/databases/users.json", JSON.stringify(users), () => {});
    return { success: true };
  }
}

export default UserStorage;
