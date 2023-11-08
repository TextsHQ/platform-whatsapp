Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMaybeBizPlatformForLogging = function (e) {
  if (e == null) {
    return r.BIZ_PLATFORM.UNKNOWN;
  }
  const t = a.ContactCollection.get((0, o.createWid)(e));
  if (t == null || !t.isBusiness) {
    return r.BIZ_PLATFORM.UNKNOWN;
  }
  if (t.isEnterprise) {
    return r.BIZ_PLATFORM.ENT;
  } else {
    return r.BIZ_PLATFORM.SMB;
  }
};
var a = require("../app/177938.js");
var r = require("../app/618112.js");
var o = require("../app/669050.js");