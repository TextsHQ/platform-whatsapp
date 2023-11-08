var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EARLIEST_AVAILABLE_MESSAGE_ID = undefined;
exports.addSystemMessagesToChat = function (e) {
  const {
    msgModelFromMsgData: t
  } = require("./692544.js");
  return e.addQueue.enqueue(Promise.resolve().then((0, i.default)(function* () {
    var n;
    var r;
    const i = h({
      id: e.id,
      name: e.name,
      t: (n = e.newsletterMetadata) === null || n === undefined ? undefined : n.creationTime,
      role: (r = e.newsletterMetadata) === null || r === undefined ? undefined : r.membershipType
    });
    const a = i.map(t);
    yield (0, p.addNewsletterMsgsRecords)(i);
    e.msgs.add(a, {
      at: 0
    });
    return a;
  })));
};
exports.genNewsletterCreationSystemMessages = h;
exports.genNewsletterDeletionSystemMessages = function (e) {
  let {
    id: t,
    name: n
  } = e;
  return [m((0, _.createWid)(t.toString()), {
    subtype: "newsletter_deleted",
    templateParams: [n],
    t: (0, o.unixTime)()
  })];
};
exports.genNewsletterSystemMessage = m;
exports.isEarliestNewsletterSystemMsg = function (e) {
  const {
    serverId: t
  } = e;
  if (t == null) {
    return false;
  }
  const n = Array.from(g.values());
  const r = Math.min(...n);
  return t === r;
};
exports.isNewsletterSystemMsg = function (e) {
  const {
    serverId: t
  } = e;
  if (t == null) {
    return false;
  }
  return t < 100;
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./632157.js");
var s = require("./927531.js");
var l = require("./389293.js");
var u = r(require("./565754.js"));
var c = require("./373070.js");
var d = require("./73225.js");
var p = require("./251309.js");
var f = require("./459857.js");
var _ = require("./669050.js");
const g = new Map([["newsletter_privacy", 10], ["newsletter_created", 20], ["newsletter_admin_context_card", 30], ["newsletter_deleted", Number.MAX_SAFE_INTEGER]]);
function m(e, t) {
  var n;
  const r = g.get(t.subtype);
  return (0, a.default)((0, a.default)({}, (0, l.genNotificationMsg)(e, (0, a.default)((0, a.default)({
    type: c.MSG_TYPE.NEWSLETTER_NOTIFICATION
  }, t), {}, {
    serverId: r,
    templateParams: (n = t.templateParams) !== null && n !== undefined ? n : []
  }))), {}, {
    id: new u.default({
      fromMe: (0, f.isMeAccount)(e),
      remote: e,
      id: r != null ? r.toString(10) : u.default.newId_DEPRECATED()
    })
  });
}
function h(e) {
  let {
    id: t,
    name: n,
    t: r,
    role: i
  } = e;
  const a = i != null ? i : s.NewsletterMembershipType.Subscriber;
  const l = r != null ? (0, o.castToUnixTime)(r) : (0, o.unixTime)();
  const u = m((0, _.createWid)(t.toString()), {
    subtype: "newsletter_privacy",
    templateParams: [a],
    t: l
  });
  const c = m((0, _.createWid)(t.toString()), {
    subtype: "newsletter_created",
    templateParams: n != null ? [n, a] : [],
    t: l
  });
  if ((0, d.isNewsletterAdminContextCardEnabled)(a)) {
    return [u, c, m((0, _.createWid)(t.toString()), {
      subtype: "newsletter_admin_context_card",
      templateParams: [t.toString()],
      t: l
    })];
  }
  return [u, c];
}
exports.EARLIEST_AVAILABLE_MESSAGE_ID = 100;