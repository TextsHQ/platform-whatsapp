Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebDbVersionNonAnonymousWamEvent = undefined;
var r = require("./901032.js");
var i = require("./119077.js");
const {
  INTEGER: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  WebDbVersionNonAnonymous: [4816, {
    webDbName: [1, i.WEB_DB_NAME_TYPE],
    webDbVersionNumber: [2, a]
  }, [1, 1, 1], "regular"]
});
exports.WebDbVersionNonAnonymousWamEvent = o;