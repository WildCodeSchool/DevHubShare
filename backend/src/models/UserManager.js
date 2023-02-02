const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (picture, pseudo, firstname, lastname, email, workplace, github, linkedin, user_text, hashedpassword) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.picture,
        user.pseudo,
        user.firstname,
        user.lastname,
        user.email,
        user.workplace,
        user.github,
        user.linkedin,
        user.user_text,
        user.hashedpassword,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set picture = ?, pseudo = ?, firstname = ?, lastname = ?, email = ?, workplace = ?, github = ?, linkedin = ?, user_text = ?, hashedpassword = ? where id = ?`,
      [
        user.picture,
        user.pseudo,
        user.firstname,
        user.lastname,
        user.email,
        user.workplace,
        user.github,
        user.linkedin,
        user.user_text,
        user.hashedpassword,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
