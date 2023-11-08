var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleIncomingSignalingMessage = function (e, t) {
  const a = r.default.get(e.call_id);
  if (!a) {
    return void __LOG__(3)`voip:voip_common_disabled: Received signaling msg type ${e.type} but could not find call for call ID`;
  }
  switch (e.type) {
    case l.TYPE.OFFER:
      if (e.t != null) {
        a.offerTime = e.t;
      }
      a.isVideo = !!e.isVideoCall;
      a.setState(i.CALL_STATES.INCOMING_RING);
      break;
    case l.TYPE.TERMINATE:
      a.setState(i.CALL_STATES.ENDED);
      switch (t.payload[1].reason) {
        case "timeout":
          if (s == null) {
            s = (0, o.default)(require("./132683.js"));
          }
          s.generateMissedCallLog(e.call_creator, a.offerTime, a.isVideo, false, a.isSilenced);
      }
      break;
  }
};
var r = a(require("../app/247665.js"));
var o = a(require("../app/97359.js"));
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
}(require("../app/549227.js"));
var i = require("../app/416371.js");
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
let s = null;