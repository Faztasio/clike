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
  constructor() {
    this.data = {}
  };
  function set(key,val) {
    this.data[key] = val;
  };
  function get(key) {
    return this.data[key];
  };
};

module.exports = function(fileName)
  var file = bufferFile(fileName);
  let dat = new Function("stdout.write","Object",fileName);
  return dat(process.stdout.write,object);
};
