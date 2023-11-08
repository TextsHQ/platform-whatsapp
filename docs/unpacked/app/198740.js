var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPlaceholderActions = function () {
  return E.apply(this, arguments);
};
exports.populatePlaceholderActions = function () {
  return v.apply(this, arguments);
};
exports.viewPlaceholderActions = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./185212.js");
var s = require("./907539.js");
var l = require("./862159.js");
var u = require("./787742.js");
var c = require("./252211.js");
var d = require("./935167.js");
var p = require("./35980.js");
var f = require("./711602.js");
var _ = require("./208407.js");
var g = require("./313556.js");
var m = require("./440401.js");
var h = require("./816793.js");
var y = r(require("./124928.js"));
function E() {
  return (E = (0, i.default)(function* (e) {
    (yield A(e)).forEach(e => {
      e.placeholderActionInd = p.PLACEHOLDER_ACTION.ADD;
      e.commit();
    });
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    const t = e.map(e => (0, s.messageFromDbRow)(e));
    (yield A(t)).forEach(e => {
      e.placeholderActionInd = p.PLACEHOLDER_ACTION.VIEW;
      e.commit();
    });
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    (yield A(e, true)).forEach(e => {
      e.placeholderActionInd = p.PLACEHOLDER_ACTION.POPULATE;
      e.commit();
    });
  })).apply(this, arguments);
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e, t, n) {
    var r;
    const i = e.id.remote;
    const o = new c.PlaceholderActivityWamEvent({
      placeholderChatTypeInd: R(i),
      placeholderTimePeriod: Math.max((0, a.unixTime)() - ((r = e.t) !== null && r !== undefined ? r : 0), 0),
      placeholderTypeInd: e.subtype === "fanout" ? _.PLACEHOLDER_TYPE.FANOUT : _.PLACEHOLDER_TYPE.CIPHERTEXT,
      messageIsRevoke: (0, u.getIsRevoke)(e),
      messageMediaType: (0, h.getWamMediaType)(e),
      messageType: (0, h.getWamMessageType)(e)
    });
    if (e.placeholderAddReason != null) {
      o.placeholderAddReason = e.placeholderAddReason;
    }
    if (n && e.placeholderPopulationType != null) {
      o.placeholderPopulationType = e.placeholderPopulationType;
    }
    if (e.e2eSenderType != null) {
      o.e2eSenderType = e.e2eSenderType;
    }
    if (y.default.isGroup(i)) {
      yield C(o, e, t);
    } else if (y.default.isUser(i)) {
      o.isLid = i.isLid();
    }
    yield O(o, e);
    return o;
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const n = [];
    const r = [];
    for (const t of e) {
      if ((0, u.getIsGroupMsg)(t)) {
        r.push(t);
      } else {
        n.push(t);
      }
    }
    const i = (yield (0, o.bulkGetGroupMetadata)(r.map(e => e.id.remote))).map((e, t) => [r[t], e]);
    return Promise.all([...n.map(e => T(e, null, t)), ...i.map(e => {
      let [n, r] = e;
      return T(n, r, t);
    })]);
  })).apply(this, arguments);
}
function C() {
  return P.apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e, t, n) {
    const r = yield (0, m.getGroupMetrics)(t.id.remote);
    if (r != null) {
      if (r.participantCount != null) {
        e.participantCount = r.participantCount;
      }
      if (r.deviceCount != null) {
        e.deviceCount = r.deviceCount;
      }
      if (r.deviceSizeBucket != null) {
        e.deviceSizeBucket = r.deviceSizeBucket;
      }
    }
    if (n) {
      const r = (0, g.isCagIncognitoFromGroupMetadata)(n);
      e.isLid = r && (0, u.getIsReaction)(t);
      e.typeOfGroup = (0, l.groupTypeToWamEnum)((0, l.getGroupTypeFromGroupMetadata)(n));
    }
  })).apply(this, arguments);
}
function O() {
  return I.apply(this, arguments);
}
function I() {
  return (I = (0, i.default)(function* (e, t) {
    if ((0, d.messageKeyHashEnabled)()) {
      const n = yield (0, d.getMessageKeyHash)(t);
      if (n != null) {
        e.messageKeyHash = n;
      }
    }
  })).apply(this, arguments);
}
function R(e) {
  if (y.default.isGroup(e)) {
    return f.PLACEHOLDER_CHAT_TYPE.GROUP;
  } else if (y.default.isStatusV3(e)) {
    return f.PLACEHOLDER_CHAT_TYPE.STATUS;
  } else if (y.default.isBroadcast(e)) {
    return f.PLACEHOLDER_CHAT_TYPE.BROADCAST;
  } else if (y.default.isUser(e)) {
    return f.PLACEHOLDER_CHAT_TYPE.INDIVIDUAL;
  } else if (y.default.isNewsletter(e)) {
    return f.PLACEHOLDER_CHAT_TYPE.CHANNEL;
  } else {
    return f.PLACEHOLDER_CHAT_TYPE.OTHER;
  }
}