var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forceFlushAllWamBuffers = function () {
  return new f.WebWamForceFlushWamEvent().commitAndWaitForFlush(true);
};
exports.getAppBuild = function () {
  return c.APP_BUILD_TYPE.RELEASE;
};
exports.getAppIsBetaRelease = function () {
  return (0, s.getWhatsAppWebExternalBetaJoinedIdb)();
};
exports.getChannelFromBufferKey = function (e) {
  if (e === "regular") {
    return "regular";
  } else {
    return "private";
  }
};
exports.getWamEnv = function () {
  return d.WEBC_ENV_CODE.PROD;
};
exports.isWamBufferTooLong = function (e) {
  let t = true;
  try {
    const n = new a.Binary((0, i.decodeB64)(e));
    t = n.size() > u.WAM_MAX_BUFFER_SIZE;
  } catch (e) {
    __LOG__(4, undefined, new Error())`dropping invalid wam buffer`;
  }
  return t;
};
exports.logPsIdUpdate = function (e, t, n) {
  new o.PsIdUpdateWamEvent({
    psIdAction: e,
    psIdKey: t,
    psIdRotationFrequence: n
  }).commit();
};
exports.maybeForwardWamAttributeToJestE2e = function () {};
exports.maybeForwardWamEventToJestE2e = function () {};
exports.processWorkerWamDataRow = function (e) {
  const {
    action: t,
    name: n,
    payload: r
  } = e;
  if (t === "commit") {
    return function (e, t) {
      const n = JSON.parse(t);
      const r = l.events[e];
      if (r == null) {
        __LOG__(4, undefined, new Error(), true)`WAM: commitWorkerWamEvent failed, ${e} is not defined`;
        return void SEND_LOGS("wam-worker-event-undefined-error");
      }
      new r(n).commit();
    }(n, r);
  } else {
    return function (e, t) {
      const {
        value: n
      } = JSON.parse(t);
      p.Global.set({
        [e]: n
      });
    }(n, r);
  }
};
r(require("../vendor/81109.js"));
var i = require("./417405.js");
var a = require("./904704.js");
var o = require("./154739.js");
var s = require("./757453.js");
var l = require("./901032.js");
var u = require("./404021.js");
var c = require("./181548.js");
var d = require("./519237.js");
var p = require("./130945.js");
var f = require("./686413.js");
r(require("./556869.js"));