var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAssignedColor = function (e, t) {
  const n = (0, s.unproxy)(e);
  const r = n.colors || (n.colors = function (e) {
    const t = (0, s.unproxy)(e);
    if (t.groupMetadata) {
      t.listenTo(t.groupMetadata.participants, "remove reset", u);
    }
    return (0, l.getGroupParticipantAssignedColor)(t.id);
  }(n));
  let a;
  const c = (0, o.default)(t.toString());
  if (a = r[c]) {
    return a;
  }
  const d = {};
  (0, i.default)(r, (e, t) => {
    if (d[e]) {
      d[e].push(t);
    } else {
      d[e] = [t];
    }
  });
  let p = Number.POSITIVE_INFINITY;
  for (let e = 1; e <= 17; e++) {
    if (!d[e]) {
      a = e;
      break;
    }
    if (d[e].length < p) {
      p = d[e].length;
      a = e;
    }
  }
  r[c] = a;
  n.saveAssignedColorsDebounced();
  return a;
};
exports.saveAssignedColors = function (e) {
  const t = (0, s.unproxy)(e);
  const n = t.colors;
  if (n) {
    (0, l.setGroupParticipantAssignedColor)(t.id, n);
  }
};
var i = r(require("../vendor/402525.js"));
var a = r(require("../vendor/291966.js"));
var o = r(require("./983254.js"));
var s = require("./163139.js");
var l = require("./757453.js");
function u(e) {
  var t;
  var n;
  const r = (0, s.unproxy)(e);
  if (!r.colors) {
    return;
  }
  const i = (t = (n = r.groupMetadata) === null || n === undefined ? undefined : n.participants) !== null && t !== undefined ? t : [];
  const l = r.colors;
  const u = (0, a.default)(Object.keys(l), i.map(e => e.id.toString()).map(o.default));
  u.forEach(function (e) {
    delete l[e];
  });
  if (u.length) {
    r.saveAssignedColorsDebounced();
  }
}