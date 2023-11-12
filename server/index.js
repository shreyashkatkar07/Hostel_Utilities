const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

const app = express();
app.use(express.json());
app.use(cookieParser());

const host = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  paassword: "",
  database: "test",
});

app.listen(host, () => {
  console.log(`Server is listening on http://localhost:${host}`);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE user_id = ? AND pass = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.error("Error in login query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    const authToken = Math.random() * 100;
    return res.json({ Status: "Success", authToken });
  });
});

app.post("/user/newcomplaint", (req, res) => {
  const sql =
    "INSERT INTO Complaint (`type`, `description`, `image`, `room_no`) VALUES (?)";
  const values = [
    req.body.type,
    req.body.description,
    req.body.image,
    req.body.room_no,
  ];

  try {
    db.query(sql, [values], (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        res.json("New complaint registered");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/user/mycomplaints", (req, res) => {
  const sql = "SELECT * FROM Complaint";
  try {
    db.query(sql, (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.json("Hello this is backend");
});
