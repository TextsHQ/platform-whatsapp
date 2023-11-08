var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleUsernameChangeNotification = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./5588.js");
var o = require("./389293.js");
var s = require("./700846.js");
var l = require("./803737.js");
var u = require("./691195.js");
var c = require("./139374.js");
var d = require("./129417.js");
var p = require("./669050.js");
function f() {
  return (f = (0, i.default)(function* (e) {
    const {
      makeChangeNotificationResponseAck: t,
      parsedRequest: n
    } = (0, a.receiveChangeNotificationRPC)(e);
    const r = n.setChangeNotificationSetOrChangeNotificationSetHashOrChangeNotificationDeletedMixinGroup.value;
    const i = (0, p.createUserWid)(n.from);
    const l = r == null ? undefined : r.elementValue;
    const u = r == null ? undefined : r.hash;
    let f = l;
    __LOG__(2)`handleUsernameChangeNotification: received username change notification for ${i}`;
    if (!(0, d.usernameDisplayedEnabled)()) {
      return t();
    }
    if (u != null) {
      f = yield _(u);
    } else {
      yield (0, c.setUsernamesJob)([{
        userId: i,
        username: l
      }]);
    }
    if (f != null) {
      const e = (0, o.genUsernameChangeSystemMsg)(i, f);
      yield (0, s.handleSingleMsg)(i, e, "username_change_notification");
    }
    return t();
  })).apply(this, arguments);
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e) {
    var t;
    const n = yield (0, u.getContactTable)().equals(["contactHash"], e);
    if (n.length === 0) {
      return void __LOG__(3)`could not find side contact hash for username change notification.`;
    }
    const r = (0, p.createUserWid)((t = n[0]) === null || t === undefined ? undefined : t.id);
    const i = yield (0, l.queryWidUsernameExists)(r);
    if (i == null) {
      return undefined;
    } else {
      return i.username;
    }
  })).apply(this, arguments);
}