var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggregateDeliveryReceipts = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./780549.js");
var s = require("./817690.js");
var l = require("./138082.js");
var u = require("./267420.js");
var c = require("./941322.js");
var d = require("./603635.js");
const p = require("../vendor/76672.js").Mirrored(["Message", "Reaction", "PollVote", "NotSupportedAddon"]);
function f(e) {
  const t = new Map();
  e.forEach(e => {
    var n;
    const r = (e => e.hasHideFailEnc ? (0, l.isPollVoteMsgMeta)(e.msgMeta) ? p.PollVote : (0, l.isReactionMsgMeta)(e.msgMeta) ? p.Reaction : p.NotSupportedAddon : p.Message)(e);
    const i = (n = t.get(r)) !== null && n !== undefined ? n : t.set(r, []).get(r);
    if (!(i == null)) {
      i.push(e);
    }
  });
  return t;
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t, n) {
    const r = e.map(e => {
      let {
        msgInfo: t
      } = e;
      return (0, u.messageInfoToKey)(t);
    });
    const i = o.Cmd.isMainStreamReadyMd ? yield t(r) : r.map(() => false);
    const a = new Set();
    const s = [];
    for (const [e, t] of i.entries()) {
      if (t) {
        a.add(r[e].toString());
      } else {
        s.push(r[e].toString());
      }
    }
    if (s.length === 0) {
      return a;
    }
    const l = yield n(s);
    return new Set([...a, ...l]);
  })).apply(this, arguments);
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e, t) {
    switch (e) {
      case p.Message:
        return _(t, e => (0, a.frontendSendAndReceive)("hasMsgsInCollection", {
          msgKeys: e
        }), function () {
          var e = (0, i.default)(function* (e) {
            const t = new Set();
            return (0, s.getMsgsExistByMsgKey)(e).then(n => {
              for (const [r, i] of n.entries()) {
                if (i) {
                  t.add(e[r]);
                }
              }
              return t;
            });
          });
          return function () {
            return e.apply(this, arguments);
          };
        }());
      case p.Reaction:
        return _(t, e => (0, a.frontendSendAndReceive)("hasReactionsInCollection", {
          msgKeys: e
        }), e => {
          const t = new Set();
          return (0, d.getReactionsTable)().anyOf(["msgKey"], e).then(e => {
            for (const n of e) {
              t.add(n.msgKey);
            }
            return t;
          });
        });
      case p.PollVote:
        return _(t, e => (0, a.frontendSendAndReceive)("hasPollVotesInCollection", {
          msgKeys: e
        }), e => (0, c.getTable)().anyOf(["msgKey"], e, {
          shouldDecrypt: false
        }).then(e => {
          const t = new Set();
          for (const n of e) {
            t.add(n.msgKey);
          }
          return t;
        }));
      case p.NotSupportedAddon:
        {
          const e = new Set();
          for (const {
            msgInfo: n
          } of t) {
            e.add((0, u.messageInfoToKey)(n).toString());
          }
          return e;
        }
    }
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    let [t, n] = e;
    const r = yield m(t, n);
    return n.map(e => ({
      isInDB: r.has((0, u.messageInfoToKey)(e.msgInfo).toString()),
      receipt: e
    }));
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    const t = f(e);
    const n = yield Promise.all(Array.from(t.entries()).map(y));
    return [].concat(...n);
  })).apply(this, arguments);
}