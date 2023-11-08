var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t
  } = e;
  if ((0, o.supportsFMX)()) {
    return l.default.createElement(r.ContactInfoCard, {
      chat: t,
      contact: t.contact
    });
  } else {
    return null;
  }
};
var r = require("./307312.js");
var o = require("../app/798202.js");
var l = a(require("../vendor/667294.js"));