var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePushname = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  const r = (0, l.toUserWid)(e);
  return u.enqueue((0, i.default)(function* () {
    let e;
    if (!n) {
      e = yield c(r, t);
    }
    if (!(e !== true && e !== undefined)) {
      __LOG__(2)`updatePushName: set pushname for ${r.toLogString()}`;
      (0, s.persistContactUpdateBatched)(r, {
        pushname: t
      });
    }
  }));
};
var i = r(require("../vendor/348926.js"));
var a = require("./652204.js");
var o = require("./359987.js");
var s = require("./881646.js");
var l = require("./669050.js");
const u = new a.PromiseQueue();
function c(e, t) {
  return (0, o.frontendSendAndReceive)("updatePushname", {
    contactId: e,
    pushname: t
  });
}