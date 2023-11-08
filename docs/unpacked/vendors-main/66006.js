Object.defineProperty(exports, "__esModule", {
  value: true
});
var n;
var a = require("./322275.js");
var o = (n = a) && n.__esModule ? n : {
  default: n
};
exports.default = {
  pauseVideo: {
    acceptableStates: [o.default.ENDED, o.default.PAUSED],
    stateChangeRequired: false
  },
  playVideo: {
    acceptableStates: [o.default.ENDED, o.default.PLAYING],
    stateChangeRequired: false
  },
  seekTo: {
    acceptableStates: [o.default.ENDED, o.default.PLAYING, o.default.PAUSED],
    stateChangeRequired: true,
    timeout: 3000
  }
};
module.exports = exports.default;