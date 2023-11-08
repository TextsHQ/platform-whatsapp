var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = r.ContactCollection.gadd(e.contactId);
  const [n, a, m, _] = (0, E.useContactValues)(t.id, [s.getTextStatusString, s.getTextStatusEmoji, s.getTextStatusLastUpdateTime, s.getTextStatusExpiryTs]);
  const y = (0, f.shouldDisplayTextStatus)(n, a, m, _);
  const C = m === f.TEXT_STATUS_NOT_FETCHED ? v : (() => {
    if (!y) {
      return h.default.createElement(h.default.Fragment, null);
    }
    let e;
    if (a != null) {
      const t = o.EmojiUtil.normalizeEmojiFromString(a);
      if (t != null) {
        e = h.default.createElement("div", {
          className: (0, g.default)(p.uiPadding.end5)
        }, h.default.createElement(l.default, {
          key: "low-res",
          emoji: t,
          size: "small"
        }));
      }
    }
    return h.default.createElement(u.FlexRow, {
      align: "center"
    }, e, h.default.createElement(i.EmojiText, {
      direction: "auto",
      selectable: true,
      ellipsify: true,
      titlify: true,
      text: n != null ? n : "",
      breakWord: true
    }));
  })();
  return h.default.createElement(c.default, {
    id: e.contactId,
    onComplex: () => {
      if (m === f.TEXT_STATUS_NOT_FETCHED) {
        (0, d.getTextStatus)(e.contactId, m);
      }
      return C;
    },
    waitIdle: e.waitIdle
  }, C);
};
var r = require("../app/177938.js");
var o = require("../app/70354.js");
var l = a(require("../app/225148.js"));
var i = require("../app/305521.js");
var u = require("../app/690495.js");
var s = require("../app/714574.js");
var c = a(require("../app/373347.js"));
var d = require("./608652.js");
var f = require("../app/596328.js");
var p = require("../app/676345.js");
var m = require("../vendor/548360.js");
var h = a(require("../vendor/667294.js"));
var g = a(require("../app/156720.js"));
var E = require("../app/379811.js");
const v = h.default.createElement("span", {
  className: (0, g.default)({
    display: "f804f6gw",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    color: "hp667wtd",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  })
}, m.fbt._("", null, {
  hk: "2dKN6V"
}));