var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAddOnsAsReadUiAction = function (e) {
  for (const [t, n] of e) {
    switch (t) {
      case i.MessageAddOnType.Reaction:
        s.ReactionsCollection.markReactionsAsRead(n);
        break;
      case i.MessageAddOnType.PollVote:
        for (const e of n) {
          const t = u.PollVoteCollection.getByMsgKey(e);
          if (t != null) {
            t.read = true;
          }
        }
        break;
      default:
        if (n != null && n.length > 0) {
          throw (0, d.default)(`Unsupported add-on type: ${String(t)}`);
        }
    }
  }
};
exports.useMarkAddOnsAsRead = function () {
  const e = (0, p.default)(() => new Map());
  const t = (0, f.useCallback)(() => {
    if (document.hasFocus() && e.current.size !== 0) {
      !function () {
        h.apply(this, arguments);
      }(e.current);
      e.current = new Map();
    }
  }, [e]);
  const n = (0, f.useCallback)(n => {
    let {
      addOnType: a,
      addOns: r
    } = n;
    let o = e.current.get(a);
    if (o == null) {
      o = [];
      e.current.set(a, o);
    }
    o.push(...r);
    t();
  }, [t, e]);
  (0, m.useListener)(window, "focus", t);
  return n;
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/385564.js"));
var l = require("../app/269773.js");
var i = require("../app/803328.js");
var u = require("../app/344400.js");
var s = require("../app/762897.js");
var c = require("../app/203146.js");
var d = a(require("../app/556869.js"));
var f = require("../vendor/667294.js");
var p = a(require("../app/637660.js"));
var m = require("../app/808446.js");
function h() {
  return (h = (0, r.default)(function* (e) {
    const t = (0, o.default)(Array.from(e.values()));
    if (t.length === 0) {
      return;
    }
    yield (0, c.sendAddOnReadReceipts)(t);
    const n = new Map();
    for (const [t, a] of e) {
      n.set(t, a.map(e => {
        let {
          msgKey: t
        } = e;
        return t;
      }));
    }
    yield (0, l.markAddOnsAsReadJob)(n);
  })).apply(this, arguments);
}