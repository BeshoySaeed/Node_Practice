const express = require("express");
const app = express();
const morgan = require("morgan");
const teacherRouter = require("./routers/teacher");
const childRouter = require("./routers/childRouter");
const classRouter = require("./routers/class");

app.listen(8080, () => {
  console.log("listening on port 8080");
});

// loggin middleware
app.use(morgan("dev"));

// auth middleware

//routers

app.use(teacherRouter);
app.use(childRouter);
app.use(classRouter);

// throw error middleware

app.use((req, res, next) => {
  next(new Error("here is an error"));
});

// error handler

app.use((err, req, res, next) => {
  res.status(500).send("error : " + err);
});
