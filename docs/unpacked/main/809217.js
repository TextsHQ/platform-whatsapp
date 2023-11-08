var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPollCreationMsg = C;
exports.sendPollCreation = function () {
  return y.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = a(require("../app/670983.js"));
var i = require("../app/632157.js");
var u = require("../app/402994.js");
var s = require("../app/700154.js");
var c = a(require("../app/565754.js"));
var d = require("../app/373070.js");
var f = require("../app/12074.js");
var p = require("./561820.js");
var m = require("../app/918602.js");
var h = require("../app/459857.js");
var g = require("./607693.js");
var E = a(require("../app/124928.js"));
var v = require("../app/669050.js");
var _ = require("./261580.js");
function y() {
  return (y = (0, o.default)(function* (e) {
    let {
      poll: t,
      chat: n,
      quotedMsg: a
    } = e;
    const r = C({
      poll: t,
      chat: n,
      quotedMsg: a
    });
    const o = E.default.isNewsletter(n.id);
    const [l] = o ? yield (0, f.sendNewsletterPollCreationMsg)({
      msgData: r,
      chat: n
    }) : yield Promise.all((0, m.addAndSendMsgToChat)(n, r));
    (0, p.commitPollsActionsMetric)({
      action: g.POLL_ACTION_TYPE.CREATE_POLL,
      chat: n,
      creationDateInSeconds: l.t,
      pollOptionsCount: t.options.length
    });
  })).apply(this, arguments);
}
function C(e) {
  var t;
  var n;
  let {
    poll: a,
    chat: o,
    quotedMsg: f
  } = e;
  const p = E.default.isNewsletter(o.id);
  const m = o.id;
  const g = o.id.isLid() || o.isGroup && Boolean((t = o.groupMetadata) === null || t === undefined ? undefined : t.isLidAddressingMode) ? (0, l.default)((0, h.getMaybeMeLidUser)(), "getMaybeMeLidUser()") : (0, l.default)((0, h.getMaybeMeUser)(), "getMaybeMeUser()");
  const y = (n = f == null ? undefined : f.msgContextInfo(o.id)) !== null && n !== undefined ? n : {};
  return (0, r.default)((0, r.default)({
    id: new c.default({
      from: g,
      to: m,
      id: c.default.newId_DEPRECATED(),
      participant: o.isGroup ? (0, v.toUserWid)(g) : undefined,
      selfDir: "out"
    }),
    type: d.MSG_TYPE.POLL_CREATION,
    isSentCagPollCreation: !!o.isCAG || undefined,
    t: (0, i.unixTime)(),
    from: g,
    to: m,
    self: "out",
    isNewMsg: true,
    local: true,
    ack: u.ACK.CLOCK,
    pollName: (0, _.trim)(a.name),
    pollOptions: a.options.map((e, t) => {
      let {
        name: n
      } = e;
      return {
        name: (0, _.trim)(n),
        localId: t
      };
    }),
    messageSecret: p ? undefined : self.crypto.getRandomValues(new Uint8Array(32)),
    pollSelectableOptionsCount: a.selectableOptionsCount
  }, y), (0, s.getEphemeralFields)(o));
}