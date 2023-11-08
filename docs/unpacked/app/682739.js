var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unstarAllMessages = function (e, t) {
  return f(e, t ? (0, u.unproxy)(t) : t);
};
var i = require("./122583.js");
var a = require("./328620.js");
var o = require("./984330.js");
var s = require("./502746.js");
var l = require("./802703.js");
var u = require("./163139.js");
var c = require("./390737.js");
var d = require("../vendor/548360.js");
var p = r(require("../vendor/667294.js"));
function f(e, t) {
  const r = require("./351053.js").ChatCollection;
  const u = t ? t.promises : r.promises;
  const _ = t ? t.id : undefined;
  if (u.sendUnstarAll) {
    return u.sendUnstarAll;
  }
  const g = u.sendUnstarAll = (0, s.sendUnstarAll)(e, _);
  const m = new a.ActionType(d.fbt._("Unstarring all messages", null, {
    hk: "FQDe4"
  }));
  const h = g.then(() => new a.ActionType(d.fbt._("All messages unstarred", null, {
    hk: "3GMl6f"
  }))).catch((0, i.filteredCatch)(o.ServerStatusCodeError, e => {
    if (e.statusCode >= 400) {
      return new a.ActionType(d.fbt._("Couldn't unstar all messages", null, {
        hk: "C209a"
      }));
    }
  })).catch(() => {
    __LOG__(3)`models:chat:sendUnstarAll dropped`;
    return new a.ActionType(d.fbt._("Couldn't unstar all messages", null, {
      hk: "C209a"
    }), {
      actionText: d.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => f(e, t)
    });
  });
  c.ToastManager.open(p.default.createElement(a.ActionToast, {
    initialAction: m,
    pendingAction: h
  }));
  return g.then(() => {
    e.forEach(e => {
      e.set("star", false);
    });
    if (t) {
      (0, l.removeStarredMsgs)(e);
    } else {
      l.AllStarredMsgsCollection.reset();
      r.forEach(e => {
        if (e.starredMsgs) {
          e.starredMsgs.reset();
        }
      });
    }
  }).finally(() => {
    u.sendUnstarAll = null;
  });
}