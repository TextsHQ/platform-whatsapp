Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UiRevokeActionHelper = undefined;
var a = require("../app/390934.js");
var r = require("./496563.js");
var o = require("./59911.js");
const l = new class {
  _commitAction(e) {
    const t = Date.now();
    const n = this._lastActionTs != null ? t - this._lastActionTs : 0;
    new r.UiRevokeActionWamEvent({
      messageAction: e,
      uiRevokeActionDuration: n,
      uiRevokeActionSessionId: this._sessionId
    }).commit();
    this._lastActionTs = t;
  }
  startSession() {
    this._sessionId = (0, a.randomHex)(16);
    this._lastActionTs = null;
    this._step = 0;
  }
  endSession() {
    this.startSession();
  }
  messageSelected() {
    if (!(this._step > 0)) {
      this._commitAction(o.UI_REVOKE_ACTION_TYPE.MESSAGE_SELECTED);
      this._step = 1;
    }
  }
  trashCanSelected() {
    if (!(this._step > 1)) {
      this._commitAction(o.UI_REVOKE_ACTION_TYPE.TRASH_CAN_SELECTED);
      this._step = 2;
    }
  }
  adminRevoke() {
    this._commitAction(o.UI_REVOKE_ACTION_TYPE.ADMIN_DELETE_FOR_EVERYONE);
  }
  senderRevoke() {
    this._commitAction(o.UI_REVOKE_ACTION_TYPE.SENDER_DELETE_FOR_EVERYONE);
    this.endSession();
  }
  adminAndSenderRevoke() {
    this._commitAction(o.UI_REVOKE_ACTION_TYPE.ADMIN_AND_SENDER_DELETE_FOR_EVERYONE);
  }
  revokeConfirmed() {
    this._commitAction(o.UI_REVOKE_ACTION_TYPE.DELETE_FOR_EVERYONE_SELECTED);
    this.endSession();
  }
}();
exports.UiRevokeActionHelper = l;