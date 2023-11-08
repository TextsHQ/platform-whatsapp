Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdBadDeviceSentMessageWamEvent = undefined;
var r = require("./901032.js");
var i = require("./622195.js");
var a = require("./630230.js");
const o = (0, r.defineEvents)({
  MdBadDeviceSentMessage: [2176, {
    dsmError: [2, a.DSM_ERROR],
    peerType: [1, i.DEVICE_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.MdBadDeviceSentMessageWamEvent = o;