var require = require;
var args = process.argv;
const fs = require("fs");
const path = require("path");

function bufferFile(relPath) {
  fs.readFile(relPath, (err,data) => {
    return data
  })
};

use = function(fileName)
  var file = bufferFile(fileName);
  let dat = new Function("Objective","println","use",file);
  return dat(object,console.log,use);
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
          if (form.includes(key)) {
            a[key] = data[key]
          }
        }
        return a;
      }
    }
  }
}

module.exports = function(fileName)
  var file = bufferFile(fileName);
  let dat = new Function("Objective","println","use",file);
  return dat(object,console.log,use);
};
