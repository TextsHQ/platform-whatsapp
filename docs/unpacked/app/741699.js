Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLockMap = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
  const t = new i.PromiseQueueMap(e);
  return (0, r.makeLock)(t);
};
var r = require("./111325.js");
var i = require("./652204.js");