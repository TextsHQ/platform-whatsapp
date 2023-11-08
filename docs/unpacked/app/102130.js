var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./632157.js");
var a = r(require("./164325.js"));
var o = require("./12643.js");
var s = require("./481173.js");
var l = require("./446426.js");
var u = require("./72696.js");
var c = require("./388536.js");
var d = require("./474596.js");
var p = require("./354458.js");
var f = require("./445729.js");
var _ = require("./660666.js");
var g = require("./980237.js");
var m = require("./714574.js");
var h = r(require("./932325.js"));
var y = require("./446474.js");
var E = require("./476473.js");
var S = require("./491805.js");
var v = require("./596328.js");
var T = require("./557883.js");
var M = require("./129417.js");
var A = r(require("./124928.js"));
var b = require("./669050.js");
var C = require("../vendor/548360.js");
r(require("../vendor/667294.js"));
class P extends s.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, s.prop)();
    this.name = (0, s.prop)();
    this.shortName = (0, s.prop)();
    this.pushname = (0, s.prop)();
    this.type = (0, s.prop)("in");
    this.verifiedName = (0, s.prop)();
    this.isBusiness = (0, s.prop)();
    this.isEnterprise = (0, s.prop)();
    this.isSmb = (0, s.prop)();
    this.verifiedLevel = (0, s.prop)();
    this.privacyMode = (0, s.prop)();
    this.statusMute = (0, s.prop)();
    this.sectionHeader = (0, s.prop)();
    this.labels = (0, s.prop)();
    this.isContactSyncCompleted = (0, s.prop)();
    this.forcedBusinessUpdateFromServer = (0, s.prop)();
    this.disappearingModeDuration = (0, s.prop)();
    this.disappearingModeSettingTimestamp = (0, s.prop)();
    this.textStatusString = (0, s.prop)();
    this.textStatusEmoji = (0, s.prop)();
    this.textStatusEphemeralDuration = (0, s.prop)();
    this.textStatusLastUpdateTime = (0, s.prop)(v.TEXT_STATUS_NOT_FETCHED);
    this.textStatusExpiryTs = (0, s.prop)();
    this.requestedPnTimestamp = (0, s.prop)();
    this.username = (0, s.prop)();
    this.isContactBlocked = (0, s.session)(false);
    this.verificationString = (0, s.session)();
    this.verificationBinary = (0, s.session)();
    this.pendingAction = (0, s.session)();
    this.promises = (0, s.session)(() => ({}));
    this.status = (0, s.session)();
    this.profilePicThumb = (0, s.session)();
    this.businessProfile = (0, s.session)();
    this.commonGroups = (0, s.session)();
    this.businessCatalog = (0, s.session)();
    this.locale = (0, s.session)();
    this.shareOwnPn = (0, s.session)();
    this.phoneNumber = (0, s.session)();
    this.displayNameLID = (0, s.session)();
    this.isHosted = (0, s.session)();
    this.meTextStatusExpiryTimer = (0, s.session)();
  }
  _handleExpiration() {
    a.default.clearTimeout(this.meTextStatusExpiryTimer);
    this.unset(["meTextStatusExpiryTimer"]);
    (0, T.updateTextStatusForContact)(this.id, v.CLEAR_TEXT_STATUS_STRING_VAL, v.CLEAR_TEXT_STATUS_EMOJI_VAL, v.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL, v.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL);
  }
  setupStatusExpiration() {
    const e = this.textStatusExpiryTs;
    if (e != null) {
      if (this.meTextStatusExpiryTimer != null) {
        a.default.clearTimeout(this.meTextStatusExpiryTimer);
      }
      if (e < (0, i.unixTime)()) {
        self.setTimeout(() => {
          this._handleExpiration();
        });
      } else {
        this.meTextStatusExpiryTimer = a.default.setGlobalTimeout(() => this._handleExpiration(), e * 1000, this.meTextStatusExpiryTimer);
      }
    }
  }
  initialize() {
    super.initialize();
    if (this.id && ((0, _.getIsMe)(this) && this.addChild("status", E.StatusCollection.gadd(this.id)), (0, _.getIsMe)(this) && (0, S.receiveTextStatusEnabled)() && (this.setupStatusExpiration(), this.listenTo(this, "change:textStatusExpiryTs", () => {
      self.setTimeout(() => {
        this.setupStatusExpiration();
      });
    })), (0, _.getIsMe)(this) && this.addChild("profilePicThumb", y.ProfilePicThumbCollection.gadd(this.id)), (this.isBusiness || (0, _.getIsMe)(this) && f.Conn.isSMB) && this.addChild("businessProfile", require("./778945.js").BusinessProfileCollection.gadd(this.id)), this.listenTo(this, "change:isBusiness", () => (0, l.handleBusinessChange)(this)), (0, _.getIsMe)(this) && this.listenTo(f.Conn, "change:pushname", () => {
      this.set({
        pushname: f.Conn.pushname
      });
    }), this.listenTo(h.default, "locale_change", () => {
      this.locale = h.default.getLocale();
    }), this.listenTo(d.BlocklistCollection, "add remove", this.updateContactBlocked), this.id.isUser() && this.updateContactBlocked(), this.listenTo(this, "change:name", this.updateShortName), this.pendingAction = 0, f.Conn.isSMB && (0, c.initializeLabels)(this), (0, p.isBotReceiveEnabled)())) {
      if (!this.id.isBot()) {
        return;
      }
      if (this.name) {
        return;
      }
      if (this.id.user === "13135550002") {
        this.set({
          name: "Meta AI"
        });
      } else {
        this.set({
          name: C.fbt._("AI Character", null, {
            hk: "2AufMy"
          }).toString()
        });
      }
    }
  }
  updateShortName() {
    if ((0, _.getIsUser)(this) && this.name && !this.shortName) {
      const e = (0, g.getShortName)(this.name);
      if (e) {
        this.set("shortName", e);
      }
    }
  }
  getStatus() {
    if (!A.default.user(this.id)) {
      __LOG__(2)`contact:getStatus for non-user ${this.id.toString()}`;
    }
    return this.status = E.StatusCollection.gadd(this.id);
  }
  getProfilePicThumb() {
    return this.profilePicThumb = y.ProfilePicThumbCollection.gadd(this.id);
  }
  addPendingAction(e) {
    const t = () => {
      this.decPending();
    };
    e.then(t, t);
    this.pendingAction++;
    return e;
  }
  decPending() {
    if (this.pendingAction > 0) {
      this.pendingAction--;
    } else {
      __LOG__(2)`contact:onPendingActionUpdate pendingAction value is invalid`;
      this.pendingAction = 0;
    }
  }
  updateContactBlocked() {
    if (this.id.isUser()) {
      const e = this.phoneNumber;
      let t = false;
      if (d.BlocklistCollection.get(this.id)) {
        t = true;
      } else if (this.id.isLid() && e != null) {
        t = d.BlocklistCollection.get(e) != null;
      } else if (!this.id.isLid()) {
        const e = (0, o.getCurrentLid)(this.id);
        if (e != null) {
          t = d.BlocklistCollection.get(e) != null;
        }
      }
      this.isContactBlocked = t;
    }
  }
  searchMatch(e, t, n) {
    const r = (0, m.getSearchName)(this);
    var i;
    if ((0, u.canDisplayLabel)() && n) {
      return !(e && r && !r.includes(e)) && Boolean((i = this.labels) === null || i === undefined ? undefined : i.includes(n));
    }
    if (!e) {
      return false;
    }
    if (r && r.includes(e)) {
      return true;
    }
    const a = (0, _.getUserid)(this);
    if (a && a.includes(e)) {
      return true;
    }
    if (t) {
      if (this.id.isLid()) {
        if (a != null) {
          const e = (0, o.getPhoneNumber)((0, b.createUserWid)(a, "lid"));
          if (e != null && e.toString().includes(t)) {
            return true;
          }
        }
      } else if (a != null && a.includes(t)) {
        return true;
      }
    }
    const s = (0, _.getSearchVerifiedName)(this);
    if (s && s.includes(e)) {
      return true;
    }
    if (this.pushname && h.default.accentFold(this.pushname).includes(e)) {
      return true;
    }
    if ((0, M.usernameDisplayedEnabled)() && this.username != null && h.default.accentFold(this.username).includes(e)) {
      return true;
    }
    if ((0, _.getIsMe)(this)) {
      if (h.default.accentFold(C.fbt._("Me", null, {
        hk: "1TYV0y"
      }).toString()).includes(e)) {
        return true;
      }
    }
    return false;
  }
  set(e, t, n) {
    const r = super.set(e, t, n);
    if (typeof e != "string" && (t == null ? undefined : t.merge) && r) {
      if ((0, _.getIsPSA)(r)) {
        return r;
      }
      if (r.id.isBot()) {
        return r;
      }
      if (!e.name && r.name) {
        r.unset("name");
        r.unset("shortName");
      }
      if (!e.verifiedName && r.verifiedName) {
        r.unset("verifiedName");
      }
    }
    return r;
  }
  getCollection() {
    return require("./177938.js").ContactCollection;
  }
  setNotMyContact() {
    if (this.name) {
      this.set("name", undefined);
    }
  }
}
P.Proxy = "contact";
P.idClass = A.default;
var O = (0, s.defineModel)(P);
exports.default = O;