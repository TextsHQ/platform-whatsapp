var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reparseNewsletterMsg = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./359987.js");
var s = require("./257845.js");
var l = require("./916330.js");
var u = require("./73225.js");
var c = require("./251309.js");
function d() {
  return (d = (0, a.default)(function* (e) {
    const {
      futureproofBuffer: t,
      futureproofType: n,
      futureproofSubtype: r
    } = e;
    if (t != null || n == null) {
      return e;
    }
    if (!(0, l.isMsgTypeSupported)(n) || !(0, u.isNewsletterReparseEnabled)()) {
      return e;
    }
    const a = (0, i.default)((0, i.default)({}, e), {}, {
      type: n,
      subtype: r,
      futureproofType: undefined,
      futureproofSubtype: undefined
    });
    yield (0, c.addNewsletterMsgsRecords)([a]);
    yield (0, o.frontendSendAndReceive)("updateMessageUI", {
      msg: a,
      chatId: e.id.remote,
      messageOverwriteOption: s.MessageOverwriteOption.RETRY
    });
    return a;
  })).apply(this, arguments);
}