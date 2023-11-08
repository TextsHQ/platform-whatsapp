var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardKey = f;
exports.KeyboardKeyGroup = p;
exports.KeyboardShortcut = function (e) {
  let {
    action: t,
    addModifiers: n = true
  } = e;
  const a = (0, i.getShortcutKey)(t);
  if (!a) {
    return null;
  }
  const r = m(a);
  let o;
  o = r.indexOf(c) === -1 ? u.default.createElement(f, {
    value: r
  }) : u.default.createElement(u.default.Fragment, null, u.default.createElement(f, {
    value: "Shift"
  }), u.default.createElement(f, {
    value: r.substr(c.length)
  }));
  const l = n ? function (e) {
    const t = (0, i.getShortcutModifiers)(e);
    if (!t) {
      return [];
    }
    return t.map(e => u.default.createElement(f, {
      key: e,
      value: e
    }));
  }(t) : null;
  return u.default.createElement(p, null, l, o);
};
exports.expandRawShortcut = m;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/690495.js");
var i = require("./848636.js");
var u = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const s = ["children"];
const c = "Shift+";
const d = {
  key: {
    backgroundColor: "cz734vjn",
    borderTopWidth: "gofg5ll1",
    borderEndWidth: "p7waza29",
    borderBottomWidth: "oteuebma",
    borderStartWidth: "mzoqfcbu",
    borderTopStyle: "d1poss59",
    borderEndStyle: "gyj32ejw",
    borderBottomStyle: "cmcp1to6",
    borderStartStyle: "eg0col54",
    borderTopColor: "qm21ikbd",
    borderEndColor: "th99i4r8",
    borderBottomColor: "c7iyuhz8",
    borderStartColor: "tmno2afv",
    borderTopStartRadius: "l147y7tb",
    borderTopEndRadius: "mjscftrx",
    borderBottomEndRadius: "fqwk616h",
    borderBottomStartRadius: "pkud3j3x",
    boxShadow: "g289s7m3",
    color: "tl2vja3b",
    fontSize: "dsh4tgtl"
  }
};
function f(e) {
  let {
    value: t
  } = e;
  return u.default.createElement(l.FlexItem, {
    inline: true,
    xstyle: d.key,
    padding: [4, 8]
  }, t);
}
function p(e) {
  let {
    children: t
  } = e;
  let n = (0, o.default)(e, s);
  return u.default.createElement(l.FlexRow, (0, r.default)({
    inline: true,
    align: "center",
    gap: 4
  }, n), t);
}
function m(e) {
  if (e.length !== 1) {
    return e;
  }
  switch (e) {
    case ">":
      return "Shift+.";
    case "<":
      return "Shift+,";
  }
  if (e.toLowerCase() !== e) {
    return `Shift+${e}`;
  } else {
    return e.toUpperCase();
  }
}