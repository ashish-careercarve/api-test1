const express = require("express");
const cors = require("cors");
const app = express();
const db = require('./db-car');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/cources", (req, res) => {
  res.send([1, 2, 3]);
});

app.post("/student", (req,res) => {
  const qu= 'INSERT INTO student (first_name, last_name, ph_no, email, address, li_url) VALUES (?)';
  const va= "${req.body.first_name}, ${req.body.last_name}, ${req.body.ph_no}, ${req.body.email}, ${req.body.address}, ${req.body.li_url}";
  res.send(va);
  db.query(qu, va, (err,result)=>{
    if(err) {
    console.log(err);
    }
  res.send(result);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  // console.log("Press Ctrl+C to quit.");
});
