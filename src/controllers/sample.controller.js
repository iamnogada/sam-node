const yup = require("yup");
const sampleService = require("services/sample.service");

/**
 * validation 스키마 정의
 *  - 스키마 작성 방법 : https://github.com/jquense/yup#usage
 */
const valiationSchema = (t) => ({
  createData: yup.object().shape({
    title: yup
      .string()
      .required(t("validation.required", { name: t("title") })),
    body: yup.string().required(t("validation.required", { name: t("body") })),
  }),
});

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

    /**
     * 상단에 정의한 스키마의 맞는 validate 를 실행한다.
     */
    await valiationSchema(req.t).createData.validate({ title, body });

    let result = await sampleService.createData(title, body);

    return res.json(result);
  } catch (err) {
    console.log(err);
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
