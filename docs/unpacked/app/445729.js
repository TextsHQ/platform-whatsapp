var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnImpl = exports.Conn = undefined;
var i = r(require("../vendor/944908.js"));
var a = require("./481173.js");
var o = require("./780549.js");
var s = r(require("./476484.js"));
var l = r(require("./932325.js"));
var u = require("./256354.js");
var c = require("./65889.js");
var d = require("./94602.js");
var p = require("./757453.js");
var f = require("./459857.js");
var _ = r(require("./571256.js"));
var g = require("./300571.js");
var m = require("./130945.js");
require("./732815.js");
class h extends a.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, a.prop)();
    this.ref = (0, a.prop)();
    this.refTTL = (0, a.prop)();
    this.refId = (0, a.prop)();
    this.wid = (0, a.prop)();
    this.connected = (0, a.prop)();
    this.protoVersion = (0, a.prop)();
    this.clientToken = (0, a.prop)();
    this.serverToken = (0, a.prop)();
    this.secret = (0, a.prop)();
    this.isResponse = (0, a.prop)();
    this.lc = (0, a.prop)();
    this.lg = (0, a.prop)();
    this.locales = (0, a.prop)();
    this.is24h = (0, a.prop)();
    this.platform = (0, a.prop)();
    this.phone = (0, a.prop)();
    this.tos = (0, a.prop)();
    this.smbTos = (0, a.prop)(0);
    this.pushname = (0, a.prop)();
    this.blockStoreAdds = (0, a.session)(false);
    this.isVoipInitialized = (0, a.session)(false);
    this.refExpiry = (0, a.derived)(function () {
      return Date.now() + this.refTTL;
    }, ["ref", "refTTL"]);
    this.locale = (0, a.derived)(function () {
      return this.formatLocale(this.lg, this.lc);
    }, ["lg", "lc"]);
    this.localesList = (0, a.derived)(function () {
      if (this.locales && this.locales.length) {
        return this.locales.split(",").map(e => {
          const [t, n] = e.split("-");
          if (t) {
            return [t, n];
          } else {
            return null;
          }
        }).filter(Boolean);
      } else if (this.lg) {
        return [[this.lg, this.lc]];
      } else {
        return [];
      }
    }, ["locales", "lg", "lc"]);
    this.allLocales = (0, a.derived)(function () {
      return (0, i.default)(this.localesList.map(e => {
        let [t, n] = e;
        return this.formatLocale(t, n);
      })).filter(Boolean);
    }, ["localesList"]);
    this.allLanguages = (0, a.derived)(function () {
      return (0, i.default)(this.localesList.map(e => {
        let [t, n] = e;
        return t;
      }));
    }, ["localesList"]);
    this.platformField = (0, a.derived)(function () {
      if (this.platform === "wp7") {
        return g.PLATFORM_TYPE.WP;
      } else {
        return this.platform && g.PLATFORM_TYPE[this.platform.toUpperCase()] || g.PLATFORM_TYPE.UNKNOWN;
      }
    }, ["platform"]);
    this.tosShowCallNotification = (0, a.derived)(function () {
      return true;
    }, ["tos"]);
    this.isSMB = (0, a.derived)(function () {
      return this.platform === d.PLATFORMS.SMBA || this.platform === d.PLATFORMS.SMBI;
    }, ["platform"]);
  }
  initialize() {
    a.BaseModel.prototype.initialize.call(this);
    this.listenTo(this, "change:locale", function (e, t) {
      l.default.setLocale(t, u.L10N_PRIORITY.PHONE);
    });
    this.listenTo(this, "change:phone", () => {
      !function () {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        let {
          mcc: t,
          mnc: n
        } = e;
        if (t && typeof t == "string") {
          t = parseInt(t, 10);
        }
        if (n && typeof n == "string") {
          n = parseInt(n, 10);
        }
        m.Global.set({
          mcc: t != null ? t : null,
          mnc: n != null ? n : null,
          webcPhoneDeviceManufacturer: e.device_manufacturer || null,
          webcPhoneDeviceModel: e.device_model || null,
          webcPhoneOsBuildNumber: e.os_build_number || null,
          webcPhoneOsVersion: e.os_version || null,
          webcPhoneAppVersion: e.wa_version || null
        });
      }(this.phone);
    });
    this.listenTo(this, "change:platform", this._handlePlatformChange);
    this.listenTo(o.Cmd, "main_stream_mode_ready_legacy", this.updateVoipAvailability);
  }
  delete() {
    (0, p.setPushname)();
    this.clear();
  }
  canSetMyPushname() {
    return !this.isSMB;
  }
  updateVoipAvailability() {
    __LOG__(2)`Conn: updateVoipAvailability`;
    (0, c.requireVoip)().then(e => {
      if (!_.default.isVoiceCallEnabled() && !_.default.isVideoCallEnabled()) {
        __LOG__(2)`Conn: updateVoipAvailability, Voip GK false`;
        e.cleanup();
        return void (this.isVoipInitialized = false);
      }
      if (this.id && (0, f.getMaybeMeUser)()) {
        (0, s.default)().then(t => {
          if (t) {
            __LOG__(2)`Conn: updateVoipAvailability, isSystemCapableOfVoip true`;
            e.init().then(t => {
              __LOG__(2)`Conn: updateVoipAvailability, Voip initialized: ${t}`;
              this.isVoipInitialized = t;
              if (t) {
                e.updateAudioVideoSwitch();
              }
            });
          } else {
            __LOG__(2)`Conn: updateVoipAvailability, isSystemCapableOfVoip false`;
            e.cleanup();
            this.isVoipInitialized = false;
          }
        });
      } else {
        __LOG__(2)`Conn: updateVoipAvailability, getMaybeMeUser undefined`;
        e.cleanup();
        this.isVoipInitialized = false;
      }
    });
  }
  _handlePlatformChange() {
    __LOG__(2)`Conn: platform change: ${this.platform}`;
    if (this.platform) {
      m.Global.set({
        webcPhonePlatform: this.platformField
      });
    }
  }
  formatLocale(e, t) {
    if (e) {
      if (t) {
        return e.toLowerCase() + "-" + t.toUpperCase();
      } else {
        return e.toLowerCase();
      }
    } else {
      return null;
    }
  }
  shouldSaveToCache() {
    return !!(0, f.getMe)() && !!this.id;
  }
}
exports.ConnImpl = h;
h.Proxy = "conn";
const y = new ((0, a.defineModel)(h))({
  id: "1"
});
exports.Conn = y;