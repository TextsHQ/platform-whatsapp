Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIsSagaEnabled = function () {
  return i.Conn.isSMB && (0, r.getABPropConfigValue)("saga_enabled");
};
exports.getIsSagaMVPEnabled = function () {
  return i.Conn.isSMB && (0, r.getABPropConfigValue)("saga_mvp_value") === 2;
};
var r = require("./287461.js");
var i = require("./445729.js");