const expres = require("express");
const router = expres.Router();
const controllers = require("../controllers/chilControllers");

router
  .route("/child")
  .get(controllers.getAllChild)
  .post(controllers.postChild)
  .put(controllers.putChild)
  .delete(controllers.deleteChild);

router.get("/child/:id", controllers.getChildByID);
router.get("/child/class/:id", controllers.getChildClassByID);

module.exports = router;
