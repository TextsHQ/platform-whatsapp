var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGroupSubject = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return v((0, p.unproxy)(e), t);
};
var r = require("../app/122583.js");
var o = require("../app/328620.js");
var l = require("../app/984330.js");
var i = require("./771972.js");
var u = require("../app/992462.js");
var s = require("./892208.js");
var c = require("../app/862159.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
var f = require("../app/114850.js");
var p = require("../app/163139.js");
var m = require("../app/390737.js");
var h = require("../vendor/548360.js");
var g = a(require("../vendor/667294.js"));
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function v(e, t) {
  var n;
  var a;
  let p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, o.genId)();
  const E = t.trim();
  if (!E) {
    return Promise.reject(new d.ActionError());
  }
  if (((n = e.groupMetadata) === null || n === undefined ? undefined : n.groupType) !== c.GroupType.COMMUNITY && E === e.contact.name) {
    return Promise.reject(new d.ActionError());
  }
  const _ = (0, s.setGroupSubject)(e.id, E);
  const y = e.contact.name;
  let C;
  C = ((a = e.groupMetadata) === null || a === undefined ? undefined : a.groupType) === c.GroupType.COMMUNITY ? new o.ActionType(h.fbt._("Renaming community", null, {
    hk: "3Tm9Ej"
  })) : new o.ActionType(h.fbt._("Renaming group", null, {
    hk: "1CBnxN"
  }));
  const b = h.fbt._("Couldn't rename community", null, {
    hk: "iLkkw"
  });
  const M = _.then(() => {
    var t;
    if (((t = e.groupMetadata) === null || t === undefined ? undefined : t.groupType) === c.GroupType.COMMUNITY) {
      return new o.ActionType(h.fbt._("Community renamed to \"{community}\"", [h.fbt._param("community", E)], {
        hk: "1Agwpq"
      }));
    } else {
      return new o.ActionType(h.fbt._("Group renamed to {subject}", [h.fbt._param("subject", E)], {
        hk: "DQcOV"
      }), {
        actionText: h.fbt._("Undo", null, {
          hk: "4sCkfZ"
        }),
        actionHandler: () => v(e, y, p)
      });
    }
  }).catch((0, r.filteredCatch)(l.ServerStatusCodeError, t => {
    var n;
    if (((n = e.groupMetadata) === null || n === undefined ? undefined : n.groupType) === c.GroupType.COMMUNITY) {
      if (t.status === 530) {
        return void f.ModalManager.open(g.default.createElement(i.CommunitySubjectHalfSuccessErrorPopup, {
          parentChat: e
        }));
      }
      if (t.status >= 400) {
        return new o.ActionType(b);
      }
    }
    if (t.status >= 400) {
      return new o.ActionType(h.fbt._("Couldn't rename group.", null, {
        hk: "KFo8"
      }));
    }
  })).catch(() => {
    var t;
    __LOG__(3)`models:chat:setSubject dropped`;
    if (((t = e.groupMetadata) === null || t === undefined ? undefined : t.groupType) === c.GroupType.COMMUNITY) {
      return new o.ActionType(b);
    } else {
      return new o.ActionType(h.fbt._("Couldn't rename group.", null, {
        hk: "KFo8"
      }), {
        actionText: h.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => v(e, E, p)
      });
    }
  });
  m.ToastManager.open(g.default.createElement(o.ActionToast, {
    id: p,
    initialAction: C,
    pendingAction: M
  }));
  return _.then(() => {
    const t = {
      name: E
    };
    return (0, u.updateContactTable)(e.contact.id, t).then(() => {
      e.contact.set(t);
    });
  }).catch((0, r.filteredCatch)(l.ServerStatusCodeError, () => {}));
}