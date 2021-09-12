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
}

export default UserStorage;
