import db from "../config/db";

class UserStorage {
  static _getUserInfo(id) {
    const query = "SELECT * FROM users WHERE id=?;";
    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }

  static async _save(userInfo) {
    const query = "INSERT INTO users(id, username, psword) VALUES(?,?,?);";
    return new Promise((resolve, reject) => {
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err) => {
          if (err) reject(`${err}`);
          else resolve({ success: true });
        }
      );
    });
  }
}

export default UserStorage;
