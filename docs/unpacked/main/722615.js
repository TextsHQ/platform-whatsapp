var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setArchive = function (e, t, n) {
  return m((0, s.unproxy)(e), t, n);
};
var o = require("../app/898817.js");
var l = require("../app/328620.js");
var i = require("./939851.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/288057.js"));
var s = require("../app/163139.js");
var c = require("../app/390737.js");
var d = require("../vendor/548360.js");
var f = r(require("../vendor/667294.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function m(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, l.genId)();
  if (e.archive === t) {
    return Promise.reject(new u.ActionError());
  }
  const {
    promises: s
  } = e;
  if (s.setArchive) {
    return s.setArchive.promise;
  }
  const p = e.getLastMsgKeyForAction();
  const h = new a();
  const g = h.signal;
  const E = (0, i.sendConversationArchive)(e.id, t, p);
  const v = t ? new l.ActionType(d.fbt._("Archiving chat", null, {
    hk: "Deng"
  })) : new l.ActionType(d.fbt._("Unarchiving chat", null, {
    hk: "3cVkC"
  }));
  const _ = E.then(a => {
    if (g.aborted) {
      throw new o.AbortError();
    }
    let i;
    if (a.status === 200) {
      i = t ? d.fbt._("Chat archived", null, {
        hk: "1HPwsf"
      }) : d.fbt._("Chat unarchived", null, {
        hk: "3F3Bbk"
      });
      return new l.ActionType(i, {
        actionText: d.fbt._("Undo", null, {
          hk: "4sCkfZ"
        }),
        actionHandler: () => m(e, !t, n, r)
      });
    } else if (a.status >= 400) {
      if (t) {
        return new l.ActionType(d.fbt._("Couldn't archive chat.", null, {
          hk: "4FDZhj"
        }));
      } else {
        return new l.ActionType(d.fbt._("Couldn't unarchive chat.", null, {
          hk: "jdGLO"
        }));
      }
    } else {
      return undefined;
    }
  }).catch((0, o.catchAbort)(() => {})).catch(() => {
    __LOG__(3)`models:chat:setArchive dropped`;
    const a = t ? d.fbt._("Couldn't archive chat.", null, {
      hk: "4FDZhj"
    }) : d.fbt._("Couldn't unarchive chat.", null, {
      hk: "jdGLO"
    });
    return new l.ActionType(a, {
      actionText: d.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => m(e, t, n, r)
    });
  });
  if (n) {
    c.ToastManager.open(f.default.createElement(l.ActionToast, {
      id: r,
      initialAction: v,
      pendingAction: _
    }));
  }
  const y = E.then(n => {
    if (n.status === 200) {
      e.archive = t;
      if (t) {
        e.pin = undefined;
      }
    }
  }).finally(() => {
    s.setArchive = null;
  });
  s.setArchive = {
    promise: y,
    abortController: h
  };
  s.setArchive.archive = t;
  return y;
}