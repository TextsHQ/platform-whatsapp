var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptMsgProtobuf = function () {
  return S.apply(this, arguments);
};
exports.encryptMsgSenderKey = function () {
  return v.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./303754.js");
var o = require("./973776.js");
var s = require("./609218.js");
var l = require("./226430.js");
var u = require("./787742.js");
var c = require("./858913.js");
var d = require("./608182.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./138706.js"));
var f = require("./743275.js");
var _ = require("./459857.js");
var g = require("./555678.js");
var m = require("./616615.js");
var h = require("./816793.js");
var y = r(require("./556869.js"));
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function S() {
  return (S = (0, i.default)(function* (e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : m.EDIT_TYPE.NOT_EDITED;
    try {
      const {
        type: a,
        ciphertext: o
      } = yield p.Cipher.encryptSignalProto(e, (0, d.encodeAndPad)(n));
      (0, c.postSuccessDirectE2eMessageSendMetric)({
        to: e,
        retryCount: t,
        type: a,
        msg: r,
        editType: i
      });
      return {
        type: a,
        ciphertext: o
      };
    } catch (n) {
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`encryptMsgProtobuf: encryption fail for ${e.toString()}, ${n}`;
      (0, f.maybeDeleteUnconvertedSession)(e);
      (0, c.postFailureDirectE2eMessageSendMetric)({
        to: e,
        retryCount: t,
        msg: r,
        editType: i
      });
      return Promise.reject((0, y.default)(`[messaging] encryptMsgProtobuf: encryption fail for ${e.toString()}, ${n}`));
    }
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e, t, n, r) {
    var i;
    var c;
    const d = new s.E2eMessageSendWamEvent({
      e2eSuccessful: true,
      e2eCiphertextType: (0, o.getMetricE2eCiphertextType)(a.CiphertextType.Skmsg),
      e2eCiphertextVersion: o.CIPHERTEXT_VERSION,
      e2eDestination: g.E2E_DESTINATION.GROUP,
      messageMediaType: (0, h.getWamMediaType)(e),
      retryCount: 0,
      isLid: (i = r.isLid) !== null && i !== undefined ? i : undefined,
      typeOfGroup: (c = r.wamTypeOfGroup) !== null && c !== undefined ? c : undefined,
      editType: (0, u.getWamEditType)(e)
    });
    const f = (0, h.getWamAgentEngagementType)(e);
    if (f != null) {
      d.agentEngagementType = f;
    }
    const m = (0, _.getMaybeMeLid)();
    const E = (0, l.isCagAddon)(e, r) && m != null ? m : (0, _.assertGetMe)();
    try {
      return yield p.Cipher.encryptSenderKeyMsgSignalProto(t, E, n);
    } catch (e) {
      d.e2eSuccessful = false;
      d.weight = 1;
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`encryptMsgSenderKey: encryption fail for ${t.toString()}, ${e}`;
      return Promise.reject((0, y.default)(`[messaging] encryptMsgSenderKey: encryption fail for ${t.toString()}, ${e}`));
    } finally {
      d.commit();
    }
  })).apply(this, arguments);
}