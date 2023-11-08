var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDebugInfo = function (e) {
  s.Wam.initialize();
  const t = (0, r.default)((0, r.default)({}, c.Global.all), {}, {
    webcWebPlatform: o.FLB_PLATFORM,
    webcPhonePlatform: l.Conn.platform,
    webcProtoVersion: String(l.Conn.protoVersion)
  });
  const n = (0, u.getMe)();
  if (n) {
    t.deviceID = n.toString();
  }
  const a = {};
  for (const e in t) {
    const n = t[e];
    if (n != null) {
      a[e] = n;
    }
  }
  a.mdEnabled = true;
  a.hasMdCompanion = true;
  if (e) {
    const {
      supportTag: t,
      addUserAgentDetails: n,
      convertFields: r,
      entityId: o
    } = e;
    if (t != null) {
      a.context = t;
    }
    if (o != null) {
      a.entityId = o;
    }
    if (n === true) {
      a.userAgent = i.UA.parser.getUA();
    }
    if (r === true) {
      return function (e) {
        const t = {};
        for (const [a, r] of Object.entries(e)) {
          var n;
          t[(n = d.get(a)) !== null && n !== undefined ? n : a] = r;
        }
        return t;
      }(a);
    }
  }
  return a;
};
var r = a(require("../vendor/81109.js"));
var o = require("../app/508247.js");
var l = require("../app/445729.js");
a(require("../app/97359.js"));
var i = require("../app/368170.js");
var u = require("../app/459857.js");
var s = require("../app/154378.js");
var c = require("../app/130945.js");
const d = new Map([["appIsBetaRelease", "is-beta"], ["appVersion", "version"], ["browserVersion", "browser-version"], ["deviceName", "os"], ["mcc", "phone-mcc"], ["mnc", "phone-mnc"], ["webc_bucket", "exp-bucket"], ["webcPhoneAppVersion", "phone-app-version"], ["webcPhoneCharging", "is-phone-charging"], ["webcPhoneDeviceManufacturer", "phone-manufacturer"], ["webcPhoneDeviceModel", "phone-model"], ["webcPhoneOsVersion", "phone-os-version"], ["webcPhonePlatform", "phone-os"], ["webcWebPlatform", "platform"], ["webcProtoVersion", "protocol-version"], ["deviceID", "device-id"], ["webcWebArch", "device-arch"], ["webcWebDeviceManufacturer", "device-manufacturer"], ["webcWebDeviceModel", "device-model"], ["webcWebOsReleaseNumber", "device-release"], ["deviceVersion", "os-version"], ["userAgent", "user-agent"], ["mdEnabled", "md-enabled"], ["hasMdCompanion", "has-md-companion"], ["entityId", "entity id"]]);