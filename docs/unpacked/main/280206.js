var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNewsletterAt = function () {
  return h.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/713105.js");
var l = require("../app/780549.js");
var i = require("../app/114850.js");
var u = require("../app/61113.js");
var s = require("../app/373070.js");
var c = a(require("../app/358533.js"));
var d = require("../app/727615.js");
var f = require("./856536.js");
var p = require("../app/570593.js");
var m = a(require("../vendor/667294.js"));
function h() {
  return (h = (0, r.default)(function* (e) {
    let {
      newsletterJid: t,
      serverId: n,
      chatEntryPoint: a,
      onMessageNotFound: r,
      onMessageDeleted: o
    } = e;
    const s = c.default.get(t);
    if (s == null) {
      return false;
    }
    const h = v(s, n);
    if (h != null) {
      return g({
        chat: s,
        msg: h,
        chatEntryPoint: a,
        onMessageDeleted: o
      });
    }
    let E = yield (0, d.getMessageByServerId)(n, t);
    if (E == null) {
      E = (yield (0, p.getNewsletterMessages)(t, 1, {
        after: n - 1
      })).msgs[0];
    }
    if (E == null) {
      const e = yield l.Cmd.openChatBottom(s, a);
      if (r == null) {
        i.ModalManager.open(m.default.createElement(f.NewsletterMessageNotFoundPopup, {
          chat: s
        }));
      } else {
        r();
      }
      return e;
    }
    return g({
      chat: s,
      msg: u.MsgCollection.gadd(E),
      chatEntryPoint: a,
      onMessageDeleted: o
    });
  })).apply(this, arguments);
}
function g() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, r.default)(function* (e) {
    let {
      chat: t,
      msg: n,
      chatEntryPoint: a,
      onMessageDeleted: r
    } = e;
    if (n.type === s.MSG_TYPE.REVOKED && r != null) {
      const e = yield l.Cmd.openChatBottom(t, a);
      r();
      return e;
    }
    return l.Cmd.openChatAt(t, (0, o.getSearchContext)(t, n), a);
  })).apply(this, arguments);
}
function v(e, t) {
  return e.getAllMsgs().find(e => e.serverId === t);
}