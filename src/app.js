/* global config */
const express = require("express");
// const path = require('path');
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const i18next = require("i18next");
const i18nextMiddleware = require("i18next-http-middleware");
const i18nextBackend = require("i18next-fs-backend");

// intialize environment values and insert into global in order accessing from every code
// const config = require("../config/env.json");
global.config = require("../config/env.json");
// global middleware
const errorHandler = require("middlewares/errorHandler");
// import routers samples
const authRouter = require("routers/auth");
const carRouter = require("routers/car");
const employeeRouter = require("routers/employee");
const sampleRouter = require("routers/sample");

/* GUIDE: Import(Require) new router
 **  const [variableRouter] = require("[path]")
 **  locate assign router public api block or login api block
 */

const app = express();

const port = config.application.port || 3000;
app.set("port", port);

app.use(morgan("tiny"));

/* <------ Start global middle ware block */
//TODO: access and app log 처리 필요
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(errorHandler.global);

/* End ---------------------------------> */

// use i18n
i18next
  .use(i18nextBackend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: __dirname + "/resources/locales/{{lng}}/{{ns}}.json",
      addPath: __dirname + "/resources/locales/{{lng}}/{{ns}}.missing.json",
    },
    fallbackLng: "en",
    load: "languageOnly",
    saveMissing: true,
    detection: { lookupHeader: "accept-language", lookupQuerystring: "lng" },
  });

app.use(i18nextMiddleware.handle(i18next));

// app.use(express.static(path.join(__dirname, 'public')));
/* <------ Start assigning router */
// GUIDE: add new router
app.use("/api/car", carRouter);
app.use("/api/auth", authRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/sample", sampleRouter);
app.use(i18nextMiddleware.handle(i18next));
// TODO. i18n 테스트용 api
app.get("/i18n", (req, res) => {
  res.send(
    JSON.stringify(
      {
        "req.language": req.language,
        "req.i18n.language": req.i18n.language,
        "req.i18n.languages": req.i18n.languages,
        "req.i18n.languages[0]": req.i18n.languages[0],
        'req.t("home.title")': req.t("home.title"),
      },
      null,
      2
    )
  );
});

/* End ---------------------------------> */

/* <------ Start global handler, must be located after api router */
app.use("*", errorHandler.notFoundErrorHandler);
app.use(errorHandler.global);
/* End ---------------------------------> */
module.exports = app;
