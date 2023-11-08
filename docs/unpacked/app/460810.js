var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processReplyMsgs = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("../vendor/618446.js"));
var s = r(require("../vendor/791747.js"));
var l = r(require("../vendor/535937.js"));
var u = r(require("./670983.js"));
var c = require("./907539.js");
var d = require("./817690.js");
var p = require("./862159.js");
var f = require("./483460.js");
var _ = require("./591988.js");
var g = require("./732011.js");
var m = require("./787742.js");
var h = r(require("./565754.js"));
var y = require("./459857.js");
function E() {
  return (E = (0, a.default)(function* (e) {
    if (!(0, f.processReplyMessagesEnabled)() || !e.length) {
      return;
    }
    const t = yield (0, g.getStorage)().lock(["message"], function () {
      var t = (0, a.default)(function* (t) {
        let [n] = t;
        const r = new Set();
        e.forEach(e => {
          r.add(S(e).toString());
        });
        const a = (yield (0, d.getMsgsByMsgKey)(Array.from(r.values()))).filter(e => {
          const t = (0, _.getMsgEditType)(e.type);
          if (!t) {
            return false;
          }
          switch (t) {
            case _.MsgEditType.TextEdit:
              return (0, f.receiveTextEditEnabled)();
            case _.MsgEditType.CaptionEdit:
              return (0, f.receiveCaptionEditEnabled)();
          }
        });
        const o = new Map(a.map(e => [e.id.toString(), e]));
        const s = e.filter(e => o.has(S(e).toString()));
        if (!s.length) {
          return;
        }
        const l = [];
        s.forEach(e => {
          const t = (0, u.default)(o.get(S(e).toString()), "quotedMsgsByKey.get(createQuotedMsgKey(msg).toString())");
          if (T((0, u.default)(e.quotedMsg, "msg.quotedMsg"), t)) {
            l.push((0, i.default)((0, i.default)({}, e), {}, {
              quotedMsg: t
            }));
          }
        });
        if (l.length) {
          yield n.bulkCreateOrMerge(l.map(c.dbRowFromMessage));
          return l;
        } else {
          return undefined;
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    if (t == null ? undefined : t.length) {
      t.forEach(t => {
        (0, u.default)(e.find(e => e.id.equals(t.id)), "replyMsgs.find(m => m.id.equals(updatedMsg.id))").quotedMsg = t.quotedMsg;
      });
    }
  })).apply(this, arguments);
}
function S(e) {
  var t;
  var n;
  const r = (t = e.quotedParticipant) !== null && t !== undefined ? t : undefined;
  const i = (n = e.quotedRemoteJid) !== null && n !== undefined ? n : e.id.remote;
  return new h.default({
    id: (0, u.default)(e.quotedStanzaID, "msg.quotedStanzaID"),
    fromMe: (0, y.isMeAccount)(r),
    remote: i,
    participant: (0, m.getIsGroupMsg)(e) || (r == null ? undefined : r.isBot()) ? r : undefined
  });
}
const v = {
  inviteGrpType: p.GroupType.DEFAULT,
  thumbnail: "",
  body: "",
  caption: "",
  interactiveAnnotations: [],
  scanLengths: [],
  staticUrl: "",
  pageCount: 0
};
function T(e, t) {
  const n = (0, l.default)(e, e => e != null);
  const r = (0, l.default)(t, (e, t) => n.hasOwnProperty(t));
  (0, s.default)(n, v);
  (0, s.default)(r, v);
  return !(0, o.default)(n, r);
}