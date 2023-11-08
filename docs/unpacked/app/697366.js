var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrimaryHello = function () {
  return d;
};
exports.handleAltDeviceLinkingNotification = function (e) {
  const t = e.content;
  if (!Array.isArray(t) || !t.length) {
    return (0, s.makeDeliverResponseBadStanza)({
      ackError: 487
    }, e);
  }
  const n = t[0].attrs;
  if (n.stage === "primary_hello") {
    return p(e);
  }
  if (n.stage === "refresh_code") {
    return f(e);
  }
  return (0, s.makeDeliverResponseBadStanza)({
    ackError: 487
  }, e);
};
exports.handlePrimaryHelloNotification = p;
exports.handleRefreshCodeNotification = f;
var i = require("./31549.js");
var a = require("./777815.js");
var o = require("./210698.js");
var s = require("./549917.js");
var l = require("./518043.js");
var u = require("./359987.js");
var c = r(require("./556869.js"));
let d;
function p(e) {
  const {
    parsedRequest: t,
    makePrimaryHelloNotifyCompanionResponseAck: n
  } = (0, a.receivePrimaryHelloNotifyCompanionRPC)(e);
  if (!t) {
    (0, u.frontendSendAndReceive)("errorAltLinking", {});
    throw (0, c.default)("alt pairing: could not parse primary hello");
  }
  try {
    d = (0, l.handlePrimaryHello)(t);
    return n();
  } catch (e) {
    var r;
    if (!((r = (0, l.getCurrentMarker)()) === null || r === undefined)) {
      r.addPoint("primary_hello_error");
    }
    throw e;
  }
}
function f(e) {
  const {
    parsedRequest: t,
    makeRefreshCodeNotifyCompanionResponseAck: n
  } = (0, o.receiveRefreshCodeNotifyCompanionRPC)(e);
  if (!t) {
    throw (0, c.default)("alt pairing: could not parse refresh code");
  }
  const r = (0, l.getCurrentRef)();
  var a;
  var s;
  if (r != null && (0, i.uint8ArraysEqual)(r, t.linkCodeCompanionRegLinkCodePairingRefElementValue)) {
    if (t.linkCodeCompanionRegForceManualRefresh === "true") {
      if (!((a = (0, l.getCurrentMarker)()) === null || a === undefined)) {
        a.addPoint("receive_force_refresh_code");
      }
      (0, u.frontendFireAndForget)("forceManualRefresh", {
        ref: t.linkCodeCompanionRegLinkCodePairingRefElementValue
      });
    } else {
      if (!((s = (0, l.getCurrentMarker)()) === null || s === undefined)) {
        s.addPoint("receive_refresh_code");
      }
      (0, u.frontendFireAndForget)("refreshAltLinkingCode", {
        ref: t.linkCodeCompanionRegLinkCodePairingRefElementValue
      });
    }
  }
  return n();
}