var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewsletterJoin = v;
exports.handleNewsletterJoinNotification = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./1849.js");
var s = require("./632157.js");
var l = require("./359987.js");
var u = require("./293056.js");
var c = require("./570057.js");
var d = require("./309570.js");
var p = require("./73225.js");
var f = require("./570593.js");
var _ = require("./787671.js");
var g = require("./14291.js");
var m = require("./718561.js");
var h = require("./787111.js");
var y = require("./251309.js");
var E = require("./108803.js");
function S() {
  return (S = (0, a.default)(function* (e) {
    yield Promise.all([d.newsletterCreationQueue.wait(), d.newsletterSubscribeQueue.wait()]);
    const {
      makeJoinNotificationResponseAck: t,
      parsedRequest: n
    } = (0, o.receiveJoinNotificationRPC)(e);
    if (!(0, p.isNewsletterEnabled)()) {
      return t();
    }
    const {
      joinMetadataCommonNewsletterMetadataMixin: r
    } = n;
    const a = (0, i.default)((0, i.default)({}, r), {}, {
      idJid: n.from
    });
    const {
      chat: s,
      metadata: l,
      pic: u
    } = (0, g.mapNewsletterToModels)(a);
    try {
      yield v(s, l, u, n.from);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][join-notification] Failed process join notification ${e}`;
      SEND_LOGS("newsletter-join-notification-fail", 1, "newsletter");
    }
    return t();
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, a.default)(function* (e, t, n, r) {
    const {
      msgsToStore: i,
      noEarlierMsgs: a
    } = yield M({
      chat: e,
      metadata: t,
      newsletterJid: r
    });
    yield (0, E.updateNewsletterChatRecords)([(0, u.createNewsletterObjectForStorage)(e)]);
    yield (0, _.updateNewsletterMetadata)((0, m.createNewsletterMetadataObjectForStorage)(t));
    yield (0, l.frontendSendAndReceive)("joinNewsletter", {
      newsletter: e,
      metadata: t,
      pic: n,
      msgs: i,
      noEarlierMsgs: a
    });
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, a.default)(function* (e) {
    const {
      chat: t,
      metadata: n,
      newsletterJid: r
    } = e;
    try {
      const e = (0, h.genNewsletterCreationSystemMessages)({
        id: t.id,
        name: t.name,
        t: n.creationTime,
        role: n.membershipType
      });
      const i = yield (0, f.getNewsletterMessages)(r, 1);
      const a = i.msgs;
      const [o, s] = a.length > 0 ? [a, false] : [e, true];
      t.t = b(n.creationTime, o);
      if (a.length > 0) {
        yield (0, c.updateAddOnDbRecords)(i);
      }
      yield (0, y.addNewsletterMsgsRecords)(o);
      return {
        msgsToStore: o,
        noEarlierMsgs: s
      };
    } catch (e) {
      return {
        msgsToStore: [],
        noEarlierMsgs: false
      };
    }
  })).apply(this, arguments);
}
function b(e, t) {
  return (0, s.castToUnixTime)(Math.min(Math.max(e != null ? e : 0, Math.max(...t.map(e => {
    var t;
    if ((t = e.t) !== null && t !== undefined) {
      return t;
    } else {
      return 0;
    }
  }))), Date.now() / 1000));
}