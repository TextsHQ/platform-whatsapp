Object.defineProperty(exports, "__esModule", {
  value: true
});
var n;
var a = require("./49090.js");
var o = (n = a) && n.__esModule ? n : {
  default: n
};
exports.default = function (e) {
  return new Promise(function (t) {
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
      t(window.YT);
    } else {
      var r = window.location.protocol === "http:" ? "http:" : "https:";
      (0, o.default)(r + "//www.youtube.com/iframe_api", function (t) {
        if (t) {
          e.trigger("error", t);
        }
      });
      var n = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        if (n) {
          n();
        }
        t(window.YT);
      };
    }
  });
};
module.exports = exports.default;