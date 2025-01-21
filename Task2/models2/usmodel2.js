
const connection = require("../../Task1/sql.js");

exports.find = (req, res) => {
  connection.query("select * from users", (err, data) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(data);
    }
  });
};

exports.create = (req, res) => {
  connection.query(
    "select * from users where user=?",
    [req.body.user],
    (err, data) => {
      if (err) {
        res.send(err.message);
      } else {
        if (!data.length > 0) {
          connection.query(
            "insert into users (user,password,mail,role) values (?,?,?,?)",
            [req.body.user, req.body.password, req.body.mail, req.body.role],
            (err, data) => {
              if (err) {
                res.send(err.message);
              } else {
                res.send(req.body.user + " successfully Registered");
              }
            }
          );
        } else {
          res.send(req.body.user + " username already exists");
        }
      }
    }
  );
};

exports.update = (req, res) => {
  connection.query(
    "select * from users where user=?",
    [req.body.user],
    (err, data) => {
      if (err) {
        res.send(err.message);
      } else {
        if (data.length > 0) {
          connection.query(
            "update users set password=? where user=?",
            [req.body.password, req.body.user],
            (err, data) => {
              if (err) {
                res.send(err.message);
              } else {
                res.send(
                  "Password Updated Successfully for user " + req.body.user
                );
              }
            }
          );
        } else {
          res.send("no user found with " + req.body.user);
        }
      }
    }
  );
};

exports.delete = (req, res) => {
  connection.query(
    "select * from users where user=?",
    [req.body.user],
    (err, data) => {
      if (err) {
        res.send(err.message);
      } else {
        if (data.length > 0) {
          connection.query(
            "delete from users where user=?",
            [req.body.user],
            (err, data) => {
              if (err) {
                res.send(err.message);
              } else {
                res.send(
                  req.body.user + " details deleted successfuly from database"
                );
              }
            }
          );
        } else {
          res.send("no user found with " + req.body.user);
        }
      }
    }
  );
};
