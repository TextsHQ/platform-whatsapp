var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncUser = undefined;
var i = require("./323389.js");
var a = r(require("./556869.js"));
exports.USyncUser = class {
  withId(e) {
    this._id = e;
    return this;
  }
  withLid(e) {
    this._lid = e;
    return this;
  }
  withDeviceHash(e) {
    this._deviceHash = e;
    return this;
  }
  withTs(e) {
    this._ts = e;
    return this;
  }
  withExpectedTs(e) {
    this._expectedTs = e;
    return this;
  }
  withPhone(e) {
    this._phone = e;
    return this;
  }
  withPersonaId(e) {
    this._personaId = e;
    return this;
  }
  withUsername(e) {
    this._username = e;
    return this;
  }
  getDeviceHash() {
    return this._deviceHash;
  }
  getPhone() {
    return this._phone;
  }
  getId() {
    return this._id;
  }
  getLid() {
    return this._lid;
  }
  getTs() {
    return this._ts;
  }
  getExpectedTs() {
    return this._expectedTs;
  }
  getPersonaId() {
    return this._personaId;
  }
  getUsername() {
    return this._username;
  }
  validate() {
    const {
      _id: e,
      _phone: t,
      _username: n
    } = this;
    if (e == null && t == null && n == null) {
      throw (0, a.default)("user must have an id, phone or a username");
    }
    if (e) {
      const t = (0, i.validateWid)(e.toString());
      if (!t) {
        __LOG__(3)`USync user created with invalid jid: ${e.toString()}`;
      }
      return t;
    }
    return true;
  }
};