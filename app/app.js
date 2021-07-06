const express = require("express");
// const path = require('path');
const cookieParser = require("cookie-parser");

// intialize environment values and insert into global in order accessing from every code
global.config = require("../config/env.json");

// global middleware
const errorHandler = require("middlewares/errorHandler");
// import routers
const authRouter = require("routes/auth");
const carRouter = require("routes/car");

// const routes = require("./routes");
// const usersRouter = require('./routes/users');

const app = express();
// eslint-disable-next-line no-undef
const port = config.application.port || 3000;
app.set("port", port);

//TODO: access and app log 처리 필요
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/car", carRouter);
app.use("/api/auth", authRouter);

app.use("*", errorHandler.notFoundErrorHandler);
app.use(errorHandler.global);
module.exports = app;
