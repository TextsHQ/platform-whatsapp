var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._calculateTimeoutFromGroupMetadata = v;
exports.appIsActive = function () {
  return document.hasFocus();
};
exports.chatIsActive = function (e) {
  return document.hasFocus() && e.active;
};
exports.getNotificationIcon = function (e) {
  if (e.isGroup) {
    return E;
  } else {
    return S;
  }
};
exports.getNotificationTitle = function (e) {
  var t;
  if (((t = e.groupMetadata) === null || t === undefined ? undefined : t.isUnnamed) && (0, a.getABPropConfigValue)("ugr_enabled")) {
    return (0, _.calculateUnnamedGroupFullParticipantsList)((0, i.default)(e.groupMetadata, "chat.groupMetadata"), true);
  }
  const n = e.msgs.last();
  if ((n == null ? undefined : n.subtype) === "sender_invite") {
    const t = (0, l.getFormattedName)(e.contact);
    if ((n == null ? undefined : n.templateParams) && (n == null ? undefined : n.templateParams[0]) === "true") {
      return y.fbt._("{receiver_name} accepted your invite", [y.fbt._param("receiver_name", t)], {
        hk: "fHfY8"
      }).toString();
    } else {
      return y.fbt._("{receiver_name} joined WhatsApp", [y.fbt._param("receiver_name", t)], {
        hk: "3ufoZB"
      }).toString();
    }
  }
  return (0, l.getFormattedName)(e.contact) || function (e) {
    if (e.isGroup) {
      return y.fbt._("WhatsApp group message", null, {
        hk: "2updyb"
      });
    } else {
      return y.fbt._("WhatsApp message", null, {
        hk: "1Xrxdd"
      });
    }
  }(e).toString();
};
exports.isArchivedAndNotMentioned = function (e) {
  const t = (0, u.getChat)(e);
  if (!(0, d.archiveV2Supported)()) {
    return false;
  }
  if (!m.default.showArchiveV2) {
    return false;
  }
  if (!t.archive) {
    return false;
  }
  if (!t.isGroup) {
    return true;
  }
  if (T(e)) {
    const t = o.ChatCollection.get((0, p.getSender)(e));
    return (t == null ? undefined : t.mute.isMuted) === true;
  }
  return true;
};
exports.isCommunityHomeAdd = function (e) {
  var t;
  return !!((t = (0, u.getChat)(e).groupMetadata) === null || t === undefined ? undefined : t.isParentGroup);
};
exports.isMutedAndNotMentioned = function (e) {
  const t = (0, u.getChat)(e);
  if (!t) {
    return false;
  }
  if (!(t == null ? undefined : t.mute.isMuted)) {
    return false;
  }
  if (!t.isGroup) {
    return true;
  }
  if (T(e)) {
    const t = o.ChatCollection.get((0, p.getSender)(e));
    return (t == null ? undefined : t.mute.isMuted) === true;
  }
  return true;
};
exports.isOfflineResumeInProgress = function () {
  return f.OfflineMessageHandler.isResumeOnSocketDisconnectInProgress() || !s.Cmd.isOfflineDeliveryEnd;
};
exports.shouldIgnoreGroupMsg = function (e) {
  return false;
};
exports.shouldSquelch = function (e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  if (!e.isGroup) {
    return false;
  }
  if (e.isGroup && e.isReadOnly) {
    return false;
  }
  const n = Date.now();
  const r = e.squelch || 0;
  if (n > r) {
    return !!t && (c.default.find(e.id).then(t => {
      if (t != null) {
        const n = v(e.id, t);
        e.squelch = Date.now() + n;
      }
    }), false);
  }
  return true;
};
var i = r(require("./670983.js"));
var a = require("./287461.js");
var o = require("./351053.js");
var s = require("./780549.js");
var l = require("./714574.js");
var u = require("./163755.js");
var c = r(require("./667845.js"));
var d = require("./97858.js");
var p = require("./787742.js");
var f = require("./359484.js");
var _ = require("./843337.js");
var g = require("./592978.js");
var m = r(require("./634152.js"));
var h = require("./459857.js");
var y = require("../vendor/548360.js");
const E = require("./37849.js");
const S = require("./352026.js");
function v(e, t) {
  const n = t.participants.length;
  return Math.min(120, 30 + n * 5) * 1000;
}
function T(e) {
  const t = (0, h.getMaybeMeUser)();
  return e.isMentioned(t) || (0, g.isQuotedMsg)(e, t);
}