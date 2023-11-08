var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgEditType = undefined;
exports.getMessageEditProcessingWindowDurationSeconds = u;
exports.getMessageEditUIEntryPointLimitSeconds = c;
exports.getMsgEditType = function (e) {
  switch (e) {
    case o.MSG_TYPE.CHAT:
      return d.TextEdit;
    case o.MSG_TYPE.IMAGE:
    case o.MSG_TYPE.VIDEO:
    case o.MSG_TYPE.DOCUMENT:
      return d.CaptionEdit;
    default:
      return null;
  }
};
exports.isParentWithinEditProcessingWindow = function (e) {
  let {
    parentTsInSeconds: t,
    editTsInSeconds: n,
    msgKey: r
  } = e;
  const a = s.default.isNewsletter(r.remote);
  if (n != null) {
    return n < t + u(a);
  } else {
    return (0, i.unixTime)() < t + u(a);
  }
};
exports.isParentWithinEditUIWindow = function (e) {
  let {
    parentTsInSeconds: t,
    msgKey: n
  } = e;
  return (0, i.unixTime)() < t + c(s.default.isNewsletter(n.remote));
};
exports.msgTypeSupportsEditing = function (e) {
  if (p.includes(e)) {
    return true;
  }
  return false;
};
var i = require("./632157.js");
var a = require("./287461.js");
var o = require("./373070.js");
var s = r(require("./124928.js"));
const l = 2592000;
function u(e) {
  if (e) {
    return l;
  }
  const t = (0, a.getABPropConfigValue)("message_edit_window_duration_seconds");
  if (t == null || t <= 0) {
    return 1200;
  } else {
    return t;
  }
}
function c(e) {
  if (e) {
    return l;
  }
  const t = (0, a.getABPropConfigValue)("message_edit_client_entry_point_limit_seconds");
  if (t == null || t <= 0) {
    return 900;
  } else {
    return t;
  }
}
const d = require("../vendor/76672.js").Mirrored(["TextEdit", "CaptionEdit"]);
exports.MsgEditType = d;
const p = [o.MSG_TYPE.CHAT, o.MSG_TYPE.IMAGE, o.MSG_TYPE.VIDEO, o.MSG_TYPE.DOCUMENT];