var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPresenceAvailable = function () {
  (0, i.sendPresenceStatusProtocol)({
    status: "available",
    name: a.Conn.pushname
  });
};
exports.setPresenceUnavailable = function () {
  (0, i.sendPresenceStatusProtocol)({
    status: "unavailable",
    name: a.Conn.pushname
  });
};
exports.subscribePresence = function (e, t) {
  let n;
  n = e instanceof s.default ? e : (0, l.createWid)(e);
  return Promise.resolve((0, o.default)(n, t));
};
var i = require("./96894.js");
var a = require("./445729.js");
var o = r(require("./196506.js"));
var s = r(require("./124928.js"));
var l = require("./669050.js");