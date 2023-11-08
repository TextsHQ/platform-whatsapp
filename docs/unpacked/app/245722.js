var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendConversationMute = function (e, t, n, r) {
  let o = Promise.resolve();
  const s = i.default.generateMuteMutation(e, t, r);
  o = (0, a.lockForSync)(["chat"], [s], n => {
    let [i] = n;
    return i.merge(e.toString(), {
      muteExpiration: t,
      isAutoMuted: r
    });
  }).then(() => ({
    status: 200
  }));
  return o;
};
var i = r(require("./464117.js"));
var a = require("./480313.js");