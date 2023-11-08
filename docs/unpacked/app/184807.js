Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignCredentialWamEvent = undefined;
var r = require("./901032.js");
var i = require("./507201.js");
var a = require("./956021.js");
var o = require("./42570.js");
const {
  BOOLEAN: s,
  INTEGER: l,
  TIMER: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  SignCredential: [2242, {
    applicationState: [6, i.APPLICATION_STATE],
    isFromWameta: [8, s],
    overallT: [4, u],
    projectCode: [7, a.PROJECT_CODE],
    retryCount: [2, l],
    signCredentialResult: [1, o.SIGN_CREDENTIAL_RESULT],
    signCredentialT: [3, u],
    waConnectedToChatd: [5, s]
  }, [1, 1, 1], "regular"]
});
exports.SignCredentialWamEvent = c;