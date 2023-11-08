var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockUser = function (e, t) {
  if (e.isPSA()) {
    return u(true);
  }
  return p(e, true, t);
};
exports.unblockUser = function (e) {
  if (e.isPSA()) {
    return u(false);
  }
  return p(e, false);
};
var i = r(require("../vendor/348926.js"));
var a = require("./978480.js");
var o = require("./178797.js");
var s = require("./673168.js");
var l = require("./574819.js");
function u() {
  return c.apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = {
      blockingAction: e ? "block" : "unblock"
    };
    const n = yield (0, o.sendChatBlockSetRPC)(t);
    switch (n.name) {
      case "ChatBlockSetResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorIQErrorInternalServerErrorOrRequestTimeoutOrServiceUnavailableMixinGroup.value;
          __LOG__(3)`blockUnblockPSAUser: server response with ${e}, ${t}`;
          return {
            errorCode: Number(e),
            errorText: t
          };
        }
      default:
        n.name;
    }
  })).apply(this, arguments);
}
function d(e) {
  if (e == null) {
    return null;
  } else {
    return {
      bizOptOutReason: e.reason,
      bizOptOutReasonDescription: e.reasonDescription,
      bizOptOutEntryPoint: e.entryPoint,
      bizOptOutFirstMessage: e.firstMessage,
      bizOptOutBusinessDiscoveryEntryPoint: e.businessDiscoveryEntryPoint,
      bizOptOutBusinessDiscoveryTimestamp: e.businessDiscoveryTimestamp,
      bizOptOutBusinessDiscoveryId: e.businessDiscoveryId
    };
  }
}
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t, n) {
    const r = yield (0, s.getBlocklistHash)();
    const i = d(n);
    const o = {
      bizOptOutArgs: i != null ? i : null,
      itemAction: t ? "block" : "unblock",
      itemJid: (0, l.widToUserJid)(e),
      itemDhash: r != null ? r : null
    };
    const u = yield (0, a.sendUpdateBlockListRPC)(o);
    switch (u.name) {
      case "UpdateBlockListResponseInvalidRequest":
        {
          const {
            code: e,
            text: t
          } = u.value.errorIQErrorNotAcceptableOrBadRequestOrForbiddenOrRateOverlimitMixinGroup.value;
          __LOG__(3)`blockUnblockUser: server response with ${e}, ${t}`;
          return {
            errorCode: Number(e),
            errorText: t
          };
        }
      case "UpdateBlockListResponseServerError":
        {
          const {
            code: e,
            text: t
          } = u.value.errorIQErrorFeatureNotImplementedOrInternalServerErrorMixinGroup.value;
          __LOG__(3)`blockUnblockUser: server response with ${e}, ${t}`;
          return {
            errorCode: Number(e),
            errorText: t
          };
        }
      default:
        u.name;
        __LOG__(2)`block/unblock ${n != null ? "biz" : "user"}: success`;
    }
  })).apply(this, arguments);
}