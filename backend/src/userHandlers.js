/* eslint-disable camelcase */
const database = require("../database.sql");

const getUsers = (req, res) => {
  const initialSql =
    "select id, picture, pseudo, firstname, lastname, email,  workplace, github, linkedin, usertext, hashedpassword from user";
  const where = [];

  if (req.query.firstname != null) {
    where.push({
      column: "firstname",
      value: req.query.firstname,
      operator: "=",
    });
  }
  if (req.query.lastname != null) {
    where.push({
      column: "lastname",
      value: req.query.lastname,
      operator: "=",
    });
  }
  if (req.query.workplace != null) {
    where.push({
      column: "workplace",
      value: req.query.workplace,
      operator: "=",
    });
  }
  if (req.query.github != null) {
    where.push({
      column: "github",
      value: req.query.github,
      operator: "=",
    });
  }
  if (req.query.linkedin != null) {
    where.push({
      column: "linkedin",
      value: req.query.linkedin,
      operator: "=",
    });
  }
  if (req.query.usertext != null) {
    where.push({
      column: "usertext",
      value: req.query.usertext,
      operator: "=",
    });
  }
  database
    .query(
      where.reduce(
        (sql, { column, operator }, index) =>
          `${sql} ${index === 0 ? "where" : "and"} ${column} ${operator} ?`,
        initialSql
      ),
      where.map(({ value }) => value)
    )
    .then(([user]) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query(
      "select id, picture, pseudo, firstname, lastname, email, workplace, github, linkedin, usertext from user where id = ?",
      [id]
    )
    .then(([user]) => {
      if (user[0] != null) {
        res.json(user[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postUser = (req, res) => {
  const {
    picture,
    pseudo,
    firstname,
    lastname,
    email,
    workplace,
    github,
    linkedin,
    user_text,
    hashedpassword,
  } = req.body;

  database
    .query(
      "INSERT INTO user(picture, pseudo, firstname, lastname, email, workplace, github, linkedin, user_text, hashedpassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        picture,
        pseudo,
        firstname,
        lastname,
        email,
        workplace,
        github,
        linkedin,
        user_text,
        hashedpassword,
      ]
    )
    .then(([result]) => {
      res.location(`/api/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const {
    picture,
    pseudo,
    firstname,
    lastname,
    email,
    workplace,
    github,
    linkedin,
    usertext,
    hashedpassword,
  } = req.body;

  database
    .query(
      "update users set picture = ?, pseudo = ?, firstname = ?, lastname = ?, email = ?, workplace = ?, github = ?, linkedin = ?, usertext = ?, hashedpassword = ? where id = ?",
      [
        picture,
        pseudo,
        firstname,
        lastname,
        email,
        workplace,
        github,
        linkedin,
        usertext,
        hashedpassword,
        id,
      ]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the user");
    });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("delete from users where id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the user");
    });
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  updateUser,
  deleteUser,
};
