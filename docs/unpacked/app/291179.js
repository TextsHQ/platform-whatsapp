var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlocklist = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./332785.js");
var s = require("./854379.js");
var l = require("./673168.js");
function u(e, t) {
  __LOG__(3, undefined, undefined, true)`fetchBlocklist failed: code ${e} text ${t}`;
  SEND_LOGS("getBlocklist");
}
function c() {
  return (c = (0, a.default)(function* () {
    const e = yield (0, l.getBlocklistHash)();
    const t = (0, i.default)({}, e != null && {
      itemArgs: {
        itemDhash: e
      }
    });
    const n = yield (0, o.sendGetBlockListRPC)(t);
    switch (n.name) {
      case "GetBlockListResponseInternalServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorIQErrorFeatureNotImplementedOrInternalServerErrorMixinGroup.value;
          u(Number(e), t);
          return {
            errorCode: Number(e),
            errorText: t
          };
        }
      case "GetBlockListResponseInvalidRequest":
        {
          const {
            code: e,
            text: t
          } = n.value.errorIQErrorBadRequestOrRateOverlimitMixinGroup.value;
          u(Number(e), t);
          return {
            errorCode: Number(e),
            errorText: t
          };
        }
      case "GetBlockListResponseSuccessWithMatch":
        __LOG__(2)`fetchBlocklist: GetBlockListResponseSuccessWithMatch ${n.value.type}`;
        return {
          wids: []
        };
      case "GetBlockListResponseSuccessWithMismatch":
        {
          const e = {
            wids: []
          };
          const t = n.value.listDhash;
          const r = n.value.listItem;
          if (t != null) {
            e.dhash = t;
          }
          r.forEach(t => {
            var n;
            var r;
            e.wids.push({
              wid: (0, s.userJidToUserWid)(t.jid),
              displayName: (n = t.displayNameOrUsernameMixinGroup) === null || n === undefined ? undefined : n.value.displayName,
              username: (r = t.displayNameOrUsernameMixinGroup) === null || r === undefined ? undefined : r.value.username
            });
          });
          return e;
        }
    }
  })).apply(this, arguments);
}