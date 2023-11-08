var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = function (e) {
  const {
    msg: t,
    searchQuery: n,
    onClick: a,
    filterPreset: y,
    testid: C
  } = e;
  const [b, M, S, T, w, A, P, O, k] = (0, v.useMsgValues)(e.msg.id, [f.getId, f.getIsSentByMe, f.getIsGroupMsg, f.getIsNotification, s.getSenderObj, s.getDir, s.getRtl, f.getType, f.getLabels]);
  const D = (0, E.useModelValues)(e.chat, ["id", "isUser", "contact", "formattedTitle", "groupMetadata", "isNewsletter"]);
  const [I, R] = (0, g.default)(e.active, b.toString());
  const N = (0, _.useHighlightedText)(n);
  const x = e => {
    if ((0, r.isFunction)(a)) {
      const t = d.MsgCollection.assertGet(b);
      const n = (0, i.getSearchContext)(D, t);
      n.msg = t;
      a(e, (0, m.unproxy)(D), n);
    }
  };
  const L = h.default.createElement(u.default, {
    msg: t
  });
  const j = h.default.createElement(l.default, {
    msg: t.safe(),
    msgType: "FTSMessage",
    searchQuery: N
  });
  return h.default.createElement(c.HotKeys, {
    handlers: {
      enter: x,
      space: x
    },
    onFocus: e => {
      e.stopPropagation();
      e.preventDefault();
    },
    ref: I
  }, h.default.createElement(o.default, {
    contextEnabled: () => false,
    theme: e.theme === "chat-checkbox" ? "cell-message-checkbox" : "cell-message",
    active: R,
    primary: h.default.createElement(p.Name, {
      chat: D,
      labels: k,
      firstLabel: y == null ? undefined : y.label,
      showLabel: true,
      titlify: true,
      ellipsify: true
    }),
    primaryDetail: L,
    secondary: j,
    onClick: x,
    testid: C
  }));
};
var r = require("../app/724976.js");
var o = a(require("./991370.js"));
var l = a(require("./333072.js"));
var i = require("../app/713105.js");
var u = a(require("./829087.js"));
var s = require("../app/163755.js");
var c = require("../app/81644.js");
var d = require("../app/61113.js");
var f = require("../app/787742.js");
var p = require("../app/21645.js");
var m = require("../app/163139.js");
var h = a(require("../vendor/667294.js"));
var g = a(require("../main-chunk/928361.js"));
var E = require("../app/655241.js");
var v = require("./871210.js");
var _ = require("./388364.js");