/* global config */
const express = require("express");
// const path = require('path');
const cookieParser = require("cookie-parser");

// intialize environment values and insert into global in order accessing from every code
global.config = require("../config/env.json");

// global middleware
const errorHandler = require("middlewares/errorHandler");
// import routers samples
const authRouter = require("routers/auth");
const carRouter = require("routers/car");
const employeeRouter = require("routers/employee");

/* GUIDE: Import(Require) new router
 **  const [variableRouter] = require("[path]")
 **  locate assign router public api block or login api block
 */

const app = express();

const port = config.application.port || 3000;
app.set("port", port);

/* <------ Start global middle ware block */
//TODO: access and app log 처리 필요
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(errorHandler.global);

/* End ---------------------------------> */

// app.use(express.static(path.join(__dirname, 'public')));
/* <------ Start assigning router */
// GUIDE: add new router
app.use("/api/car", carRouter);
app.use("/api/auth", authRouter);
app.use("/api/employee", employeeRouter);

/* End ---------------------------------> */

/* <------ Start global handler, must be located after api router */
app.use("*", errorHandler.notFoundErrorHandler);
app.use(errorHandler.global);
/* End ---------------------------------> */
module.exports = app;
