var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAndSendTextMsg = B;
exports.createTextMsgData = U;
exports.sendTextMsgToChat = function () {
  return G.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/441609.js"));
var o = r(require("../vendor/791747.js"));
var s = r(require("../vendor/957557.js"));
var l = require("./775593.js");
var u = r(require("./670983.js"));
var c = require("./632157.js");
var d = require("./287461.js");
var p = require("./402994.js");
var f = require("./366202.js");
var _ = require("./332221.js");
var g = require("./354458.js");
var m = require("./941712.js");
var h = require("./169437.js");
var y = require("./821732.js");
var E = r(require("./143249.js"));
var S = require("./700154.js");
var v = require("./566509.js");
var T = require("./141797.js");
var M = require("./420213.js");
var A = r(require("./565754.js"));
var b = require("./772358.js");
var C = require("./373070.js");
var P = require("./899137.js");
var O = require("./639880.js");
var I = require("./872811.js");
var R = require("./77548.js");
var N = require("./387183.js");
var D = require("./163139.js");
var w = require("./459857.js");
var L = r(require("./887927.js"));
var k = require("./669050.js");
function G() {
  return (G = (0, i.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const r = (0, D.unproxy)(e);
    const i = yield U(r, t, n);
    if (i) {
      yield (0, _.maybeShowBizBot1pTos)(r);
      return B(r, i);
    }
  })).apply(this, arguments);
}
function U() {
  return x.apply(this, arguments);
}
function x() {
  return (x = (0, i.default)(function* (e, t) {
    var r;
    var i;
    var l;
    let _ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const y = (t || "").trim();
    if (y === "") {
      return null;
    }
    const {
      linkPreview: E,
      quotedMsg: v,
      mentionedJidList: T,
      groupMentions: M,
      quotedMsgAdminGroupJid: b,
      quotedMsgAdminGroupSubject: P,
      quotedMsgAdminParentGroupJid: N,
      selectedId: D,
      selectedIndex: G,
      ctwaContext: U,
      encryptedCommentFields: x
    } = _;
    (0, O.clearPresence)(e);
    const B = (0, u.default)((0, w.getMaybeMeLidUser)(), "getMaybeMeLidUser()");
    const F = e.id;
    let j;
    let Y = e.id.isLid() ? B : (0, w.getMaybeMeUser)();
    var K;
    if (e.isGroup) {
      Y = ((K = e.groupMetadata) === null || K === undefined ? undefined : K.isLidAddressingMode) === true ? B : (0, w.getMaybeMeUser)();
      j = (0, k.toUserWid)(Y);
    }
    const W = new A.default({
      from: Y,
      to: F,
      id: yield A.default.newId(),
      participant: j,
      selfDir: "out"
    });
    let V;
    if (v) {
      V = v.msgContextInfo(e.id);
    } else if (b != null && P != null && N != null) {
      V = {
        quotedRemoteJid: b,
        quotedGroupSubject: P,
        quotedParentGroupJid: N
      };
    } else if (b != null) {
      V = {
        quotedRemoteJid: b
      };
    }
    const H = E == null || E.mediaKeyTimestamp == null || (0, L.default)(E.mediaKeyTimestamp) ? E : (0, s.default)(E, ["mediaKey", "mediaKeyTimestamp", "thumbnailHQ", "thumbnailDirectPath", "thumbnailSha256", "thumbnailEncSha256", "thumbnailHeight", "thumbnailWidth"]);
    const $ = (0, o.default)({
      id: W,
      body: y,
      type: "chat",
      subtype: H && !(0, a.default)(H) ? "url" : null,
      t: (0, c.unixTime)(),
      from: Y,
      to: F,
      self: "out",
      isNewMsg: true,
      local: true,
      ack: p.ACK.CLOCK,
      urlText: e.urlText,
      urlNumber: e.urlNumber
    }, H || {}, V || {}, {
      mentionedJidList: T
    }, {
      groupMentions: M
    }, {
      ctwaContext: U
    });
    if (e.urlText) {
      e.urlText = undefined;
    }
    if (e.urlNumber) {
      e.urlNumber = undefined;
    }
    if (G != null) {
      $.type = "template_button_reply";
      $.selectedId = D;
      $.selectedIndex = G;
    }
    if ($.type !== C.MSG_TYPE.PROTOCOL) {
      Object.assign($, (0, S.getEphemeralFields)(e));
    }
    const z = (0, I.getPrivacyModeFromModel)(e.id);
    if (z != null) {
      $.privacyModeWhenSent = z;
    }
    $.agentId = (0, f.getAgentId)($);
    const {
      GroupType: q
    } = require("./862159.js");
    const J = Boolean(((r = e.groupMetadata) === null || r === undefined ? undefined : r.groupType) === q.LINKED_ANNOUNCEMENT_GROUP && ((i = e.groupMetadata) === null || i === undefined ? undefined : i.participants.iAmAdmin()));
    if ((0, g.isBotEnabled)()) {
      const e = T == null ? undefined : T.find(e => e.isBot());
      if (e == null ? undefined : e.isBot()) {
        $.invokedBotWid = e;
      }
    }
    const Q = $.subtype === "url" && (0, d.getABPropConfigValue)("web_youtube_rcat_chat_generation_enabled");
    const X = Boolean((0, g.isBotEnabled)() && ((l = $.invokedBotWid) === null || l === undefined ? undefined : l.isBot()));
    const Z = Boolean((0, g.isBotEnabled)() && F.isBot());
    if (J || Q || X || Z) {
      $.messageSecret = self.crypto.getRandomValues(new Uint8Array(32));
    }
    if (X) {
      $.botMessageSecret = yield (0, m.genBotMsgSecretFromMsgSecret)($.messageSecret);
    }
    if (X || Z) {
      let e;
      if (X) {
        e = $.invokedBotWid;
      } else if (Z) {
        e = F;
      }
      if (e != null) {
        var ee;
        const t = (ee = h.BotProfileCollection.get(e)) === null || ee === undefined ? undefined : ee.personaId;
        if (t != null) {
          $.botPersonaId = t;
        }
      }
    }
    if (v && v.type === C.MSG_TYPE.PRODUCT) {
      (0, R.logProductMessageBusinessSend)(v, v.sessionId);
    }
    if (x) {
      $.type = C.MSG_TYPE.COMMENT;
      $.encIv = x == null ? undefined : x.encIv;
      $.encPayload = x == null ? undefined : x.encPayload;
      $.targetMessageKey = x == null ? undefined : x.targetMessageKey;
    }
    return $;
  })).apply(this, arguments);
}
function B() {
  return F.apply(this, arguments);
}
function F() {
  return (F = (0, i.default)(function* (e, t) {
    var n;
    var r;
    var a;
    const o = new b.Msg(t);
    const s = (0, y.getMaybeSysMsgForBotInvoke)(o, e);
    const u = [...((n = yield (0, E.default)(o, e)) !== null && n !== undefined ? n : []), s].filter(Boolean);
    o.wamMessageSendReporter = new T.MessageSendReporter(o);
    o.wamMessageSendPerfReporter = new v.MessageSendPerfReporter({
      chatWid: o.to,
      mediaType: o.getWamMediaType(),
      messageType: o.getWamMessageType()
    });
    if (!((r = o.wamMessageSendPerfReporter) === null || r === undefined)) {
      r.startRenderedStage();
    }
    if (u.length > 0) {
      e.msgs.add(u);
    }
    e.msgs.add(o);
    if (!((a = o.wamMessageSendPerfReporter) === null || a === undefined)) {
      a.postRenderedStage();
    }
    const c = u.length > 0 ? [...u, t] : [t];
    return (0, P.createNonPersistedJob)("sendMessage", (0, i.default)(function* () {
      var t;
      var n;
      if (!((t = o.wamMessageSendPerfReporter) === null || t === undefined)) {
        t.startSavedStage();
      }
      yield (0, M.storeMessages)(c, e.id);
      if (s) {
        yield e.updateBotInvokeSystemMsgCreated();
      }
      if (!((n = o.wamMessageSendPerfReporter) === null || n === undefined)) {
        n.postSavedStage();
      }
      return yield (0, N.sendMsgRecord)(o);
    }), {
      priority: l.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted();
  })).apply(this, arguments);
}