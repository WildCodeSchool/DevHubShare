const express = require("express");
const { hashPassword, verifyPassword, verifyToken } = require("../auth");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const languageControllers = require("./controllers/languageControllers");
const postControllers = require("./controllers/postControllers");
const answerControllers = require("./controllers/answerControllers");
const userHasLanguageControllers = require("./controllers/userHasLanguageControllers");

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/users", userControllers.browse);
router.get("/users/:id", verifyToken, userControllers.read);
router.put("/users/:id", verifyToken, userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete(
  "/users/:id",
  verifyToken,
  verifyPassword,
  userControllers.destroy
);

router.get("/languages", languageControllers.browse);
router.get("/languages/:id", languageControllers.read);
router.put("/languages/:id", languageControllers.edit);
router.post("/languages", languageControllers.add);
router.delete("/languages/:id", languageControllers.destroy);

router.get("/posts", postControllers.browse);
router.get("/posts/:id", verifyToken, postControllers.read);
router.put("/posts/:id", verifyToken, postControllers.edit);
router.post("/posts", verifyToken, postControllers.add);
router.delete("/posts/:id", verifyToken, postControllers.destroy);

router.get(
  "/posts/user/:userId",
  verifyToken,
  postControllers.getPostsByUserId
);
router.get("/posts/language/:languageId", postControllers.getPostsByLanguageId);
router.get(
  "/answers/post/:postId",
  verifyToken,
  answerControllers.getAnswersByPostId
);

router.get("/answers", verifyToken, answerControllers.browse);
router.get("/answers/:id", verifyToken, answerControllers.read);
router.put("/answers/:id", verifyToken, answerControllers.edit);
router.post("/answers", verifyToken, answerControllers.add);
router.delete("/answers/:id", verifyToken, answerControllers.destroy);
router.delete(
  "/answers/post/:postId",
  verifyToken,
  answerControllers.destroyAnswerByPostId
);

router.get("/user_has_language", userHasLanguageControllers.browse);
router.get("/user_has_language/:id", userHasLanguageControllers.read);
router.put("/user_has_language/:id", userHasLanguageControllers.edit);
router.post("/user_has_language", userHasLanguageControllers.add);
router.delete("/user_has_language/:id", userHasLanguageControllers.destroy);

module.exports = router;
