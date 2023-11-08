var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/795297.js");
var i = a(require("../app/393193.js"));
var u = require("../app/147793.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
}(require("./813878.js"));
var c = require("../app/267420.js");
var d = require("../app/158924.js");
var f = require("../app/533494.js");
var p = require("../app/394629.js");
var m = a(require("../app/556869.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function g() {
  return (g = (0, r.default)(function* () {
    const e = yield i.default.getDeferredMessages();
    yield (0, l.promiseEach)(e, function () {
      var e = (0, r.default)(function* (e) {
        if (!e) {
          return;
        }
        const {
          type: t,
          plaintext: n,
          info: a,
          paymentInfo: r,
          bizInfo: l
        } = e;
        const h = (0, u.hydrateWids)(a);
        const g = (0, p.decodeProtobuf)(f.MessageSpec, n);
        const E = (0, c.getFrom)(h);
        const v = yield (0, c.parseProtocolMessage)({
          info: h,
          msgProtobuf: g,
          paymentInfo: r,
          bizInfo: l,
          hsmInfo: null
        });
        if (v != null) {
          switch (t) {
            case d.PARSED_PROTOCOL_MESSAGE_TYPE.HISTORY:
              yield s.handleHistorySyncNotification((0, o.default)(v == null ? undefined : v.history, "parsed?.history"), E, h.externalId);
              break;
            case d.PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_SHARE:
              yield s.handleAppStateSyncKeyShare((0, o.default)(v == null ? undefined : v.appStateSyncKeyShare, "parsed?.appStateSyncKeyShare"), E);
              break;
            case d.PARSED_PROTOCOL_MESSAGE_TYPE.APP_STATE_SYNC_KEY_REQUEST:
              yield s.handleAppStateSyncKeyRequest((0, o.default)(v == null ? undefined : v.appStateSyncKeyRequest, "parsed?.appStateSyncKeyRequest"), E);
              break;
            case d.PARSED_PROTOCOL_MESSAGE_TYPE.PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE:
              yield s.handlePeerDataOperationRequestResponse(h.externalId, (0, o.default)(v == null ? undefined : v.peerDataOperationRequestResponseMessage, "parsed?.peerDataOperationRequestResponseMessage"));
              break;
            case d.PARSED_PROTOCOL_MESSAGE_TYPE.PEER_DATA_OPERATION_REQUEST_MESSAGE:
              yield s.handlePeerDataOperationRequest(h.externalId, (0, o.default)(v == null ? undefined : v.peerDataOperationRequestMessage, "parsed?.peerDataOperationRequestMessage"));
              break;
            default:
              throw (0, m.default)("[worker] Invalid messages stored in deferred messages table");
          }
          yield i.default.deleteDeferredMessage(e.id);
        } else {
          __LOG__(4, undefined, new Error())`[push-notification] Failed to handle deferred messages: parseProtocolMessage failed`;
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}
var E = {
  handleDeferredMessages: function () {
    return g.apply(this, arguments);
  }
};
exports.default = E;