var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGroupNotificationV2 = function () {
  return E.apply(this, arguments);
};
exports.isGroupNotificationOptimizationEligible = function (e, t) {
  return S(e, t) != null;
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./716358.js");
var s = require("./359987.js");
var l = require("./780549.js");
var u = require("./355813.js");
var c = require("./800321.js");
var d = require("./297031.js");
var p = require("./614198.js");
var f = require("./111070.js");
var _ = require("./412985.js");
var g = require("./700846.js");
var m = require("./439446.js");
var h = require("./193970.js");
function y(e) {
  return (0, o.wap)("ack", {
    to: (0, u.GROUP_JID)(e.chatId),
    id: (0, o.CUSTOM_STRING)(e.externalId),
    class: "notification",
    type: "w:gp2",
    participant: e.author ? (0, u.USER_JID)(e.author) : o.DROP_ATTR
  });
}
function E() {
  return (E = (0, a.default)(function* (e, t) {
    const n = S(e, t);
    if (n == null) {
      __LOG__(3)`no handler for group notification ${e.chatId.toLogString()}`;
      return y(e);
    } else {
      yield Promise.all([n.writeSystemMessages(), n.writeGroupInfoUpdates()]);
      return y(e);
    }
  })).apply(this, arguments);
}
function S(e, t) {
  const n = [];
  for (const t of e.actions) {
    const r = o(e, t);
    if (r == null) {
      return null;
    }
    n.push(r);
  }
  return {
    writeSystemMessages: (i = (0, a.default)(function* () {
      yield Promise.all(n.map(e => e.writeSystemMessages()));
    }), function () {
      return i.apply(this, arguments);
    }),
    writeGroupInfoUpdates: (r = (0, a.default)(function* () {
      yield Promise.all(n.map(e => e.writeGroupInfoUpdates()));
    }), function () {
      return r.apply(this, arguments);
    })
  };
  var r;
  var i;
  function o(e, n) {
    if (n.actionType === f.GROUP_NOTIFICATION_TAG.CREATE) {
      return null;
    } else {
      return {
        writeGroupInfoUpdates: (i = (0, a.default)(function* () {
          if (n.actionType !== f.GROUP_NOTIFICATION_TAG.ADD && n.actionType !== f.GROUP_NOTIFICATION_TAG.REMOVE || !(yield (0, m.shouldTriggerQueryGroupInfo)(e.chatId, n))) {
            yield (0, h.updateDBForGroupAction)(e, n, t);
            (0, s.frontendSendAndReceive)("updateModelForGroupAction", {
              groupMeta: e,
              groupAction: n
            });
          } else {
            (0, d.markGroupParticipantStaleJob)(e.chatId);
          }
        }), function () {
          return i.apply(this, arguments);
        }),
        writeSystemMessages: (r = (0, a.default)(function* () {
          return function (e, t, n, r) {
            let i = () => {};
            const o = new Promise(e => i = e);
            (0, _.handleMessage)(e.toString(), n, (0, a.default)(function* () {
              if (yield r()) {
                return void i();
              }
              const e = u(t).then(() => {
                i();
              });
              if (n) {
                return Promise.resolve();
              } else {
                return e;
              }
            }));
            return o;
            function u() {
              return d.apply(this, arguments);
            }
            function d() {
              return (d = (0, a.default)(function* (e) {
                if (e.length !== 0) {
                  if (n) {
                    if (l.Cmd.isMainStreamReadyMd) {
                      e.forEach(e => {
                        (0, s.frontendFireAndForget)("updateMessageUI", {
                          chatId: e.id.remote,
                          msg: e
                        });
                      });
                    }
                    return (0, c.getMessageCache)().addMessages(e.map(e => ({
                      msg: e
                    })), false);
                  } else {
                    return void (yield Promise.all(e.map(e => (0, g.handleSingleMsg)(e.from, e))));
                  }
                }
              })).apply(this, arguments);
            }
          }(e.chatId, yield function () {
            return v.apply(this, arguments);
          }(e, n), t, () => (0, f.shouldSkipGenMsg)(e, n));
        }), function () {
          return r.apply(this, arguments);
        })
      };
    }
    var r;
    var i;
  }
}
function v() {
  return (v = (0, a.default)(function* (e, t) {
    let n = [];
    if ((t.actionType === f.GROUP_NOTIFICATION_TAG.ADD || t.actionType === f.GROUP_NOTIFICATION_TAG.REMOVE) && (yield (0, m.shouldTriggerQueryGroupInfo)(e.chatId, t))) {
      return [];
    }
    if (t.actionType === f.GROUP_NOTIFICATION_TAG.ADD) {
      const r = (yield (0, f.notAlreadyInGroup)(e.chatId, t.participants)).filter(e => {
        let {
          id: t
        } = e;
        return !t.isLid();
      });
      if (r.length > 0) {
        n = [yield (0, p.genGroupNotificationMsg)(e, (0, i.default)((0, i.default)({}, t), {}, {
          participants: r
        }))];
      }
    } else if (t.actionType !== f.GROUP_NOTIFICATION_TAG.CREATE) {
      n = [yield (0, p.genGroupNotificationMsg)(e, t)];
    }
    return n;
  })).apply(this, arguments);
}