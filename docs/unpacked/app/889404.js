Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcStreamModeChangeWamEvent = undefined;
var r = require("./901032.js");
var i = require("./238327.js");
const a = (0, r.defineEvents)({
  WebcStreamModeChange: [770, {
    webcStreamMode: [1, i.WEBC_STREAM_MODE_CODE]
  }, [1, 1, 1], "regular"]
});
exports.WebcStreamModeChangeWamEvent = a;