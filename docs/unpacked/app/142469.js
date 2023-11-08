var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleServerClientExpiration = function (e) {
  const t = parseInt(s.default, 10);
  if (e == null) {
    (0, l.clearServerClientExpirationOverride)();
  } else {
    var n;
    const r = (n = (0, l.getServerClientExpirationOverride)()) === null || n === undefined ? undefined : n.timestamp;
    if (r != null && e >= r || e >= t) {
      return;
    }
    const s = (0, i.futureUnixTime)(i.DAY_SECONDS * 3);
    const u = Math.max(s, Math.min(e, t));
    (0, l.setServerClientExpirationOverride)(`${u}`, a.VERSION_BASE);
    o.Cmd.serverUpdatedClientExpiration();
  }
};
var i = require("./632157.js");
var a = require("./508247.js");
var o = require("./780549.js");
var s = r(require("./595307.js"));
var l = require("./673168.js");