
let connection = require("../../Task1/sql.js");

exports.getUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query("select * from users", (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(data);
      }
    });
  });
};

exports.createUser = (userData) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select * from users where user=?",
      [userData.user],
      (err, data) => {
        if (err) {
          reject(err.message);
        } else {
          if (!data.length > 0) {
            connection.query(
              "insert into users (user,password,mail,role) values (?,?,?,?)",
              [
                userData.user,
                userData.password,
                userData.mail,
                userData.role,
              ],
              (err, data) => {
                if (err) {
                  reject(err.message);
                } else {
                  resolve(userData.user + " successfully Registered");
                }
              }
            );
          } else {
            resolve(userData.user + " username already exists");
          }
        }
      }
    );
  });
};
