var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeStartTs = T;
exports.generateThreadID = function () {
  return S.apply(this, arguments);
};
exports.generateThreadIDHMAC = function () {
  return v.apply(this, arguments);
};
exports.getBizCatalogType = function () {
  return M.apply(this, arguments);
};
exports.getThreadDs = function (e) {
  return (0, s.toDate)((0, s.castToUnixTime)(e - s.HOUR_SECONDS * 8)).toISOString().split("T")[0].replace(/-/g, "/");
};
exports.getWamDisappearingModeInitiatedByMe = function (e) {
  if (e == null) {
    return null;
  }
  if (e) {
    return _.EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_ME;
  }
  return _.EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_OTHER;
};
exports.getWamDisappearingModeTrigger = function (e) {
  if (e == null) {
    return null;
  }
  switch (e) {
    case c.DisappearingModeTrigger.AccountSettings:
      return g.EPHEMERALITY_TRIGGER_ACTION_TYPE.ACCOUNT_SETTINGS;
    case c.DisappearingModeTrigger.ChatSettings:
      return g.EPHEMERALITY_TRIGGER_ACTION_TYPE.CHAT_SETTINGS;
    case c.DisappearingModeTrigger.BulkChange:
      return g.EPHEMERALITY_TRIGGER_ACTION_TYPE.BULK_CHANGE;
    default:
      return null;
  }
};
exports.isCommerceMessage = function (e) {
  var t;
  const n = new Set([p.MSG_TYPE.PRODUCT, p.MSG_TYPE.ORDER, p.MSG_TYPE.LIST]);
  return n.has(e.type) || n.has((t = e.quotedMsg) === null || t === undefined ? undefined : t.type) || !(e.matchedText == null || e.matchedText === "" || (r = e.matchedText, !(0, l.matchCatalogUrl)(r) && !(0, l.matchProductUrl)(r))) || e.type === p.MSG_TYPE.NATIVE_FLOW && (e.nativeFlowName === d.default.ORDER_DETAILS || e.nativeFlowName === d.default.ORDER_STATUS);
  var r;
};
exports.shouldIncrementMsgSendAndReceive = function (e) {
  if ([p.MSG_TYPE.KEEP_IN_CHAT].includes(e.type)) {
    return false;
  }
  return true;
};
exports.shouldUpdateChatEvent = function (e, t, n) {
  return T(e, t) > n;
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./301055.js");
var s = require("./632157.js");
var l = require("./127714.js");
var u = require("./817649.js");
var c = require("./448609.js");
var d = r(require("./753110.js"));
var p = require("./373070.js");
var f = require("./228733.js");
var _ = require("./420419.js");
var g = require("./891225.js");
const m = new TextEncoder();
const h = e => m.encode(e).buffer;
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t) {
    const n = yield (0, o.hmacSha256)(e, t);
    return (0, a.encodeB64)(n);
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t, n) {
    return y(e, h(t + n));
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e, t) {
    return y(e, h(t));
  })).apply(this, arguments);
}
function T(e, t) {
  const n = t % s.DAY_SECONDS;
  const r = t - n;
  if (n >= e) {
    return r + e;
  } else {
    return r - s.DAY_SECONDS + e;
  }
}
function M() {
  return (M = (0, i.default)(function* (e) {
    var t;
    var n;
    let r;
    try {
      r = yield (0, f.queryBusinessProfile)([{
        wid: e
      }]);
    } catch (e) {
      __LOG__(4, true, new Error(), true)`Thread Logging: Failed to query business profile to set "biz_catalog_type"`;
      SEND_LOGS("query-business-profile-fail");
      return null;
    }
    const i = r[0];
    if (!i) {
      return null;
    }
    const a = (t = i.profile) === null || t === undefined || (n = t.profile_options) === null || n === undefined ? undefined : n.commerce_experience;
    if (a === u.COMMERCE_EXPERIENCE_TYPES.CATALOG) {
      return "native";
    } else if (a === u.COMMERCE_EXPERIENCE_TYPES.SHOP) {
      return "shop";
    } else {
      return null;
    }
  })).apply(this, arguments);
}