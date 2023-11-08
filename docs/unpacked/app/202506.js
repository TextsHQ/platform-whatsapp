var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryDisappearingMode = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
const u = new s.WapParser("dmParser", e => {
  const t = e.child("disappearing_mode");
  return {
    duration: t.attrInt("duration"),
    t: t.attrInt("t")
  };
});
function c() {
  return (c = (0, i.default)(function* () {
    const e = (0, o.wap)("iq", {
      xmlns: "disappearing_mode",
      to: o.S_WHATSAPP_NET,
      type: "get",
      id: (0, o.generateId)()
    });
    const t = yield (0, a.deprecatedSendIq)(e, u);
    if (!t.success) {
      throw new l.ServerStatusCodeError(t.errorCode);
    }
    return t.result;
  })).apply(this, arguments);
}