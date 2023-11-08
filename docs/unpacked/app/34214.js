var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castToAddonMsgData = d;
exports.getAddonParentMsgKey = c;
exports.parseHistorySyncMsg = function () {
  return f.apply(this, arguments);
};
exports.queryAddonParentMsgs = function () {
  return p.apply(this, arguments);
};
exports.sortAddonOrphans = function (e) {
  const t = [];
  const n = [];
  for (const r of e) {
    const {
      parsedMsgPayload: e
    } = r;
    if ((0, a.isUnifiedInfraEnabledForType)(e.type)) {
      const i = d(e);
      if (i != null) {
        t.push(i);
      } else {
        n.push(r);
      }
    } else {
      n.push(r);
    }
  }
  return {
    unifiedAddons: t,
    otherOrphans: n
  };
};
var i = r(require("../vendor/348926.js"));
var a = require("./317851.js");
var o = require("./994879.js");
var s = require("./664179.js");
var l = require("./817690.js");
var u = r(require("./565754.js"));
function c(e) {
  const {
    parentKey: t
  } = (0, s.getAddonProcessor)(e.type);
  const n = e[t];
  if (n instanceof u.default) {
    return n;
  }
  __LOG__(4, undefined, new Error(), true, ["addons"])`Addon ${e.type} parent key should be instance of MsgKey instead of ${typeof n}`;
  SEND_LOGS("getAddonParentMsgKey", 1, "addons");
  throw new o.AddonInfraError(o.AddonInfraErrorCode.InvalidParentMsgKey);
}
function d(e) {
  if ((0, s.hasAddonProcessor)(e.type)) {
    return e;
  }
}
function p() {
  return (p = (0, i.default)(function* (e) {
    const t = new Map();
    const n = new Set(e.map(e => c(e).toString()));
    const r = yield (0, l.getMsgsByMsgKey)(Array.from(n));
    for (const e of r) {
      t.set(e.id.toString(), e);
    }
    return t;
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    try {
      const t = [];
      for (const [n, r] of (0, s.getAddonProcessorsMap)().entries()) {
        if ((0, a.isUnifiedInfraEnabledForType)(n)) {
          t.push(r.convert.fromHistorySyncMsg(e));
        }
      }
      return yield Promise.all(t).then(e => [].concat(...e));
    } catch (e) {
      __LOG__(3, undefined, undefined, true, ["addons"])`parseHistorySyncMsg: error:${e}`;
      SEND_LOGS("parseHistorySyncMsg", 1, "addons");
      return [];
    }
  })).apply(this, arguments);
}