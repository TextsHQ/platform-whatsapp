Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePhoneNumberMixin = function (e) {
  const t = (0, i.attrUserJid)(e, "phone_number");
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    phoneNumber: t.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");