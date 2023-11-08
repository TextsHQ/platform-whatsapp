var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinnedMessagesBannerBody = undefined;
var r = require("../app/122583.js");
var o = a(require("../app/110404.js"));
var l = require("../app/392125.js");
var i = a(require("./859297.js"));
var u = require("../app/305521.js");
var s = require("../app/690495.js");
var c = require("../app/675886.js");
var d = a(require("./353033.js"));
var f = require("../app/163755.js");
var p = a(require("../app/932325.js"));
var m = require("../app/61113.js");
var h = require("../app/787742.js");
var g = require("../app/435711.js");
var E = require("../app/21645.js");
var v = require("../app/722091.js");
var _ = require("../app/180519.js");
var y = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var C = a(require("../app/802145.js"));
var b = require("../app/808446.js");
var M = require("./871210.js");
exports.PinnedMessagesBannerBody = e => {
  var t;
  const {
    pinInChat: n
  } = e;
  const a = (0, C.default)(() => m.MsgCollection.hydrateOrGetMessages([n.parentMsgKey.toString()]).catch((0, r.filteredCatch)(l.CollectionSilentQueryError, e => {
    __LOG__(3)`Removing pin in chat with id '${n.id}': ${e.message}`;
    v.PinInChatCollection.remove(n.id);
    return [];
  })), [n]);
  if (a.loading) {
    return null;
  }
  if (a.error) {
    __LOG__(3)`Failed to hydrate pin in chat parent message with id '${n.parentMsgKey}': ${a.error.message}`;
    return null;
  }
  const o = (t = a.value) === null || t === undefined ? undefined : t[0];
  return o != null && y.default.createElement(T, {
    msg: o
  });
};
const S = {
  text: {
    fontSize: "f8jlpxt4"
  }
};
const T = e => {
  const {
    msg: t
  } = e;
  const [n, a, r, l, m, C] = (0, M.useMsgValues)(t.id, [f.getSenderObj, f.getDir, f.getRtl, h.getIsGroupMsg, h.getLatestEditMsgKey, h.getAck]);
  (0, b.useListener)(t, "change:msgKey", e => {
    let {
      oldKey: t
    } = e;
    v.PinInChatCollection.deleteByParentMessageKey(t);
  });
  const T = [];
  if (l) {
    T.push(y.default.createElement(_.TextSpan, {
      color: "accent",
      weight: "semibold",
      key: n.id.toString()
    }, y.default.createElement(E.ContactName, {
      contact: n,
      useShortName: true
    }), ": "));
  }
  if ((0, g.hasSymbol)(t.unsafe())) {
    T.push(y.default.createElement(i.default, {
      msg: t.unsafe(),
      key: "msg-symbol"
    }));
  }
  const w = (0, d.default)(t, {
    formatAsLastMsg: true,
    stripFormatting: false
  }).toString();
  T.push(y.default.createElement(u.EmojiText, {
    key: "text",
    xstyle: S.text,
    direction: a,
    text: (0, o.default)(w, true),
    dirMismatch: r !== p.default.isRTL(),
    ellipsify: true,
    inlineblock: true,
    formatters: (0, c.InlineMessage)({
      mentions: t.mentionMap(),
      groupMentions: t.groupMentionMap()
    })
  }));
  return y.default.createElement(s.FlexRow, null, T);
};