const models = require("../models");

const browse = (req, res) => {
  models.item
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Status: Internal Server Error");
    });
};

const read = (req, res) => {
  models.item
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.status(404).send("Status: Not Found");
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Status: Internal Server Error");
    });
};

const edit = (req, res) => {
  const item = req.body;

  item.id = parseInt(req.params.id, 10);

  models.item
    .update(item)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Status: Not Found");
      } else {
        res.status(204).send("Status: No Content");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Status: Internal Server Error");
    });
};

const add = (req, res) => {
  const item = req.body;

  // TODO validations (length, format...)

  models.item
    .insert(item)
    .then(([result]) => {
      res.location(`/items/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Status: Internal Server Error");
    });
};

const destroy = (req, res) => {
  models.item
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Status: Not Found");
      } else {
        res.status(204).send("Status: No Content");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Status: Internal Server Error");
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
