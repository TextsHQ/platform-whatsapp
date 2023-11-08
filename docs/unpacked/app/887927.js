Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return (0, r.unixTime)() - e < i.ServerProps.mmsMediaKeyTTL + Math.floor(Math.random() * 86400);
};
var r = require("./632157.js");
var i = require("./937001.js");