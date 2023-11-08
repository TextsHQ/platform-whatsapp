var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotSuggestions = function (e) {
  var t;
  var n;
  let {
    id: a,
    onPromptSelect: c
  } = e;
  const d = (0, l.useBusinessProfile)(a, ["prompts"]);
  const p = (t = (n = r.BotProfileCollection.get(a)) === null || n === undefined ? undefined : n.prompts) !== null && t !== undefined ? t : d == null ? undefined : d.prompts;
  if (p == null || p.length === 0) {
    return null;
  }
  return i.default.createElement("div", {
    className: (0, u.default)(s, o.uiPadding.vert8, o.uiPadding.horiz20)
  }, p.map(e => i.default.createElement(f, {
    key: e.text,
    prompt: e,
    onClick: () => {
      c(e.text);
    }
  })));
};
var r = require("../app/169437.js");
var o = require("../app/676345.js");
var l = require("./508228.js");
var i = a(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
const s = {
  display: "p357zi0d",
  position: "lhggkp7q",
  bottom: "g299qdq3",
  maxHeight: "egah4qg0",
  overflowX: "ormcsqwh",
  whiteSpace: "le5p0ye3",
  width: "b1qcobdr"
};
const c = {
  fontSize: "f8jlpxt4",
  lineHeight: "erpdyial",
  borderTopStartRadius: "ajyz1gl2",
  borderTopEndRadius: "y4d21rkf",
  borderBottomEndRadius: "aznl1635",
  borderBottomStartRadius: "n3l3zu01",
  fontWeight: "hnx8ox4h",
  backgroundColor: "dk07x2gv",
  cursor: "ajgl1lbb"
};
const d = {
  display: "l7jjieqr"
};
function f(e) {
  let {
    prompt: t,
    onClick: n
  } = e;
  return i.default.createElement("div", {
    onClick: n,
    className: (0, u.default)(c, o.uiPadding.vert8, o.uiPadding.start12, o.uiPadding.end16, o.uiMargin.horiz4)
  }, i.default.createElement("span", {
    className: (0, u.default)(d, o.uiMargin.end4)
  }, t.emoji), i.default.createElement("span", null, t.text));
}