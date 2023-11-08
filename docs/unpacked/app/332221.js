var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeShowBizBot1pTos = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./750997.js");
var o = require("./354458.js");
var s = require("./292167.js");
var l = require("./37237.js");
var u = require("./338042.js");
var c = require("./12960.js");
var d = require("./114850.js");
var p = r(require("../vendor/667294.js"));
function f() {
  return (f = (0, i.default)(function* (e) {
    var t;
    if ((0, o.isBizBot1pEnabled)() && ((t = e.contact.businessProfile) === null || t === undefined ? undefined : t.isBizBot1p) && !(0, s.hasSeenBizBotTos)(l.BizBotType.BIZ_1P)) {
      return new Promise(t => {
        var n;
        d.ModalManager.open(p.default.createElement(a.BizBotTos, {
          automatedType: l.BizBotAutomatedType.PARTIAL_1P,
          onOK: (0, i.default)(function* () {
            yield (0, c.maybeCreateBizBot1pDisclosureSysMsg)(e);
            t();
          }),
          onCancel: t,
          chatEntryPoint: (n = e.chatEntryPoint) !== null && n !== undefined ? n : u.ChatEntryPoint.Unknown
        }), {
          blockClose: true
        });
      });
    }
  })).apply(this, arguments);
}