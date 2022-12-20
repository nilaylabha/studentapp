const express=require ('express')
const router = express.Router();

module.exports = (app) => {
  const students = require("../controllers/student.js");

  const router = require("express").Router();

  // add new student
  // view all students
  router.post("/", students.createStudent);
  router.get("/", students.findAll);
  // router.route("/").get(students.findAll).post(students.createStudent);

  // router
  //   .route("/:id")
  //   .get(students.findOne)
  //   .put(students.updateStudent)
  //   .delete(students.deleteStudent);

  // view a student
  router.get("/:id", students.findOne);

  // update student
  router.put("/:id", students.updateStudent);

  // remove a student with id
  router.delete("/:id", students.deleteStudent);
};

// module.exports=router