var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widToChatJid = function (e) {
  const t = s(e);
  if (t.jidType === "group") {
    return t.groupJid;
  }
  if (t.jidType === "phoneUser" || t.jidType === "lidUser") {
    return t.userJid;
  }
  __LOG__(4, undefined, new Error())`widToChatJid: "${e.toString()}" is not a ChatJid`;
  throw (0, o.default)("widToChatJid: can not convert wid to ChatJid");
};
exports.widToDeviceJid = l;
exports.widToGroupJid = function (e) {
  const t = s(e);
  if (t.jidType === "group") {
    return t.groupJid;
  }
  __LOG__(4, undefined, new Error())`widToGroupJid: "${e.toString()}" is not a GroupJid`;
  throw (0, o.default)("widToGroupJid: can not convert wid to GroupJid");
};
exports.widToJidWithType = s;
exports.widToMulticastJid = function (e) {
  const t = s(e);
  if (t.jidType === "group") {
    return t.groupJid;
  }
  if (t.jidType === "status") {
    return t.statusJid;
  }
  if (t.jidType === "broadcast") {
    return t.broadcastJid;
  }
  __LOG__(4, undefined, new Error())`widToMulticastJid: "${e.toString()}" is not a MulticastJid`;
  throw (0, o.default)("widToMulticastJid: can not convert wid to MulticastJid");
};
exports.widToMyJids = function (e) {
  if (e != null) {
    const t = l(e);
    return {
      userJid: (0, i.extractUserJid)(t),
      deviceJid: t
    };
  }
};
exports.widToUserJid = function (e) {
  if (e.isPSA()) {
    __LOG__(4, undefined, new Error(), true)`widToUserJid: wid is a PSA jid`;
    SEND_LOGS("invalid-psa-user-jid");
    throw (0, o.default)("widToUserJid: can not convert wid to UserJid");
  }
  const t = s(e);
  if (t.jidType === "phoneUser" || t.jidType === "lidUser") {
    return t.userJid;
  }
  __LOG__(4, undefined, new Error())`widToUserJid: "${e.toString()}" is not a UserJid`;
  throw (0, o.default)("widToUserJid: can not convert wid to UserJid");
};
var i = require("./418987.js");
var a = require("./714443.js");
var o = r(require("./556869.js"));
function s(e) {
  const t = e.toJid();
  const n = (0, a.interpretAndValidateJid)(t);
  if (n.jidType === "unknown") {
    __LOG__(4, undefined, new Error())`widToJidWithType: "${t}" is not a valid jid`;
    throw (0, o.default)("widToJidWithType: unknown jid type");
  }
  return n;
}
function l(e) {
  if (e.isPSA()) {
    __LOG__(4, undefined, new Error(), true)`widToDeviceJid: wid is a PSA jid`;
    SEND_LOGS("invalid-psa-user-jid");
    throw (0, o.default)("widToUserJid: can not convert wid to UserJid");
  }
  const t = s(e);
  if (t.jidType === "phoneDevice" || t.jidType === "lidDevice") {
    return t.deviceJid;
  }
  if (t.jidType === "phoneUser") {
    return (0, a.defaultDeviceJidForUser)(t.userJid);
  }
  if (t.jidType === "lidUser") {
    return (0, a.defaultLidDeviceJidForLidUserJid)(t.userJid);
  }
  __LOG__(4, undefined, new Error())`widToDeviceJid: "${e.toString()}" is not a DeviceJid`;
  throw (0, o.default)("widToDeviceJid: can not convert wid to DeviceJid");
}