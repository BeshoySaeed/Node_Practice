const express = require("express");
const router = express.Router();
const controllers = require("../controllers/teacherControllers");

router
  .route("/teacher")
  .get(controllers.getAllTeachers)
  .post(controllers.postTeacher)
  .put(controllers.putTeachers)
  .delete(controllers.deleteTeachers);

router.get("/teacher/:id", controllers.getTeacherById);

router.get("/teacher/superviser/:id", controllers.getSuper);

module.exports = router;
