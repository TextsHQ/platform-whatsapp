Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCdnUrlParams = function (e) {
  const t = (e instanceof URL ? e.searchParams : new URL(e).searchParams).get(i);
  return {
    expirationDate: t == null ? undefined : (0, r.convertHexToDate)(t)
  };
};
var r = require("./632157.js");
const i = "oe";