var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentMenuTarget = exports.AttachmentMenuOptionAction = exports.AttachmentMenuLogger = exports.AttachmentMenuAction = undefined;
var r = a(require("../vendor/81109.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/287461.js");
var i = require("./712465.js");
var u = require("./500173.js");
var s = require("./521839.js");
var c = a(require("../app/351199.js"));
const d = require("../vendor/76672.js").Mirrored(["OPEN", "CLOSE"]);
exports.AttachmentMenuAction = d;
const f = require("../vendor/76672.js").Mirrored(["SEND", "CANCEL"]);
exports.AttachmentMenuOptionAction = f;
const p = u.ATTACHMENT_TRAY_ACTION_TARGET_TYPE;
exports.AttachmentMenuTarget = p;
function m(e, t) {
  return (0, r.default)({
    attachmentTrayActionTarget: p.ATTACHMENT_TRAY,
    attachmentTrayAction: e === d.OPEN ? s.ATTACHMENT_TRAY_ACTION_TYPE.CLICK : s.ATTACHMENT_TRAY_ACTION_TYPE.CANCEL
  }, g(t));
}
function h(e, t, n) {
  return (0, r.default)({
    attachmentTrayActionTarget: t,
    attachmentTrayAction: e === f.SEND ? s.ATTACHMENT_TRAY_ACTION_TYPE.SEND : s.ATTACHMENT_TRAY_ACTION_TYPE.CANCEL
  }, g(n));
}
function g(e) {
  return {
    isAGroup: e.isGroup,
    groupSizeBucket: e.isGroup ? (0, c.default)(e.getParticipantCount()) : undefined
  };
}
function E() {
  return (0, l.getABPropConfigValue)("attachment_tray_logging_enabled");
}
const v = new class {
  constructor() {
    this._lastActionMs = null;
  }
  logAttachmentMenuOpen(e) {
    const t = new i.AttachmentTrayActionsWamEvent((0, r.default)((0, r.default)({}, m(d.OPEN, e)), {}, {
      actionDurationMs: 0
    }));
    this._markLastAction();
    if (E()) {
      t.commit();
    }
  }
  logAttachmentMenuClose(e) {
    const t = new i.AttachmentTrayActionsWamEvent((0, r.default)((0, r.default)({}, m(d.CLOSE, e)), {}, {
      actionDurationMs: this._getActionDuration()
    }));
    this._markLastAction();
    if (E()) {
      t.commit();
    }
  }
  logAttachMenuClick(e, t) {
    const n = new i.AttachmentTrayActionsWamEvent((0, r.default)((0, r.default)({
      attachmentTrayActionTarget: t,
      attachmentTrayAction: s.ATTACHMENT_TRAY_ACTION_TYPE.CLICK
    }, g(e)), {}, {
      actionDurationMs: this._getActionDuration()
    }));
    this._markLastAction();
    if (E()) {
      n.commit();
    }
  }
  logAttachmentSend(e, t) {
    const n = new i.AttachmentTrayActionsWamEvent((0, r.default)((0, r.default)({}, h(f.SEND, t, e)), {}, {
      actionDurationMs: this._getActionDuration()
    }));
    this._markLastAction();
    if (E()) {
      n.commit();
    }
  }
  logAttachmentCancel(e, t) {
    const n = new i.AttachmentTrayActionsWamEvent((0, r.default)((0, r.default)({}, h(f.CANCEL, t, e)), {}, {
      actionDurationMs: this._getActionDuration()
    }));
    this._markLastAction();
    if (E()) {
      n.commit();
    }
  }
  _markLastAction() {
    this._lastActionMs = Date.now();
  }
  _getActionDuration() {
    return Date.now() - (0, o.default)(this._lastActionMs, "this._lastActionMs");
  }
}();
exports.AttachmentMenuLogger = v;