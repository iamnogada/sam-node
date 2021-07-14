const sampleService = require("services/sample.service");

exports.getList = async (req, res, next) => {
  try {
    let result = await sampleService.getList();

    return res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getData = async (req, res, next) => {
  try {
    const sampleId = req.params.id;
    let result = await sampleService.getData(sampleId);

    return res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.createData = async (req, res, next) => {
  try {
    const { title, body } = req.body;
    let result = await sampleService.createData(title, body);

    return res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.updateData = async (req, res, next) => {
  try {
    const sampleId = parseInt(req.params.id);
    const { title, body } = req.body;
    let result = await sampleService.updateData(sampleId, { title, body });

    return res.json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.deleteData = async (req, res, next) => {
  try {
    const sampleId = parseInt(req.params.id);
    let result = await sampleService.deleteData(sampleId);

    return res.json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
