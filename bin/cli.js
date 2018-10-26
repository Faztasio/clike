var require = require;
var args = process.argv;
const fs = require("fs");

var fileName = args[2]

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
    this.data = {}
  };
  function set(key,val) {
    this.data[key] = val;
  };
  function get(key) {
    return this.data[key];
  };
};

var file = bufferFile(fileName);
let dat = new Function("stdout.write","object",fileName);
process.stdout.write(dat(process.stdout.write,object));
