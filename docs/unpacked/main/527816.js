var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = function (e) {
  let {
    msg: t,
    options: n,
    checkedOptionLocalIds: a,
    trusted: i,
    isPollInvalid: u,
    onOptionToggle: s,
    onDetailImageClick: c
  } = e;
  const d = t.pollSelectableOptionsCount === 0 ? t.pollOptions.length : t.pollSelectableOptionsCount;
  return l.default.createElement(l.default.Fragment, null, Array.from(n.entries()).map((e, n) => {
    let [f, p] = e;
    const m = a.has(f.localId);
    const h = !u && (m || d === 1 || a.size < d);
    return l.default.createElement(o.OptionRow, {
      key: n,
      msg: t,
      option: f,
      result: p,
      index: n,
      onOptionToggle: s,
      onDetailImageClick: c,
      checked: m,
      selectable: h,
      links: (0, r.getPollOptionLinks)(t.unsafe(), f),
      trusted: i
    });
  }));
};
var r = require("../app/44118.js");
var o = require("./690135.js");
var l = a(require("../vendor/667294.js"));