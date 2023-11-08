var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NuxPrefsEvent = undefined;
exports.getNUX = d;
exports.getNuxMaxViews = g;
exports.getNuxSyncList = f;
exports.nuxExistsInNuxSync = _;
exports.removeAllNuxSync = function () {
  l.default.set(s.KEYS.NUX_LIST, []);
};
exports.removeNUX = p;
exports.resetNux = function (e) {
  p(e);
  const t = f().filter(t => t !== e);
  l.default.set(s.KEYS.NUX_LIST, t);
};
exports.setNUX = function (e, t) {
  l.default.setUser(e, t);
  c.handleNuxChange(e);
};
exports.shouldShowNUX = function (e) {
  const t = (0, o.getNuxSyncKey)(e);
  if (t != null && _(t)) {
    return false;
  }
  const n = d(e);
  if (!n) {
    return true;
  }
  return n.views < g(e);
};
exports.updateNuxSyncList = function (e) {
  const t = new Set(f());
  e.forEach(e => {
    let {
      nuxKey: n,
      acknowledged: r
    } = e;
    if (r) {
      t.add(n);
    } else {
      t.delete(n);
    }
  });
  l.default.set(s.KEYS.NUX_LIST, Array.from(t));
};
var i = require("./72696.js");
var a = r(require("./395654.js"));
var o = require("./95589.js");
var s = require("./94872.js");
var l = r(require("./53575.js"));
class u extends a.default {
  handleNuxChange(e) {
    this.trigger(e);
  }
}
const c = new u();
function d(e) {
  const t = l.default.getUser(e);
  if (t == null || typeof t != "object") {
    return null;
  }
  const n = t.views;
  if (typeof n == "number") {
    return {
      views: n
    };
  } else {
    return null;
  }
}
function p(e) {
  l.default.setUser(e);
  c.handleNuxChange(e);
}
function f() {
  const e = l.default.get(s.KEYS.NUX_LIST);
  if (e instanceof Array) {
    return e.filter(e => typeof e == "string");
  } else {
    return [];
  }
}
function _(e) {
  return f().includes(e);
}
function g(e) {
  switch (e) {
    case "desktop_upsell":
      return Number.POSITIVE_INFINITY;
    case "chat_assignment":
      return (0, i.chatAssignmentMaxNuxImpressions)();
    case "status_quick_replies":
      return 3;
    default:
      return 1;
  }
}
exports.NuxPrefsEvent = c;