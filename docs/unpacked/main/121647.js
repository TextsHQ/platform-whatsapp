var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return l.default.createElement(o.WrappedSharedVideoPlayer, {
    type: r.PLAYER_TYPE.OG_FLOATER,
    ogVideoInfo: e.ogVideoInfo,
    startTime: e.startTime,
    onClose: e.onClose,
    onVideoEnded: e.onVideoEnded,
    onError: e.onError,
    onAspectRatio: e.onAspectRatio,
    autoPlay: e.autoPlay,
    disablePiPControls: e.disablePiPControls,
    onRefSet: e.onRefSet,
    onVideoMetadataChange: e.onVideoMetadataChange,
    onSetFullscreenToggleCallback: e.onSetFullscreenToggleCallback
  });
};
var r = require("../app/728.js");
var o = require("./618564.js");
var l = a(require("../vendor/667294.js"));