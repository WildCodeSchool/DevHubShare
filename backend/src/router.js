const express = require("express");
const { hashPassword, verifyPassword, verifyToken } = require("../auth");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const languageControllers = require("./controllers/languageControllers");
const postControllers = require("./controllers/postControllers");
const answerControllers = require("./controllers/answerControllers");
const userHasLanguageControllers = require("./controllers/userHasLanguageControllers");

// const isItDwight = (req, res) => {
//   if (req.body.email === "geo@geo.fr" && req.body.password === "secret") {
//     res.send("Credentials are valid");
//   } else {
//     res.sendStatus(401);
//   }
// };

// router.post("/login", isItDwight);

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword,
  verifyToken
);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", verifyToken, hashPassword, userControllers.edit);
router.post("/users", verifyToken, hashPassword, userControllers.add);
router.delete("/users/:id", verifyToken, hashPassword, userControllers.destroy);

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

router.get("/user_has_language", userHasLanguageControllers.browse);
router.get("/user_has_language/:id", userHasLanguageControllers.read);
router.put("/user_has_language/:id", userHasLanguageControllers.edit);
router.post("/user_has_language", userHasLanguageControllers.add);
router.delete("/user_has_language/:id", userHasLanguageControllers.destroy);

module.exports = router;
