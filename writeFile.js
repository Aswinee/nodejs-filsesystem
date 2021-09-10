const fs = require("fs");

// current timestamp in milliseconds
let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
const data =
  "Date - " +
  year +
  "-" +
  month +
  "-" +
  date +
  ", Time - " +
  hours +
  ":" +
  minutes;
console.log(data);
fs.writeFileSync("message.txt", data);

console.log("file created");
