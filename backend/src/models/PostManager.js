const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "post" });
  }

  insert(post) {
    return this.database.query(
      `insert into ${this.table} (tag, post_text, language_id, user_id) values (?, ?, ?, ?)`,
      [post.tag, post.post_text, post.language_id, post.user_id]
    );
  }

  update(post) {
    return this.database.query(
      `update ${this.table} set tag = ?, post_text = ? where id = ?`,
      [post.tag, post.post_text, post.id]
    );
  }
}

module.exports = PostManager;
