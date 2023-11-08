Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdRetryFromUnknownDeviceWamEvent = undefined;
var r = require("./901032.js");
var i = require("./622195.js");
const {
  BOOLEAN: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  MdRetryFromUnknownDevice: [2178, {
    offline: [2, a],
    senderType: [1, i.DEVICE_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.MdRetryFromUnknownDeviceWamEvent = o;