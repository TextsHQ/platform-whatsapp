var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./481173.js");
var a = r(require("./565786.js"));
var o = require("./780549.js");
var s = require("./445729.js");
var l = r(require("./97359.js"));
var u = require("./513681.js");
var c = r(require("./571256.js"));
var d = require("./416371.js");
class p extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.peerJid = (0, i.prop)();
    this.offerTime = (0, i.prop)();
    this.isVideo = (0, i.prop)(false);
    this.isGroup = (0, i.prop)(false);
    this.groupCallParticipants = (0, i.prop)();
    this.canHandleLocally = (0, i.prop)(false);
    this.outgoing = (0, i.prop)(false);
    this.isSilenced = (0, i.prop)(false);
    this.offerReceivedWhileOffline = (0, i.prop)(false);
    this.webClientShouldHandle = (0, i.prop)(false);
    this.participants = (0, i.collection)(a.default);
    this.callInfo = (0, i.prop)();
    this._state = (0, i.prop)();
    this._ringTimeout = (0, i.prop)();
  }
  getState() {
    return this._state;
  }
  setState(e) {
    var t;
    t = this._state;
    if (e in _[t || "EMPTY"]) {
      this._state = e;
      this._handleNotification();
    }
  }
  _handleNotification() {
    const e = this.getState();
    if (!(!s.Conn.tosShowCallNotification || !this.peerJid || c.default.isVoiceCallEnabled() && !this.isVideo || c.default.isVideoCallEnabled() && this.isVideo)) {
      if (this.offerReceivedWhileOffline || e !== d.CALL_STATES.INCOMING_RING) {
        o.Cmd.cancelCall(this.peerJid);
      } else {
        o.Cmd.alertCall(this.peerJid, this.id, this.isVideo, this.isGroup, this.canHandleLocally, this.isSilenced);
        u.MainAudioChannel.claim(this, () => {})();
      }
    }
  }
  getCollection() {
    return (0, l.default)(require("./247665.js"));
  }
}
p.Proxy = "call";
var f = (0, i.defineModel)(p);
exports.default = f;
const _ = {
  EMPTY: {
    [d.CALL_STATES.INCOMING_RING]: true,
    [d.CALL_STATES.OUTGOING_CALLING]: true,
    [d.CALL_STATES.CONNECTING]: true,
    [d.CALL_STATES.REJECTED]: true,
    [d.CALL_STATES.HANDLED_REMOTELY]: true,
    [d.CALL_STATES.ENDED]: true,
    [d.CALL_STATES.FAILED]: true
  },
  INCOMING_RING: {
    [d.CALL_STATES.HANDLED_REMOTELY]: true,
    [d.CALL_STATES.CONNECTING]: true,
    [d.CALL_STATES.ACTIVE]: true,
    [d.CALL_STATES.REJECTED]: true,
    [d.CALL_STATES.ENDED]: true,
    [d.CALL_STATES.REMOTE_CALL_IN_PROGRESS]: true,
    [d.CALL_STATES.FAILED]: true
  },
  OUTGOING_CALLING: {
    [d.CALL_STATES.OUTGOING_RING]: true,
    [d.CALL_STATES.CONNECTING]: true,
    [d.CALL_STATES.ENDED]: true,
    [d.CALL_STATES.FAILED]: true,
    [d.CALL_STATES.ACTIVE]: true,
    [d.CALL_STATES.NOT_ANSWERED]: true,
    [d.CALL_STATES.REMOTE_CALL_IN_PROGRESS]: true
  },
  OUTGOING_RING: {
    [d.CALL_STATES.CONNECTING]: true,
    [d.CALL_STATES.ACTIVE]: true,
    [d.CALL_STATES.REJECTED]: true,
    [d.CALL_STATES.ENDED]: true,
    [d.CALL_STATES.FAILED]: true,
    [d.CALL_STATES.NOT_ANSWERED]: true
  },
  CONNECTING: {
    [d.CALL_STATES.ACTIVE]: true,
    [d.CALL_STATES.ENDED]: true,
    [d.CALL_STATES.REMOTE_CALL_IN_PROGRESS]: true,
    [d.CALL_STATES.FAILED]: true
  },
  CONNECTION_LOST: {
    [d.CALL_STATES.ACTIVE]: true,
    [d.CALL_STATES.ENDED]: true,
    [d.CALL_STATES.FAILED]: true
  },
  ACTIVE: {
    [d.CALL_STATES.ENDED]: true,
    [d.CALL_STATES.FAILED]: true,
    [d.CALL_STATES.CONNECTION_LOST]: true
  },
  HANDLED_REMOTELY: {},
  ENDED: {},
  REJECTED: {},
  REMOTE_CALL_IN_PROGRESS: {},
  FAILED: {},
  NOT_ANSWERED: {}
};