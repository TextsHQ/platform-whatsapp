var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterBridgeApi = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("../vendor/506479.js"));
var s = r(require("../vendor/535937.js"));
var l = require("./927531.js");
var u = require("./177938.js");
var c = require("./61113.js");
var d = require("./692544.js");
var p = require("./12363.js");
var f = r(require("./358533.js"));
var _ = r(require("./876319.js"));
var g = require("./446474.js");
var m = require("./628623.js");
var h = require("./397516.js");
const y = ["id"];
const E = ["id"];
const S = ["id"];
const v = ["id"];
const T = ["id"];
const M = ["id"];
function A(e, t) {
  const n = f.default.get(e);
  if (!(n == null)) {
    n.mute.setMute(t, false, true);
  }
}
const b = {
  updateNewsletterMessageUI(e) {
    let {
      msg: t,
      chatID: n,
      isOrphan: r
    } = e;
    if (r) {
      return;
    }
    const i = (0, d.msgModelFromMsgData)(t);
    return (0, m.updateNewsletterMessageUI)(i, n);
  },
  deleteNewsletter(e) {
    var t;
    let {
      id: n,
      keep: r
    } = e;
    const i = f.default === null || f.default === undefined ? undefined : f.default.get(n);
    const a = i == null ? undefined : i.newsletterMetadata;
    if (r) {
      return void (a != null && (a.membershipType = l.NewsletterMembershipType.Guest));
    }
    const o = i == null ? undefined : i.msgs;
    if (o != null) {
      c.MsgCollection.remove(o);
    }
    if (!(i == null)) {
      i.delete();
    }
    if (!(i == null || (t = i.newsletterMetadata) === null || t === undefined)) {
      t.delete();
    }
    g.ProfilePicThumbCollection.remove(n);
  },
  joinNewsletter(e) {
    let {
      newsletter: t,
      metadata: n,
      pic: r,
      msgs: i,
      noEarlierMsgs: a
    } = e;
    const o = f.default.gadd(t, {
      merge: true
    });
    if (i != null) {
      o.msgs.add(i, {
        merge: true,
        at: 0
      });
    }
    if (a === true) {
      o.msgs.msgLoadState.noEarlierMsgs = true;
    }
    g.ProfilePicThumbCollection.add(r, {
      merge: true
    });
    _.default.add(n, {
      merge: true
    });
  },
  updateNewsletterMetadata(e) {
    let {
      metadata: t,
      newsletter: n,
      pic: r
    } = e;
    const {
      id: i
    } = t;
    const a = (0, o.default)(t, y);
    const {
      id: l
    } = n;
    const c = (0, o.default)(n, E);
    const {
      id: d
    } = r;
    const p = (0, o.default)(r, S);
    f.default.gadd(i).set((0, s.default)(c, e => e != null), {
      merge: true
    });
    _.default.gadd(i).set((0, s.default)(a, e => e != null), {
      merge: true
    });
    g.ProfilePicThumbCollection.gadd(i).set(p, {
      merge: true
    });
    if (a.name != null) {
      u.ContactCollection.gadd(i).set({
        name: a.name
      }, {
        merge: true
      });
    }
  },
  muteNewsletter(e) {
    let {
      id: t
    } = e;
    A(t, -1);
  },
  unmuteNewsletter(e) {
    let {
      id: t
    } = e;
    A(t, 0);
  },
  updateNewsletterSubscriberCount(e) {
    var t;
    var n;
    let {
      id: r,
      update: i
    } = e;
    const a = f.default === null || f.default === undefined || (t = f.default.get(r)) === null || t === undefined ? undefined : t.newsletterMetadata;
    if (a == null) {
      return;
    }
    const o = a.size;
    const s = (n = i.newSubscriberCount) !== null && n !== undefined ? n : Number(i.increment) + o;
    a.set("size", s);
  },
  updateNewsletterUnreadMsgCount(e) {
    let {
      id: t
    } = e;
    const n = f.default.get(t);
    if (n != null) {
      (0, h.updateUnreadCountMD)(n, 0, false);
    }
  },
  subscribeToNewsletter(e) {
    let {
      newsletter: t
    } = e;
    const {
      newsletterMetadata: n
    } = t;
    if (n != null) {
      n.membershipType = l.NewsletterMembershipType.Subscriber;
      f.default.add(t, {
        merge: true
      });
    } else {
      __LOG__(4, undefined, new Error())`[subscribeToNewsletter] called with newsletterMetadata = null`;
    }
  },
  loadNewsletterPreviewChat(e) {
    let {
      metadata: t,
      pic: n,
      newsletter: r,
      messages: i
    } = e;
    const {
      id: a
    } = t;
    const s = (0, o.default)(t, v);
    _.default.gadd(a).set(s, {
      merge: true
    });
    if (n != null) {
      const {
        id: e
      } = n;
      const t = (0, o.default)(n, T);
      g.ProfilePicThumbCollection.gadd(a).set(t, {
        merge: true
      });
    }
    u.ContactCollection.add({
      id: a,
      name: t.name
    }, {
      merge: true
    });
    f.default.add(r, {
      merge: true
    });
    const l = f.default.get(a);
    if (l != null && i != null) {
      l.msgs.add(i, {
        merge: true
      });
    }
    return l;
  },
  terminateNewsletter(e) {
    let {
      id: t,
      msgs: n
    } = e;
    var r;
    if (!(_.default === null || _.default === undefined)) {
      _.default.gadd(t).set({
        terminated: true
      }, {
        merge: true
      });
    }
    if (n != null) {
      if (!((r = f.default.get(t)) === null || r === undefined)) {
        r.msgs.add(n);
      }
    }
  },
  updateNewsletterPicture(e) {
    let {
      pic: t
    } = e;
    const {
      id: n
    } = t;
    const r = (0, o.default)(t, M);
    g.ProfilePicThumbCollection.gadd(n).set(r, {
      merge: true
    });
  },
  updateNewsletterMessages(e) {
    let {
      reactions: t,
      reactionIdsToRemove: n,
      timestamp: r,
      ids: i,
      viewCounts: o,
      pollVotes: s
    } = e;
    return (0, a.default)(function* () {
      yield (0, p.updateReactions)({
        ids: i,
        reactions: t,
        reactionIdsToRemove: n
      });
      yield (0, p.updatePollVotes)({
        ids: i,
        pollVotes: s
      });
      (0, p.updateViewCounts)(o);
      (0, p.updateLastUpdateTs)(i, r);
    })();
  },
  updateNewsletterMessageDeliveryUpdate(e) {
    var t;
    var n;
    let {
      id: r,
      modelUpdatesToAdd: a,
      modelUpdatesToRemove: o
    } = e;
    const s = f.default.get(r);
    if (s != null) {
      if (!((t = s.newsletterMetadata) === null || t === undefined)) {
        t.messageDeliveryUpdates.remove(o);
      }
      if (!((n = s.newsletterMetadata) === null || n === undefined)) {
        n.messageDeliveryUpdates.add(a.map(e => {
          const t = (0, d.msgModelFromMsgData)(e.msgData);
          c.MsgCollection.add(t, {
            merge: true
          });
          return (0, i.default)((0, i.default)({}, e), {}, {
            msgModel: t
          });
        }), {
          merge: true
        });
      }
    }
  },
  findMsgKeyFromServerId(e) {
    var t;
    var n;
    let {
      from: r,
      serverId: i
    } = e;
    const a = f.default.get(r);
    if (a == null || (t = a.msgs) === null || t === undefined || (n = t.findFirst(e => e.serverId === i)) === null || n === undefined) {
      return undefined;
    } else {
      return n.id;
    }
  },
  updateMsgsViewed(e) {
    let {
      ids: t
    } = e;
    t.forEach(e => {
      var t;
      if (!((t = c.MsgCollection.get(e)) === null || t === undefined)) {
        t.set("viewed", true);
      }
    });
  },
  updateGeosuspendedCountry(e) {
    let {
      id: t,
      countryCodes: n,
      toAdd: r
    } = e;
    const i = f.default.get(t);
    var a;
    var o;
    if (i != null) {
      if (r) {
        if (!((a = i.newsletterMetadata) === null || a === undefined)) {
          a.geosuspendedCountries.add(n.map(e => ({
            id: e,
            geosuspended: true
          })));
        }
      } else if (!((o = i.newsletterMetadata) === null || o === undefined)) {
        o.geosuspendedCountries.remove(n.map(e => e));
      }
    }
  },
  suspendNewsletter(e) {
    let {
      id: t
    } = e;
    _.default.gadd(t).set({
      suspended: true
    }, {
      merge: true
    });
  },
  geosuspendNewsletter(e) {
    let {
      id: t
    } = e;
    _.default.gadd(t).set({
      suspended: true,
      geosuspended: true
    }, {
      merge: true
    });
  },
  getActiveNewsletter() {
    var e;
    if ((e = f.default.getActive()) === null || e === undefined) {
      return undefined;
    } else {
      return e.id;
    }
  },
  getNewsletterMetadata(e) {
    var t;
    let {
      id: n
    } = e;
    if ((t = f.default.get(n)) === null || t === undefined) {
      return undefined;
    } else {
      return t.newsletterMetadata;
    }
  }
};
exports.NewsletterBridgeApi = b;