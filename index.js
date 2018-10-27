var require = require;
var args = process.argv;
const fs = require("fs");
const path = require("path");

function bufferFile(relPath) {
  fs.readFile(relPath, (err,data) => {
    return data
  })
};

function execute(command) {
  const exec = require('child_process').exec;

  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout);
  });
};

class object {
  constructor(form) {
    data = class {
      constructor(data) {
        var a = {};
        Object.keys(data).forEach(function(key) {
          if (form[key]) {
            a[key] = data[key];
          } else {
            stdout.write("Incorrect syntax.")
          }
        })
        return a;
      }
    };
    return data;
  }
}

module.exports = function(fileName)
  var file = bufferFile(fileName);
  let dat = new Function("Objective",file);
  return dat(process.stdout.write,object);
};
