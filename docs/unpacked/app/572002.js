Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactComparator = undefined;
exports.getCollator = function () {
  return s;
};
var r = require("./817649.js");
var i = require("./780549.js");
var a = require("./660666.js");
var o = require("./256354.js");
let s;
function l(e) {
  if (e.name) {
    return e.name;
  } else if (e.verifiedLevel === r.VERIFIED_LEVEL.HIGH && e.verifiedName) {
    return e.verifiedName;
  } else {
    return undefined;
  }
}
u();
i.Cmd.on("set_collator", u);
function u() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : o.DEFAULT_LOCALE;
  if ((e = self.Intl) === null || e === undefined ? undefined : e.Collator) {
    const e = self.Intl.Collator([t], {
      sensitivity: "base"
    });
    s = {
      compare(t, n) {
        try {
          return e.compare(t, n);
        } catch (e) {
          return 0;
        }
      }
    };
  } else {
    s = {
      compare: (e, t) => e.localeCompare(t)
    };
  }
}
exports.ContactComparator = (e, t) => {
  var n;
  var r;
  var i;
  var o;
  var u;
  var c;
  const d = (n = l(e)) !== null && n !== undefined ? n : "";
  const p = (r = l(t)) !== null && r !== undefined ? r : "";
  const f = (i = (0, a.getHeader)(e)) !== null && i !== undefined ? i : "";
  const _ = (o = (0, a.getHeader)(t)) !== null && o !== undefined ? o : "";
  const g = (u = (0, a.getNotifyName)(e)) !== null && u !== undefined ? u : "";
  const m = (c = (0, a.getNotifyName)(t)) !== null && c !== undefined ? c : "";
  const h = e.id.toString();
  const y = t.id.toString();
  if (!d && p) {
    return 1;
  }
  if (d && !p) {
    return -1;
  }
  if (d && p && f && _) {
    const e = s.compare(f, _);
    if (e === 0) {
      return s.compare(d, p);
    } else {
      return e;
    }
  }
  if (!g && m) {
    return 1;
  } else if (g && !m) {
    return -1;
  } else if (g && m) {
    return s.compare(g, m);
  } else if (h && y) {
    return h.localeCompare(y);
  } else {
    return -1;
  }
};