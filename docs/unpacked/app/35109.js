Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReducedPrivacyMode = undefined;
exports.comparePrivacyMode = function (e, t) {
  if (e == null && t == null) {
    return 0;
  }
  if (t == null) {
    return 1;
  }
  if (e == null) {
    return -1;
  }
  return e.privacyModeTs - t.privacyModeTs;
};
exports.getLatestPrivacyMode = function (e, t) {
  if (e == null) {
    return t;
  }
  if (t == null) {
    return e;
  }
  if (e.privacyModeTs > t.privacyModeTs) {
    return e;
  } else {
    return t;
  }
};
exports.getPrivacyModeFromQueryExistResponse = function (e) {
  var t;
  const n = (t = e.bizInfo) === null || t === undefined ? undefined : t.verifiedName;
  if (n == null) {
    return null;
  }
  if (e.biz && n.isApi === true) {
    return n.privacyMode;
  } else {
    return null;
  }
};
exports.getReducedPrivacyMode = function (e) {
  if (e == null || e.actualActors === r.ActualActorsEnumType.Self && e.hostStorage === r.HostStorageEnumType.OnPremise) {
    return i.E2EE;
  }
  if (e.hostStorage === r.HostStorageEnumType.Facebook) {
    return i.FB;
  }
  return i.BSP;
};
var r = require("./257845.js");
const i = require("../vendor/76672.js").Mirrored(["E2EE", "BSP", "FB"]);
exports.ReducedPrivacyMode = i;