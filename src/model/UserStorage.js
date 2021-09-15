class UserStorage {
  static #users = {
    id: ["zizimoos", "tessa"],
    password: ["1234", "1234"],
    name: ["지지", "테사"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static _getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users); // =>[id,password,name]
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static _save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    console.log(users);
  }
}

export default UserStorage;
