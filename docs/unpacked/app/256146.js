Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcQplHealthWamEvent = undefined;
var r = require("./901032.js");
var i = require("./876986.js");
const {
  STRING: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  WebcQplHealth: [3134, {
    webcQplHealthEventData: [1, a],
    webcQplHealthEventType: [2, i.WEBC_QPL_HEALTH_EVENT_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.WebcQplHealthWamEvent = o;