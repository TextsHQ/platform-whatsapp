var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionMetadataRow = function (e) {
  let {
    name: t,
    isCurrentLeader: n,
    percentage: a,
    voteCount: l,
    links: u,
    isPollFromMe: g
  } = e;
  const {
    pollDetailsOptionTextSize: E,
    pollDetailsTagTextSize: v
  } = (0, d.useElectronCompatibleStyles)();
  const _ = (0, o.Conversation)({
    links: u != null ? u : [],
    phoneNumbers: [],
    selectable: true,
    trusted: true,
    fromMe: g
  });
  return s.default.createElement("div", {
    className: (0, c.default)(f, i.uiPadding.vert20, i.uiPadding.horiz30)
  }, s.default.createElement(r.EmojiText, {
    text: t,
    selectable: true,
    formatters: _,
    className: (0, c.default)(p, i.uiMargin.end6, E)
  }), s.default.createElement("span", {
    className: (0, c.default)(m, i.uiMargin.startAuto)
  }, s.default.createElement(h, {
    count: l,
    isCurrentLeader: n,
    fontSizeXStyle: v
  })));
};
var r = require("../app/305521.js");
var o = require("../app/675886.js");
var l = require("./533426.js");
var i = require("../app/676345.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));
var c = a(require("../app/156720.js"));
var d = require("../app/140455.js");
const f = {
  display: "p357zi0d"
};
const p = {
  fontWeight: "m1e7cby3",
  fontSize: "enbbiyaj",
  lineHeight: "q6wg26sa",
  wordBreak: "cw3vfol9"
};
const m = {
  minWidth: "h3jhcnxg"
};
function h(e) {
  let {
    count: t,
    isCurrentLeader: n,
    fontSizeXStyle: a
  } = e;
  const [r, o] = n ? [l.TagTheme.Primary, "star"] : [l.TagTheme.Secondary, null];
  return s.default.createElement(l.Tag, {
    theme: r,
    icon: o
  }, s.default.createElement("span", {
    className: (0, c.default)(a)
  }, u.fbt._({
    "*": "{vote} votes",
    _1: "1 vote"
  }, [u.fbt._plural(t, "vote")], {
    hk: "26V0Gq"
  })));
}