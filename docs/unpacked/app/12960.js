var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeCreateBizBot1pDisclosureSysMsg = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./821732.js");
var o = require("./37237.js");
var s = require("./428261.js");
var l = require("./692544.js");
function u() {
  return (u = (0, i.default)(function* (e) {
    if (e.bizBotSystemMsgType === o.BizBotType.BIZ_1P) {
      return;
    }
    const t = (0, a.genBizBot1pDisclosureMessage)(e.id);
    e.msgs.add((0, l.msgModelFromMsgData)(t));
    yield (0, s.storeMessages)([t], e.id);
    yield e.updateBizBotSysMsgCreated(o.BizBotType.BIZ_1P);
  })).apply(this, arguments);
}