var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreBusinessInfo = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/588613.js");
var i = require("../app/778945.js");
var u = require("../app/817649.js");
var s = require("../app/351053.js");
var c = require("../app/153194.js");
var d = require("../app/830627.js");
var f = require("../app/669050.js");
function p() {
  return (p = (0, o.default)(function* () {
    (yield (0, d.getVerifiedBusinessNameTable)().all()).forEach(e => {
      let t;
      try {
        t = (0, f.createUserWid)(e.id);
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`restore-business-info: invalid wid`;
        return void SEND_LOGS("restore-business-info: invalid wid");
      }
      const n = s.ChatCollection.get(t);
      if (n) {
        const t = {
          isBusiness: true,
          isEnterprise: e.isApi,
          verifiedName: e.name,
          verifiedLevel: m(e.level),
          privacyMode: e.privacyMode
        };
        n.contact.set(t);
      }
    });
    (yield (0, c.getBusinessProfileTable)().all()).forEach(e => {
      const t = (0, l.businessProfileFromDbRow)(e);
      i.BusinessProfileCollection.gadd((0, r.default)((0, r.default)({}, t), {}, {
        dataSource: "db"
      }));
    });
  })).apply(this, arguments);
}
function m(e) {
  switch (e) {
    case "unknown":
      return u.VERIFIED_LEVEL.UNKNOWN;
    case "low":
      return u.VERIFIED_LEVEL.LOW;
    case "high":
      return u.VERIFIED_LEVEL.HIGH;
  }
  return u.VERIFIED_LEVEL.UNKNOWN;
}