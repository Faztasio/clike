var require = require;
var args = process.argv;
const fs = require("fs");

function bufferFile(relPath) {
  return fs.readFileSync(path.join(__dirname, relPath)).toString();
};

function execute(command) {
  const exec = require('child_process').exec;

  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout);
  });
};

class object {
  constructor() {
    this.data = {};
    return this.data;
  };
};

use = function(scr) {
  let dat = new Function("stdout.write","object","use",scr);
  return dat(process.stdout.write,object,use);
};
                              
module.exports = function(fileName)
  var file = bufferFile(fileName);
  let dat = new Function("stdout.write","object","use",file);
  return dat(process.stdout.write,object,use);
};
