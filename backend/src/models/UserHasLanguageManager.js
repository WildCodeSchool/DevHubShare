/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserHasLanguageManager extends AbstractManager {
  constructor() {
    super({ table: "user_has_language" });
  }

  insert(user_has_language) {
    return this.database.query(
      `insert into ${this.table} (user_id, language_id)  values(?, ?) `,
      [user_has_language.user_id, user_has_language.language_id]
    );
  }

  update(user_has_language) {
    return this.database.query(
      `update ${this.table} set user_id = ?, language_id = ?`,
      [user_has_language.user_id, user_has_language.language_id]
    );
  }
}

module.exports = UserHasLanguageManager;
