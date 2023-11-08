Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isErrorRetryable = function (e) {
  if (e instanceof a.MMSThrottleError) {
    return false;
  }
  return e instanceof i.NoMediaHostsError || e instanceof r.HttpNetworkError || e instanceof a.MMSUnauthorizedError || e instanceof r.HttpStatusCodeError && e.status >= 500;
};
exports.isRetriableStatusCode = function (e) {
  if (e === 408) {
    return true;
  }
  if (e === 507) {
    return false;
  }
  if (e >= 500) {
    return true;
  }
  return false;
};
var r = require("./791357.js");
var i = require("./271186.js");
var a = require("./263958.js");