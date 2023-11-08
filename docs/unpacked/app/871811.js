var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    id: t,
    from: n,
    t: r
  } = e.attrs;
  if (e.attrs.class === "message") {
    const i = (0, d.createWid)(String(n));
    const a = function (e) {
      var t;
      var n;
      let {
        content: r
      } = e;
      if (!Array.isArray(r) || ((t = r[0]) === null || t === undefined ? undefined : t.tag) !== "rcat") {
        return null;
      }
      const i = (n = r[0]) === null || n === undefined ? undefined : n.content;
      if (Array.isArray(i)) {
        return null;
      } else {
        return i;
      }
    }(e);
    !function () {
      f.apply(this, arguments);
    }(String(t), i, parseInt(r, 10), a);
    (function (e, t, n) {
      if (e == null) {
        return;
      }
      const r = s.MsgCollection.get(p(t, n));
      if (r != null) {
        r.rcat = e;
      }
    })(a, String(t), i);
  }
};
var i = r(require("../vendor/348926.js"));
var a = require("./254665.js");
var o = require("./878685.js");
var s = require("./61113.js");
var l = r(require("./565754.js"));
var u = require("./373070.js");
var c = require("./851698.js");
var d = require("./669050.js");
function p(e, t) {
  return new l.default({
    fromMe: true,
    remote: t,
    id: e
  });
}
function f() {
  return (f = (0, i.default)(function* (e, t, n, r) {
    const i = p(e, t);
    const s = String(i);
    try {
      const e = yield (0, c.getMessageTable)().get(s);
      if ((e == null ? undefined : e.type) === u.MSG_TYPE.REACTION) {
        return;
      }
      const i = o.MessagePropertyType.cast(e == null ? undefined : e.messageRangeIndex.split("_")[1]);
      (0, c.getMessageTable)().merge(s, {
        messageRangeIndex: (0, o.craftMessageRangeIndex)(t.toString(), false, i === o.MessagePropertyType.SystemMessage, n),
        rcat: r
      });
    } catch (e) {
      __LOG__(4, true, new Error(), true)`processAckForOutgoingMessage: failed to update in storage`;
      SEND_LOGS("message processAckForOutgoingMessage failed");
      throw e;
    }
    (0, a.checkAndRemoveActiveMessageRanges)(i, n);
  })).apply(this, arguments);
}