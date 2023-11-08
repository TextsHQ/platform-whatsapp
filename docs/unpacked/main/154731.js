var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  const [a, p] = (0, u.useState)([]);
  const [m, h] = (0, u.useState)([]);
  const [g, E] = (0, u.useState)(0);
  const v = (0, d.default)(t);
  const _ = (0, f.default)();
  const y = (0, u.useRef)(true);
  const C = (0, c.default)(n);
  const b = (0, u.useCallback)(e => {
    const t = (0, i.getReactionEmojisAndSum)(e);
    h(t.reactionArrayEmojis);
    E(t.numberOfSenderReactions);
  }, []);
  const M = e == null ? undefined : e.join("-");
  (0, u.useEffect)(() => {
    (0, r.default)(function* () {
      if (!e) {
        return;
      }
      const t = [];
      if (!(0, o.isFlattenedReactionsEnabled)()) {
        const n = e.map(e => l.ReactionsCollection.find(e).then(e => {
          if (e != null) {
            t.push(e);
          }
        }).catch(e => {
          __LOG__(3)`Could not get reactions for message: ${e}`;
        }));
        yield Promise.all(n);
        if (_.aborted) {
          return;
        }
        p(t);
        const a = C == null && !t.some(e => e.reactions.length > 0);
        if (!(C === false || a)) {
          b(t);
          v(t);
        }
      }
    })();
  }, [M, b, n]);
  (0, s.useListeners)(a.map(e => {
    let {
      reactions: t
    } = e;
    return {
      source: t,
      eventOrEvents: "add reset change:senders",
      callback: () => {
        y.current = false;
        b(a);
        v(a);
      }
    };
  }));
  (0, s.useListeners)(a.map(e => {
    let {
      reactions: t
    } = e;
    return {
      source: t,
      eventOrEvents: "remove",
      callback: () => {
        b(a);
        if (n === undefined) {
          v(a);
        }
      }
    };
  }));
  return {
    reactionArrayEmojis: m,
    numberOfSenderReactions: g,
    reactionsModels: a,
    isFirstData: y.current
  };
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/702206.js");
var l = require("../app/762897.js");
var i = require("./474474.js");
var u = require("../vendor/667294.js");
var s = require("../app/808446.js");
var c = a(require("../app/49710.js"));
var d = a(require("../app/17533.js"));
var f = a(require("../app/895851.js"));