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
  database: "Hostel_Utilities",
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
  const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
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
  const complaintSql =
    "INSERT INTO complaint (`type`, `description`, `photo`, `c_time`, `staff_flag`, `stud_flag`) VALUES (?, ?, ?, CURRENT_DATE, 0, 0)";
  const filedBySql = "INSERT INTO filed_by (`roll_no`) VALUES (?)";

  const complaintValues = [req.body.type, req.body.description, req.body.image];

  const filedByValues = [
    req.body.roll_no, // Assuming roll_no is part of req.body
  ];

  try {
    db.query(complaintSql, complaintValues, (complaintErr, complaintData) => {
      if (complaintErr) {
        return res.json(complaintErr);
      } else {
        // If the first query is successful, execute the second query
        db.query(filedBySql, filedByValues, (filedByErr, filedByData) => {
          if (filedByErr) {
            return res.json(filedByErr);
          } else {
            res.json("New complaint registered");
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/user/mycomplaints", (req, res) => {
  const rollNo = req.body.roll_no;
  const sql = `SELECT * FROM complaint`;
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

app.get("/user/guestroombook", (req, res) => {
  const sql =
    "INSERT INTO room ( `Hostel`, `Name`, `Gender`, `Relationship`, `NumberOfPersons`, `PermanentAddress`, `ContactAddress`, `PhoneNo`, `EmailId`, `CheckIn`, `CheckOut`) VALUES (?)";
  const values = [
    req.body.Hostel,
    req.body.Name,
    req.body.Gender,
    req.body.Relationship,
    req.body.NumberOfPersons,
    req.body.PermanentAddress,
    req.body.ContactAddress,
    req.body.PhoneNo,
    req.body.EmailId,
    req.body.CheckIn,
    req.body.CheckOut,
  ];
  try {
    db.query(sql, [values], (err, data) => {
      if (err) return res.json(err);
      else {
        res.json("Application successfully submitted");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/user/leaveapplication", (req, res) => {
  const sql =
    "INSERT INTO Leave ( `Name`, `Roll_No`, `Room_No`, `Gender`, `Program`, `Branch`, `Reason_for_leave`, `Leave_Duration`, `From_`, `Upto_`, `Residential_Address`, `Contact_No`, `Contact_No_of_Parents`  ) VALUES (?)";
  const values = [
    req.body.Name,
    req.body.Roll_No,
    req.body.Room_No,
    req.body.Gender,
    req.body.Program,
    req.body.Branch,
    req.body.Reason_for_leave,
    req.body.Leave_Duration,
    req.body.From_,
    req.body.Upto_,
    req.body.Residential_Address,
    req.body.Contact_No,
    req.body.Contact_No_of_Parents,
  ];
  try {
    db.query(sql, [values], (err, data) => {
      if (err) return res.json(err);
      else {
        res.json("Application successfully submitted");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.json("Hello this is backend");
});
