var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeviceListPK = function (e) {
  switch (e.server) {
    case "lid":
      return `${e.user}@lid`;
    case "c.us":
    case "hosted":
      return e.user;
  }
  throw (0, i.default)(`Jid ${e.toString({
    legacy: true
  })} is not fully qualified to create a device list pk, jid.server should be "c.us" or "lid"`);
};
var i = r(require("./556869.js"));