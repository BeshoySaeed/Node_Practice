const express = require("express");
const router = express.Router();
const controllers = require("../controllers/classControllers");

router
  .route("/class")
  .get(controllers.getAllClass)
  .post(controllers.postClass)
  .put(controllers.putClass)
  .delete(controllers.deletedClass);

router.get("/class/:id", controllers.getClassById);

router.get("/class/child/:id", controllers.getAllchildInClassById);

router.get("class/teacher/:id", controllers.getAllTeacherInClassById);

module.exports = router;
