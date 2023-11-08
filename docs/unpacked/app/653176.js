var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncBusinessProtocol = undefined;
exports.businessParser = function (e) {
  e.assertTag("business");
  const t = e.maybeChild("error");
  if (t) {
    return {
      errorCode: t.attrInt("code"),
      errorText: t.attrString("text")
    };
  }
  const n = e.maybeChild("verified_name");
  return {
    verifiedName: n ? (0, a.default)(n) : null
  };
};
var i = require("./716358.js");
var a = r(require("./65230.js"));
exports.USyncBusinessProtocol = class {
  getName() {
    return "business";
  }
  getQueryElement() {
    return (0, i.wap)("business", null, (0, i.wap)("verified_name", null));
  }
  getUserElement() {
    return null;
  }
};