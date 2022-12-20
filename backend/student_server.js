const express = require("express");
const cors = require("cors");
const db = require("./models/index.js");
const { createStudent,findAll,deleteStudent,updateStudent, findOne } = require("./controllers/student.js");

const port = 6000;
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// app.get('/',findAll)
// app.get('/:id',findOne)
// app.post('/',createStudent)
// app.delete('/:id',deleteStudent)
// app.put('/:id',updateStudent)

app.use('/api/students', require("./routes/routes.js"));


db.sequelize.sync({ force: false })
  .then(() => {
    console.log('DB up')
  })

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
