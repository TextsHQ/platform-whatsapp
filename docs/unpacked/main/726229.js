var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMsgAudioPlaybackController = function (e) {
  const t = () => e == null ? null : r.MsgAudioStore.acquireAudio(e);
  const [n, a] = (0, o.useState)(t);
  const [i, u] = (0, o.useState)(e);
  if (i !== e) {
    u(e);
    if (!(n == null)) {
      n.dispose();
    }
    a(t());
  }
  (0, l.default)(() => {
    if (!(n == null)) {
      n.dispose();
    }
  });
  return n;
};
var r = require("./31078.js");
var o = require("../vendor/667294.js");
var l = a(require("../app/558532.js"));