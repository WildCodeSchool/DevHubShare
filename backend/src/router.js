const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const languageControllers = require("./controllers/languageControllers");
const postControllers = require("./controllers/postControllers");
const answerControllers = require("./controllers/answerControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/languages", languageControllers.browse);
router.get("/languages/:id", languageControllers.read);
router.put("/languages/:id", languageControllers.edit);
router.post("/languages", languageControllers.add);
router.delete("/languages/:id", languageControllers.destroy);

router.get("/posts", postControllers.browse);
router.get("/posts/:id", postControllers.read);
router.put("/posts/:id", postControllers.edit);
router.post("/posts", postControllers.add);
router.delete("/posts/:id", postControllers.destroy);

router.get("/answers", answerControllers.browse);
router.get("/answers/:id", answerControllers.read);
router.put("/answers/:id", answerControllers.edit);
router.post("/answers", answerControllers.add);
router.delete("/answers/:id", answerControllers.destroy);

module.exports = router;
