var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryNonce = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("./243411.js");
const l = function () {
  var e = (0, r.default)(function* () {
    const e = yield (0, o.sendGetAccountNonceRPC)({});
    switch (e.name) {
      case "GetAccountNonceResponseSuccess":
        return e.value.detailNonceElementValue;
      case "GetAccountNonceResponseError":
        return null;
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.queryNonce = l;