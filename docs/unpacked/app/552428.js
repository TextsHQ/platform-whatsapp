var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAllUserDisclosures = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./638055.js");
var o = require("./632157.js");
var s = require("./984330.js");
function l() {
  return (l = (0, i.default)(function* () {
    const e = (0, o.unixTime)();
    const t = yield (0, a.sendGetDisclosuresRPC)({
      getUserDisclosuresT: e
    });
    switch (t.name) {
      case "GetDisclosuresResponseClientSuccess":
        return t.value.notice;
      case "GetDisclosuresResponseClientError":
        {
          const {
            code: e,
            text: n
          } = t.value.errorIQErrorBadRequestMixin;
          throw new s.ServerStatusCodeError(Number(e), n);
        }
      case "GetDisclosuresResponseServerError":
        {
          const {
            code: e,
            text: n
          } = t.value.errorIQErrorInternalServerErrorMixin;
          throw new s.ServerStatusCodeError(Number(e), n);
        }
    }
  })).apply(this, arguments);
}