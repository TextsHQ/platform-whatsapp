var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPeerDataOperationRequestResponseMessage = function () {
  return d.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/731165.js");
var l = a(require("../app/565754.js"));
var i = require("../app/533494.js");
var u = require("../app/635881.js");
var s = require("../app/459857.js");
var c = require("../app/669050.js");
function d() {
  return (d = (0, r.default)(function* (e, t, n) {
    const a = yield f(e, t, n);
    if (a == null) {
      __LOG__(3)`peer message: the constructed peer data operation request response message is null`;
      return Promise.resolve();
    } else {
      yield (0, o.storePeerMessages)([a]);
      return (0, u.encryptAndSendKeyMsg)(a);
    }
  })).apply(this, arguments);
}
function f() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, r.default)(function* (e, t, n) {
    let a = null;
    switch (t) {
      case i.Message$PeerDataOperationRequestType.UPLOAD_STICKER:
        a = m(e, n);
    }
    if (a == null) {
      return null;
    }
    return {
      id: new l.default({
        fromMe: true,
        remote: (0, s.getMeUser)(),
        id: yield l.default.newId()
      }),
      to: (0, c.createDeviceWidFromUserAndDevice)((0, s.assertGetMe)().user, (0, s.assertGetMe)().server, 0),
      type: "protocol",
      subtype: "peer_data_operation_request_response_message",
      peerDataOperationRequestResponseMessage: a
    };
  })).apply(this, arguments);
}
function m(e, t) {
  if (t == null) {
    return null;
  } else {
    return {
      stanzaId: e,
      peerDataOperationRequestType: i.Message$PeerDataOperationRequestType.UPLOAD_STICKER,
      peerDataOperationResult: t
    };
  }
}