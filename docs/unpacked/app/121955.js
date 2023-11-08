Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginWamEvent = undefined;
var r = require("./901032.js");
var i = require("./158759.js");
var a = require("./648723.js");
var o = require("./646927.js");
var s = require("./773835.js");
var l = require("./204605.js");
var u = require("./351004.js");
var c = require("./72478.js");
var d = require("./818514.js");
const {
  BOOLEAN: p,
  INTEGER: f,
  TIMER: _
} = r.TYPES;
const g = (0, r.defineEvents)({
  Login: [460, {
    androidKeystoreState: [10, i.ANDROID_KEYSTORE_STATE_TYPE],
    connectionOrigin: [6, a.CONNECTION_ORIGIN_TYPE],
    connectionSequenceStep: [11, o.CONNECTION_SEQUENCE_STEP_TYPE],
    connectionT: [5, _],
    dnsResolutionMethod: [12, s.DNS_RESOLUTION_METHOD_TYPE],
    loginDnsResolver: [13, l.LOGIN_DNS_RESOLVER_TYPE],
    loginIpSource: [14, u.LOGIN_HOST_TYPE],
    loginPort: [15, c.LOGIN_PORT_NUMBER],
    loginResult: [1, d.LOGIN_RESULT_TYPE],
    loginT: [3, _],
    longConnect: [4, p],
    noiseProtocolVersion: [16, f],
    passive: [8, p],
    retryCount: [2, f],
    sequenceStep: [7, f],
    serverErrorCode: [9, f]
  }, [1, 1, 1], "regular"]
});
exports.LoginWamEvent = g;