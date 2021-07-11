// Get router oject from express
const router = require("express").Router();

// import middleware
const authHandler = require("middlewares/authHandler");

// import controllers
const carController = require("controllers/car.controller");

// public routers without login
// must locate before router required login
router.get("/", carController.getCars);

// Sample order of handlers
// 요청이 http://../car/10 인경우 "/maker"로 한번 필터링 됨 그리고, 처리가 안되는 경우 다음 handler가 실행
router.get("/maker", carController.getCarByMaker);
// path parameter에 regular expression 적용
router.get("/:id(\\d+)", carController.getCarByID);

router.get("/error", carController.invokeError);

// set auth check middleware
router.use(authHandler.checkAuth);

// api router requiring loggin token
router.post("/", carController.insertCar);

// Must exports
module.exports = router;
