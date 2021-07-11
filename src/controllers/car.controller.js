// controller using async
const data = require("../../data/data.json");

exports.getCars = async (req, res, next) => {
  try {
    return res.json(data.car);
  } catch (error) {
    next(error);
  }
};

exports.getCarByID = async (req, res, next) => {
  try {
    return res.json(data.car.filter((car) => car.id == req.params.id));
  } catch (error) {
    next(error);
  }
};

exports.getCarByMaker = async (req, res, next) => {
  try {
    return res.json(data.car.filter((car) => car.maker == req.query.name));
  } catch (error) {
    next(error);
  }
};

exports.insertCar = async (req, res, next) => {
  try {
    console.log("Insert with middleware filtered");
  } catch (error) {
    next(error);
  }
};

exports.invokeError = async (req, res, next) => {
  // res.json({
  //   status: "ok",
  // });
  const error = new Error("manual error");

  next(error);
};
