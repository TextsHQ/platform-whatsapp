var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, u.getNonCriticalNotificationPriority)(Boolean(e.attrs.offline));
  return (0, y.createNonPersistedJob)("handleContactNotification", e => function () {
    return x.apply(this, arguments);
  }(e.node), {
    priority: t
  }).waitUntilCompleted({
    node: e
  });
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = r(require("./670983.js"));
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./973776.js");
var c = require("./351053.js");
var d = require("./177938.js");
var p = require("./660666.js");
var f = require("./748050.js");
var _ = require("./380900.js");
var g = require("./854379.js");
var m = require("./700846.js");
var h = r(require("./565754.js"));
var y = require("./899137.js");
var E = require("./434989.js");
var S = require("./476314.js");
var v = require("./150501.js");
var T = require("./61229.js");
var M = require("./476473.js");
var A = require("./870791.js");
var b = require("./491805.js");
var C = require("./487837.js");
var P = require("./557883.js");
var O = require("./459857.js");
var I = require("./669050.js");
var R = r(require("./556869.js"));
const N = new l.WapParser("incomingContactsNotification", e => {
  e.assertTag("notification");
  const t = e.attrString("id");
  const n = {
    from: e.attrWapJid("from"),
    ts: e.attrTime("t"),
    rawTs: e.attrString("t"),
    stanzaId: t
  };
  if (e.hasChild("update")) {
    const t = e.child("update");
    if (t.hasAttr("jid")) {
      return (0, a.default)({
        type: "update",
        jid: (0, g.userJidToUserWid)(t.attrUserJid("jid"))
      }, n);
    }
    if (t.hasAttr("hash")) {
      const e = d.ContactCollection.findFirst(e => {
        var n;
        return ((n = (0, p.getUserhash)(e)) === null || n === undefined ? undefined : n.slice(0, 4)) === t.attrString("hash");
      });
      if (e == null) {
        return (0, a.default)({
          type: "empty",
          jid: null
        }, n);
      } else {
        return (0, a.default)({
          type: "update",
          jid: e.id
        }, n);
      }
    }
    return (0, a.default)({
      type: "empty",
      jid: null
    }, n);
  }
  if (e.hasChild("add")) {
    const t = e.child("add");
    return (0, a.default)({
      type: "add",
      hash: t.hasContent() ? t.contentBytes() : null,
      jid: null
    }, n);
  }
  if (e.hasChild("remove")) {
    const t = e.child("remove");
    return (0, a.default)({
      type: "remove",
      jid: (0, g.userJidToUserWid)(t.attrUserJid("jid"))
    }, n);
  }
  if (e.hasChild("modify")) {
    const t = e.child("modify");
    return (0, a.default)({
      type: "modify",
      jid: (0, g.userJidToUserWid)(t.attrUserJid("new")),
      oldJid: (0, g.userJidToUserWid)(t.attrUserJid("old")),
      lid: t.maybeAttrUserJid("new_lid") ? (0, g.userJidToUserWid)(t.attrUserJid("new_lid")) : null,
      oldLid: t.maybeAttrUserJid("old_lid") ? (0, g.userJidToUserWid)(t.attrUserJid("old_lid")) : null
    }, n);
  }
  if (e.hasChild("sync")) {
    const t = e.child("sync");
    return (0, a.default)({
      type: "sync",
      after: t.attrTime("after"),
      jid: null
    }, n);
  }
  __LOG__(3)`Unexpected "contacts" notification`;
  return (0, a.default)({
    type: "empty",
    jid: null
  }, n);
});
function D() {
  return w.apply(this, arguments);
}
function w() {
  return (w = (0, i.default)(function* (e, t) {
    if (t.type !== "modify") {
      throw (0, R.default)("Error: genContactChangeNotificationMsg invalid type");
    }
    {
      const n = (0, O.getMeUser)();
      const r = (0, o.default)(t.oldJid, "notification.oldJid");
      const i = (0, o.default)(t.jid, "notification.jid");
      let a;
      if (t.lid != null && t.oldLid != null) {
        a = [r, i, t.oldLid, t.lid];
      } else {
        a = [r, i];
      }
      return {
        id: new h.default({
          remote: e,
          fromMe: false,
          id: yield h.default.newId()
        }),
        from: e,
        subtype: "change_number",
        t: t.ts,
        to: n,
        type: "notification_template",
        templateParams: a
      };
    }
  })).apply(this, arguments);
}
function L() {
  return k.apply(this, arguments);
}
function k() {
  return (k = (0, i.default)(function* (e, t) {
    const n = yield D(e, t);
    yield (0, m.handleSingleMsg)(e, n, "changeNumberNotification");
  })).apply(this, arguments);
}
function G() {
  return U.apply(this, arguments);
}
function U() {
  return (U = (0, i.default)(function* (e) {
    if (e.oldJid) {
      const t = e.oldJid;
      const n = e.jid;
      const r = e.oldLid != null ? e.oldLid : null;
      const i = e.lid != null ? e.lid : null;
      const a = [];
      if (c.ChatCollection.get(t)) {
        a.push({
          id: t.toString(),
          changeNumberNewJid: n.toString(),
          changeNumberOldJid: undefined
        });
      }
      if (c.ChatCollection.get(n)) {
        a.push({
          id: n.toString(),
          changeNumberNewJid: undefined,
          changeNumberOldJid: t.toString()
        });
      }
      (0, T.getChatTable)().bulkCreateOrMerge(a).then(() => {
        a.forEach(e => {
          const t = c.ChatCollection.get(e.id);
          if (t) {
            const {
              changeNumberNewJid: n,
              changeNumberOldJid: r
            } = e;
            t.changeNumberNewJid = n != null ? (0, I.createWid)(n) : undefined;
            t.changeNumberOldJid = r != null ? (0, I.createWid)(r) : undefined;
          }
        });
      });
      if (r != null && i != null) {
        yield (0, C.createLidPnMappingsJob)([{
          lid: (0, I.toUserWid)(r),
          pn: (0, I.toUserWid)(t)
        }, {
          lid: (0, I.toUserWid)(i),
          pn: (0, I.toUserWid)(n)
        }], true);
      }
      yield Promise.all([L(t, e), L(n, e)]);
    } else {
      __LOG__(2)`notification.oldJid is null`;
    }
  })).apply(this, arguments);
}
function x() {
  return (x = (0, i.default)(function* (e) {
    const t = N.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      throw t.error;
    }
    const n = t.success;
    const r = n.jid;
    switch (n.type) {
      case "update":
        {
          if (!r) {
            __LOG__(3)`handleContactsNotification: an update command does not include jid`;
            return i(n);
          }
          const e = E.PresenceCollection.get(r);
          if (e) {
            e.reset();
          }
          const t = M.StatusCollection.get(r);
          const a = t == null ? null : (0, A.getStatus)(r).then(e => {
            t.set({
              status: e.status
            });
          });
          const o = d.ContactCollection.get(r);
          let s;
          if (o && (0, b.receiveTextStatusEnabled)()) {
            s = (0, _.getTextStatus)(o.id, o.textStatusLastUpdateTime).then(e => {
              const {
                text: t,
                emoji: n,
                ephemeralDurationSeconds: r,
                lastUpdateTime: i,
                id: a
              } = e;
              return (0, P.updateTextStatusForContact)(a, t, n, r, i != null ? Number(i) : undefined);
            });
          }
          const l = (0, v.changeProfilePicThumb)(n.jid, S.PROFILE_PIC_COMMAND.SET);
          yield Promise.all([l, a, s]);
          return i(n);
        }
      case "modify":
        yield G(n);
        return i(n);
      case "sync":
        __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`received contact sync notification`;
        yield (0, f.contactSync)();
        return i(n);
      default:
        __LOG__(2)`handleContactsNotification: unhandled notification of type ${n.type}`;
        return i(n);
    }
    function i(e, t) {
      return (0, s.wap)("ack", {
        id: (0, s.CUSTOM_STRING)(e.stanzaId),
        to: e.from,
        class: "notification",
        type: "contacts"
      }, t);
    }
  })).apply(this, arguments);
}