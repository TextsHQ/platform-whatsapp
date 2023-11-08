var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMsgKeyFromStarActionIndex = function (e) {
  const t = JSON.parse(e);
  if (t.length < 5) {
    throw (0, d.default)("[sync-action] star action index malformed, cannot create MsgKey");
  }
  const n = f(t[1], t[2], t[3], t[4]);
  if (!n) {
    __LOG__(3)`[sync-action] star action index data is malformed, , cannot create MsgKey`;
    throw (0, d.default)("[sync-action] star action index data is malformed, , cannot create MsgKey");
  }
  return n;
};
exports.syncKeyToMsgKey = f;
exports.throwInvalidActionIndex = function () {
  (0, o.uploadFatalErrorMetric)(l.MD_SYNCD_FATAL_ERROR_CODE.INVALID_ACTION_INDEX, null);
  throw new i.SyncdFatalError("invalid action index");
};
var i = require("./256764.js");
var a = r(require("./565754.js"));
var o = require("./22383.js");
var s = require("./459857.js");
var l = require("./845972.js");
var u = r(require("./124928.js"));
var c = require("./669050.js");
var d = r(require("./556869.js"));
const p = /\d(?=)/gm;
function f(e, t, n, r) {
  let i;
  if (!u.default.isWid(e)) {
    __LOG__(3)`syncKeyToMsgKey: invalid remote value: ${e.replace(p, "#")}`;
    return null;
  }
  if (!(0, c.createWid)(e).isUser()) {
    if (n === "0" && !u.default.isWid(r)) {
      __LOG__(3)`syncKeyToMsgKey: invalid participant value: ${r.replace(p, "#")}`;
      return null;
    }
    i = n === "1" ? (0, s.getMeUser)() : (0, c.createWid)(r);
  }
  return new a.default({
    fromMe: n === "1",
    remote: (0, c.createWid)(e),
    id: t,
    participant: i
  });
}