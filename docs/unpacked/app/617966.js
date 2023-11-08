var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetUserDisclosureStageQueryJob = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./947428.js");
var o = require("./984330.js");
var s = require("./87429.js");
const l = {
  5: "ACCEPTED",
  "-1": "UNKNOWN"
};
function u() {
  return (u = (0, i.default)(function* (e, t) {
    const n = yield (0, a.sendSetRPC)({
      stageMixinArgs: {
        noticeId: e,
        noticeStage: t
      }
    });
    switch (n.name) {
      case "SetResponseSuccess":
        {
          const n = l[t];
          s.TosManager.setState(e.toString(), n);
          return Promise.resolve(true);
        }
      case "SetResponseClientError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorIQErrorBadRequestMixin;
          throw new o.ServerStatusCodeError(Number(e), t);
        }
      case "SetResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorIQErrorInternalServerErrorMixin;
          throw new o.ServerStatusCodeError(Number(e), t);
        }
    }
  })).apply(this, arguments);
}