var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    displayAuthor: n,
    displayType: a,
    displayFooter: w = true,
    header: A,
    actions: P,
    hideMeta: O,
    minTextHeight: k
  } = e;
  const D = (0, v.isTrusted)(t.unsafe());
  const I = {
    selectable: D,
    dirMismatch: (0, d.getRtl)(t) !== f.default.isRTL(),
    direction: (0, d.getDir)(t),
    inferLinesDirection: true
  };
  const R = (0, d.getText)(t);
  const N = R ? M.default.createElement(m.default, {
    msg: t.unsafe(),
    "data-id": t.id,
    spacer: false
  }, M.default.createElement(u.ExpandableText, {
    text: R,
    textLimit: (0, g.getInitialPageSize)(t)
  }, e => {
    let {
      textLimit: n
    } = e;
    return M.default.createElement(i.EmojiText, (0, r.default)({}, I, {
      text: R,
      formatters: (0, c.Conversation)({
        links: (0, E.getLinksFromMsg)(t.unsafe(), n),
        phoneNumbers: (0, _.getPhoneNumbersFromMsg)(t.unsafe()),
        trusted: D,
        selectable: D,
        fromMe: t.id.fromMe
      }),
      textLimit: n,
      minTextHeight: k,
      inlineblock: k != null
    }));
  })) : null;
  const x = w && t.footer ? M.default.createElement(i.EmojiText, (0, r.default)({}, I, {
    text: t.footer,
    formatters: (0, c.Conversation)({
      links: (0, E.getFooterLinks)(t.unsafe()),
      phoneNumbers: (0, _.getFooterPhoneNumbersFromMsg)(t.unsafe()),
      selectable: D,
      trusted: D,
      fromMe: t.id.fromMe
    }),
    xstyle: [T.footer, b.uiMargin.top6]
  })) : null;
  const L = (P == null ? undefined : P.length) && a !== l.DISPLAY_TYPE.STARRED_MSGS ? M.default.createElement("div", {
    className: (0, S.default)(T.actionRow)
  }, M.default.createElement(p.BubbleActions, {
    direction: "vertical",
    items: P.map(e => {
      var t;
      return {
        label: e.label,
        onClick: (t = e.onClick) !== null && t !== undefined ? t : () => (0, C.default)(),
        disabled: e.disabled,
        Icon: e.Icon
      };
    })
  })) : null;
  const j = Boolean((0, o.getSuspiciousLabel)({
    msg: t.unsafe(),
    displayType: a
  }));
  const B = n !== false ? !(0, g.getIsSentByMe)(t) && (0, g.getIsGroupMsg)(t) : null;
  const F = (0, y.showForwarded)(t) || B || j;
  return M.default.createElement(s.FlexColumn, {
    align: "stretch",
    xstyle: T.bubble
  }, M.default.createElement(h.default, {
    msg: t,
    displayAuthor: n,
    hideMeta: O != null && O
  }, j ? M.default.createElement(o.SuspiciousLabel, {
    msg: t.unsafe()
  }) : null, M.default.createElement("div", {
    className: (0, S.default)([b.uiMargin.bottom10, F && b.uiMargin.top5])
  }, A, N, x)), L);
};
var r = a(require("../vendor/967154.js"));
var o = require("./751349.js");
var l = require("../app/356097.js");
var i = require("../app/305521.js");
var u = require("./999649.js");
var s = require("../app/690495.js");
var c = require("../app/675886.js");
var d = require("../app/163755.js");
var f = a(require("../app/932325.js"));
var p = require("./20493.js");
var m = a(require("./19805.js"));
var h = a(require("./398685.js"));
var g = require("../app/787742.js");
var E = require("../app/44118.js");
var v = require("../app/435711.js");
var _ = require("./527530.js");
var y = require("./192071.js");
var C = a(require("./655210.js"));
var b = require("../app/676345.js");
var M = a(require("../vendor/667294.js"));
var S = a(require("../app/156720.js"));
const T = {
  bubble: {
    width: "m3h9lho3",
    maxWidth: "laorhtua"
  },
  footer: {
    display: "f804f6gw",
    fontSize: "ovllcyds",
    lineHeight: "q6wg26sa",
    overflowWrap: "fd365im1",
    whiteSpace: "bbv8nyr4",
    color: "hp667wtd"
  },
  actionRow: {
    paddingBottom: "oq31bsqd",
    paddingStart: "e1yunedv",
    paddingEnd: "atp9n7ve",
    marginTop: "aliwjmjd"
  }
};