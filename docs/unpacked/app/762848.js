var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return te.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./413092.js");
var o = require("./283039.js");
var s = require("./634567.js");
var l = require("./418987.js");
var u = require("./466202.js");
var c = require("./716358.js");
var d = require("./287461.js");
var p = require("./697366.js");
var f = require("./757602.js");
var _ = require("./400627.js");
var g = require("./337199.js");
var m = require("./996578.js");
var h = r(require("./863176.js"));
var y = require("./435170.js");
var E = require("./80886.js");
var S = r(require("./81979.js"));
var v = require("./256396.js");
var T = r(require("./998037.js"));
var M = r(require("./674530.js"));
var A = require("./139917.js");
var b = r(require("./63099.js"));
var C = r(require("./2765.js"));
var P = r(require("./312930.js"));
var O = r(require("./154269.js"));
var I = require("./160582.js");
var R = r(require("./228359.js"));
var N = r(require("./996736.js"));
var D = r(require("./288627.js"));
var w = r(require("./450245.js"));
var L = r(require("./283365.js"));
var k = r(require("./251886.js"));
var G = r(require("./459671.js"));
var U = require("./216622.js");
var x = r(require("./233717.js"));
var B = require("./367587.js");
var F = require("./244670.js");
var j = require("./416341.js");
var Y = require("./828104.js");
var K = r(require("./657874.js"));
var W = r(require("./265927.js"));
var V = require("./609530.js");
var H = require("./730104.js");
var $ = r(require("./994534.js"));
var z = r(require("./651152.js"));
var q = require("./359484.js");
var J = require("./311660.js");
var Q = r(require("./556869.js"));
const X = (0, o.createHandleChatState)({
  groupMessage: {
    handleGroupChatState: E.handleGroupChatState
  },
  individualMessage: {
    handleIndividualChatState: E.handleIndividualChatState
  }
});
function Z() {
  return ee.apply(this, arguments);
}
function ee() {
  return (ee = (0, i.default)(function* (e, t, n) {
    const {
      attrs: r
    } = e;
    if (r.offline) {
      const e = parseInt(r.t, 10);
      const t = parseInt(r.offline, 10);
      q.OfflineMessageHandler.newOfflineStanza(e, n, t);
    }
    const i = (0, f.handleWorkerCompatibleStanza)(e);
    if (i != null) {
      return i;
    }
    switch (e.tag) {
      case "iq":
        return ne(e);
      case "receipt":
        try {
          if (r.type === "retry") {
            return yield (0, F.handleMessageRetryRequest)(e);
          }
          if (r.type === "enc_rekey_retry") {
            return yield (0, $.default)(e);
          }
          break;
        } catch (t) {
          if (t instanceof u.XmppParsingFailure) {
            (0, J.postUnknownStanzaMetric)(e);
            return (0, _.createNackFromStanza)(e, _.NackReason.ParsingError);
          } else {
            return (0, _.createNackFromStanza)(e, _.NackReason.UnhandledError);
          }
        }
      case "notification":
        try {
          switch (r.type) {
            case "server_sync":
              return yield (0, Y.handleServerSyncNotification)(e);
            case "picture":
              return yield (0, U.handleProfilePicNotificationJob)(e);
            case "business":
              return yield (0, y.handleBusinessNotificationJob)(e);
            case "contacts":
              {
                const t = e.content;
                if (!Array.isArray(t) || !t.length) {
                  break;
                }
                if (t[0].tag === "invite") {
                  return yield (0, C.default)(e);
                } else {
                  return yield (0, S.default)(e);
                }
              }
            case "devices":
              return yield (0, v.handleDevicesNotification)(e);
            case "disappearing_mode":
              return yield (0, A.handleDisappearingModeNotificationJob)(e);
            case "mediaretry":
              {
                var o;
                var c;
                __LOG__(2)`handleMediaRetryNotification: ${e == null || (o = e.attrs) === null || o === undefined ? undefined : o.id}: start`;
                const t = yield (0, O.default)(e);
                __LOG__(2)`handleMediaRetryNotification: ${e == null || (c = e.attrs) === null || c === undefined ? undefined : c.id}: done`;
                return t;
              }
            case "encrypt":
              {
                const n = e.content;
                if (!Array.isArray(n) || !n.length) {
                  break;
                }
                switch (n[0].tag) {
                  case "count":
                    return yield (0, L.default)(e, t);
                  case "digest":
                    return yield (0, M.default)(e);
                }
                break;
              }
            case "server":
              return yield (0, j.handleServerNotification)(e);
            case "status":
              return yield (0, g.handleAboutNotification)(e);
            case "account_sync":
              return yield (0, m.handleAccountSyncNotification)(e);
            case "pay":
              return yield (0, w.default)(e);
            case "psa":
              if (r.from != null && r.from.toString() === l.PSA_JID) {
                const t = e.content;
                if (!Array.isArray(t) || !t.length) {
                  break;
                }
                if (t[0].tag === "surfaces") {
                  return yield (0, B.handleQPSurfacesNotification)(e);
                }
                if ((0, d.getABPropConfigValue)("enable_client_chat_psa")) {
                  return yield (0, z.default)(e);
                }
                break;
              }
              return yield (0, x.default)(e);
            case "privacy_token":
              return yield (0, G.default)(e);
            case "link_code_companion_reg":
              return yield (0, p.handleAltDeviceLinkingNotification)(e);
            case "newsletter":
              return yield (0, R.default)(e);
            case "w:growth":
              return yield (0, C.default)(e);
            case "registration":
              return yield (0, T.default)(e);
            case "mex":
              return yield (0, I.handleMexNotification)(e);
            case "username":
              return yield (0, V.handleUsernameChangeNotification)(e);
          }
        } catch (t) {
          if (t instanceof u.XmppParsingFailure) {
            (0, J.postUnknownStanzaMetric)(e);
            return (0, _.createNackFromStanza)(e, _.NackReason.ParsingError);
          } else {
            return (0, _.createNackFromStanza)(e, _.NackReason.UnhandledError);
          }
        }
        return (0, _.createNackFromStanza)(e, _.NackReason.UnrecognizedStanza);
      case "chatstate":
        return (0, s.handleDecisionTreeResult)(e, X(e));
      case "presence":
        return (0, k.default)(e);
      case "ib":
        return (0, P.default)(e);
      case "stream:error":
        return (0, K.default)(e);
      case "failure":
        return (0, b.default)(e);
      case "success":
        return (0, W.default)(e);
      case "call":
        return (0, H.handleCall)(e);
      case "appdata":
        if ((0, d.getABPropConfigValue)("use_appdata_stanza_on_receiver")) {
          return (0, h.default)(e);
        }
        break;
      case "error":
        return (0, a.handleError)(e);
      case "xmlstreamend":
        __LOG__(2)`Comms.handleStanza received xmlstreamend, return NO_ACK`;
        return "NO_ACK";
    }
    return (0, _.createNackFromStanza)(e, _.NackReason.UnrecognizedStanza);
  })).apply(this, arguments);
}
function te() {
  return (te = (0, i.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const r = yield Z(e, t, n);
    if (r == null) {
      return "NO_ACK";
    } else {
      return r;
    }
  })).apply(this, arguments);
}
function ne(e) {
  const {
    attrs: t,
    content: n
  } = e;
  if (t.xmlns === "urn:xmpp:ping") {
    return (0, c.wap)("iq", {
      type: "result",
      to: t.from
    });
  }
  if (t.xmlns !== "md") {
    throw (0, Q.default)(`handleIq unrecognized ${e.toString()}`);
  }
  if (!Array.isArray(n) || !n.length) {
    return;
  }
  switch (n[0].tag) {
    case "pair-device":
      return (0, N.default)(e);
    case "pair-success":
      return (0, D.default)(e);
  }
}