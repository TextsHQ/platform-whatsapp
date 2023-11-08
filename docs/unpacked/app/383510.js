var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChat = function (e, t) {
  if (e) {
    const n = e.getLastMsgKeyForAction();
    const r = n ? e.msgs.get(n) : undefined;
    e.deleteMsgsBeforeMsgInclusive(r, t);
  }
};
exports.sendClear = function (e, t) {
  return f((0, u.unproxy)(e), t);
};
var i = r(require("../vendor/348926.js"));
var a = require("./122583.js");
var o = require("./328620.js");
var s = require("./984330.js");
var l = require("./415019.js");
var u = require("./163139.js");
var c = require("./390737.js");
var d = require("../vendor/548360.js");
var p = r(require("../vendor/667294.js"));
function f(e, t) {
  const {
    promises: r
  } = e;
  if (r.sendClear) {
    return r.sendClear;
  }
  const u = e.getLastMsgKeyForAction();
  const _ = r.sendClear = (0, l.sendClear)(e, u, t);
  const g = new o.ActionType(d.fbt._("Clearing chat", null, {
    hk: "zx7dz"
  }));
  const m = _.then((0, i.default)(function* () {
    const t = require("./735618.js").ConversationEndOfHistoryTransferModelPropType;
    e.endOfHistoryTransferType = t.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
    return new o.ActionType(d.fbt._("Chat cleared", null, {
      hk: "BWQU9"
    }));
  })).catch((0, a.filteredCatch)(s.ServerStatusCodeError, e => {
    if (e.status >= 400) {
      return new o.ActionType(d.fbt._("Couldn't clear chat.", null, {
        hk: "4d8fwd"
      }));
    }
  })).catch(() => {
    __LOG__(3)`models:chat:sendClear dropped`;
    return new o.ActionType(d.fbt._("Couldn't clear chat.", null, {
      hk: "4d8fwd"
    }), {
      actionText: d.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => f(e, t)
    });
  });
  c.ToastManager.open(p.default.createElement(o.ActionToast, {
    initialAction: g,
    pendingAction: m
  }));
  return _.then(t => {
    if (t.result) {
      (function (e, t) {
        if (e && t) {
          e.deleteMessages(t);
        }
      })(e, t.result);
    }
  }).catch((0, a.filteredCatch)(s.ServerStatusCodeError, () => {})).finally(() => {
    r.sendClear = null;
  });
}