var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAndUpdateBlocklist = function () {
  return p.apply(this, arguments);
};
exports.getBlockingStatusForPSAUser = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./528483.js");
var o = require("./33239.js");
var s = require("./291179.js");
var l = require("./487837.js");
var u = require("./129417.js");
var c = require("./673168.js");
var d = require("./669050.js");
function p() {
  return (p = (0, i.default)(function* () {
    __LOG__(2)`[blocklist] fetch blocklist using blocklist`;
    const e = yield (0, s.getBlocklist)();
    if (e.errorCode != null) {
      return e;
    }
    if (e.dhash) {
      __LOG__(2)`[blocklist] updating blocklist with ${e.wids.length || 0} contact(s)`;
      yield (0, c.setBlocklistHash)(e.dhash);
      yield (0, o.updateBlocklist)(e.wids.map(e => e.wid));
      const t = e.wids.map(e => {
        let {
          wid: t,
          displayName: n,
          username: r
        } = e;
        if (n == null && r == null || !t.isLid()) {
          return null;
        }
        const i = {};
        if (n != null) {
          i.displayNameLID = n;
          i.username = undefined;
        } else if (u.usernameDisplayedEnabled && r != null) {
          i.username = r;
        }
        return {
          lid: (0, d.toUserWid)(t),
          data: i
        };
      }).filter(Boolean);
      yield (0, l.updateLidMetadataJob)(t);
    } else {
      __LOG__(2)`[blocklist] no change in blocklist, skip update`;
    }
    return e;
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* () {
    const e = yield (0, a.sendChatBlockGetRPC)();
    switch (e.name) {
      case "ChatBlockGetResponseServerError":
        {
          const {
            code: t,
            text: n
          } = e.value.errorIQErrorInternalServerErrorOrRequestTimeoutOrServiceUnavailableOrRateOverlimitMixinGroup.value;
          __LOG__(3)`getBlockingStatusForPSAUser: server response with ${t}, ${n}`;
          return {
            errorCode: Number(t),
            errorText: n
          };
        }
      default:
        e.name;
        return e.value.blockingStatus === "blocked";
    }
  })).apply(this, arguments);
}