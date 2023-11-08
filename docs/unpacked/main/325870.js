Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMention = function (e) {
  var t;
  const n = (t = e.isLid() ? (0, a.getPhoneNumber)(e) : e) !== null && t !== undefined ? t : e;
  return `${r.ZWS}${n.toString()}${r.ZWS}`;
};
var a = require("../app/12643.js");
var r = require("../app/472685.js");