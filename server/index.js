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
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE",);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/login", (req, res) => {
  const sql =
    "SELECT * FROM login WHERE username = ? AND password = ? AND role = ?";
  db.query(
    sql,
    [req.body.email, req.body.password, req.body.role],
    (err, data) => {
      if (err) {
        console.error("Error in login query:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      const authToken = req.body.role;
      return res.json({ Status: "Success", authToken });
    }
  );
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

app.delete("/user/delcomplaint/:id", (req, res) => {
  const compId = req.params.id;
  const sql = "DELETE FROM complaint WHERE c_id = ?";
  db.query(sql, compId, (err, data) => {
    if (err) return res.json(err);
    return res.json("Book deleted successfully");
  });
});

app.get("/user/checkoffcomplaint/:id", (req, res)=>{
  const compId = req.params.id;
  const sql = "UPDATE complaint SET stud_flag = '1' WHERE complaint.c_id = ? ";
  db.query(sql, compId, (err, data) => {
    if (err) return res.json(err);
    return res.json("Checked off successfully");
  });
})

app.get("/admin/checkoffcomplaint/:id", (req, res)=>{
  const compId = req.params.id;
  const sql = "UPDATE complaint SET staff_flag = '1' WHERE complaint.c_id = ? ";
  db.query(sql, compId, (err, data) => {
    if (err) return res.json(err);
    return res.json("Checked off successfully");
  });
})

app.get("/user/mycomplaints", (req, res) => {
  const sql = "SELECT * FROM complaint";
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

app.post("/user/leaveapplication", (req, res) => {
  const sql =
    "INSERT INTO grant_leave (`email_id`, `roll_no`, `l_from`, `l_upto`, `reason`, `permission`) VALUES (?, ?, ?, ?, ?, FALSE)";
  const values = [
    req.body.Roll_No + "@iiitdmj.ac.in",
    req.body.Roll_No,
    req.body.From_,
    req.body.Upto_,
    req.body.Reason_for_leave,
  ];

  try {
    db.query(sql, values, (err, data) => {
      if (err) {
        console.error("Error in leave application query:", err);
        return res.json(err);
      } else {
        console.log("Leave application successfully submitted");
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
