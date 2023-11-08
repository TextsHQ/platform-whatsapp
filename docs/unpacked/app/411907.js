Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBootstrap = function (e) {
  return e == null;
};
exports.isCriticalCollection = function (e) {
  switch (e) {
    case r.CollectionName.CriticalBlock:
    case r.CollectionName.CriticalUnblockLow:
      return true;
    case r.CollectionName.Regular:
    case r.CollectionName.RegularHigh:
    case r.CollectionName.RegularLow:
      return false;
  }
};
var r = require("./122393.js");