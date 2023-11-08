var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillMsgHistoryGaps = function () {
  return y.apply(this, arguments);
};
exports.identifyMsgGaps = h;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/189734.js"));
var o = r(require("../vendor/385564.js"));
var s = r(require("../vendor/498913.js"));
var l = require("./359987.js");
var u = require("./570057.js");
var c = require("./727615.js");
var d = require("./73225.js");
var p = require("./570593.js");
var f = require("./455245.js");
var _ = require("./787111.js");
var g = require("./251309.js");
var m = require("./263318.js");
function h(e) {
  const t = [];
  for (let n = 1; n < e.length; n++) {
    const {
      serverId: r
    } = e[n - 1];
    const {
      serverId: i
    } = e[n];
    if (i == null || r == null) {
      continue;
    }
    const a = i - r;
    if (a <= 1) {
      continue;
    }
    const o = (0, s.default)(a - 1, e => e + r + 1).filter(e => e >= _.EARLIEST_AVAILABLE_MESSAGE_ID);
    if (!(o.length <= 0)) {
      for (; o.length > 0;) {
        t.push(o.splice(0, (0, d.getMaxMsgCountFromServer)()));
      }
    }
  }
  return t;
}
function y() {
  return (y = (0, i.default)(function* (e, t, n) {
    if (t.length < 2 && n == null) {
      return t;
    }
    const r = t[0].serverId;
    const s = t[t.length - 1].serverId;
    if (r == null || s == null) {
      return [];
    }
    if (r >= c.TEMPORARY_SERVER_ID_LOWER_BOUND || s >= c.TEMPORARY_SERVER_ID_LOWER_BOUND) {
      return t;
    }
    if (s - r + 1 === t.length && n == null) {
      return t;
    }
    let d;
    if (n != null) {
      const {
        start: e,
        end: r
      } = n;
      const i = {
        serverId: Math.min(e, r) - 1
      };
      const a = {
        serverId: Math.max(e, r) + 1
      };
      d = h([i].concat(t).concat(a));
    } else {
      d = h(t);
    }
    if (d.length === 0) {
      return t;
    }
    const _ = d.map(function () {
      var t = (0, i.default)(function* (t) {
        (0, f.logHistoryGap)({
          gapSize: t.length,
          newsletterJidOrWid: e
        });
        const n = yield (0, p.getNewsletterMessages)((0, m.toNewsletterJidOrThrow)(String(e)), t.length, {
          after: t[0] - 1
        }).catch(() => null);
        if (n != null) {
          (0, l.frontendFireAndForget)("updateNewsletterMessages", n);
          yield (0, u.updateAddOnDbRecords)(n);
          return n.msgs;
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    const y = (0, o.default)(yield Promise.all(_)).filter(Boolean);
    (0, g.addNewsletterMsgsRecordsJob)(y).fireAndForget();
    return (0, a.default)(t.concat(y), "serverId");
  })).apply(this, arguments);
}