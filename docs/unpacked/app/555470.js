var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  if (i.Cmd.isMainLoaded) {
    return Promise.resolve();
  }
  return (0, a.default)(i.Cmd, "main_loaded");
};
var i = require("./780549.js");
var a = r(require("./799132.js"));