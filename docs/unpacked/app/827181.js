var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkDevicePhoneNumberCodeCells = function (e) {
  const t = String(e.code).split("");
  const n = t.slice(0, 4);
  const r = t.slice(4);
  return o.default.createElement("div", {
    "aria-details": e["aria-details"]
  }, o.default.createElement(i.FlexRow, {
    align: "center",
    justify: "center",
    className: "light"
  }, n.map((e, t) => o.default.createElement(u, {
    key: `${t}:${e}`,
    content: e
  })), o.default.createElement("span", {
    className: (0, s.default)(l.hyphen, a.uiPadding.all3),
    "aria-hidden": "true"
  }, "-"), r.map((e, t) => o.default.createElement(u, {
    key: `${t + 4}:${e}`,
    content: e
  }))));
};
var i = require("./690495.js");
var a = require("./676345.js");
var o = r(require("../vendor/667294.js"));
var s = r(require("./156720.js"));
const l = {
  codeCellWrapper: {
    display: "p357zi0d",
    boxSizing: "cm280p3y",
    width: "rvmgzurb",
    backgroundColor: "ovutvysd",
    borderTop: "kab5304t",
    borderEnd: "pf11cqaa",
    borderBottom: "ptuh2wo7",
    borderStart: "cm7i9enn",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j"
  },
  codeCell: {
    textAlign: "qfejxiq4",
    fontWeight: "hnx8ox4h",
    fontSize: "ctdnaqea",
    fontVariantNumeric: "j6weg29j",
    color: "tviruh8d"
  },
  hyphen: {
    textAlign: "qfejxiq4",
    fontWeight: "hnx8ox4h",
    fontSize: "lymqd4c5",
    color: "tviruh8d"
  }
};
function u(e) {
  return o.default.createElement(i.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: [l.codeCellWrapper, a.uiMargin.horiz4, a.uiPadding.vert13]
  }, o.default.createElement("span", {
    className: (0, s.default)(l.codeCell)
  }, e.content));
}