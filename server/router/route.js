const express = require("express");
const router = express.Router();

const { signup, login, profile } = require("../controller/userCtrl");
const { create, all, read, update } = require("../controller/taskCtrl");

router.get("/test", (req, res) => {
  let data = "😍";
  return res.send({ data: data });
});

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile/:id", profile);
router.get("/edit/:id", profile);

router.post("/create", create);
router.get("/all", all);
router.get("/read/:id", read);
router.get("/update/:id", update);


module.exports = router;
