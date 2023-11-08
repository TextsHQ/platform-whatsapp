var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUsernameQueryJob = function (e) {
  return (0, c.createNonPersistedJob)("setUsernameQueryJob", (0, i.default)(function* () {
    const t = yield (0, o.sendSetRPC)({
      usernameElementValue: e
    });
    if (t.name === "SetResponseError") {
      const e = t.value.errorUsernameSetErrorResponses;
      const {
        code: n,
        text: r
      } = e.value;
      throw new u.ServerStatusCodeError(Number(n), r);
    }
    if (t.name === "SetResponseSuccess") {
      const t = (0, d.assertGetMeUser)();
      yield p([{
        userId: t,
        username: e
      }]);
      return true;
    }
    return false;
  }), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
exports.setUsernamesJob = p;
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./923158.js");
var s = require("./12643.js");
var l = require("./359987.js");
var u = require("./984330.js");
var c = require("./899137.js");
var d = require("./459857.js");
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = e.map(e => {
      let {
        userId: t,
        username: n
      } = e;
      return {
        id: t.toJid(),
        username: n
      };
    });
    yield (0, s.bulkUpdateUsernamesInDb)(t);
    yield (0, l.frontendSendAndReceive)("bulkUpdateUsernames", {
      usernameUpdates: t
    });
  })).apply(this, arguments);
}