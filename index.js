var fs = require('fs'),
    data = fs.readFileSync(__dirname + "/secondary", "utf8");

module.exports.secondaries = data.split("\n");