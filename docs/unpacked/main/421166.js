Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CongratulationsAnimationConversation = function (e) {
  const t = (0, r.useRef)();
  const n = (0, o.useModelValues)(e.chat, ["animationCandidateData", "celebrationAnimationLastPlayed"]);
  if (n.animationCandidateData && n.animationCandidateData.msgTimestampSeconds > n.celebrationAnimationLastPlayed) {
    (function (e, t) {
      if (e.animationCandidateData) {
        if (!(t == null)) {
          t.triggerAnimation({
            animation: e.animationCandidateData.animationType
          });
        }
        e.setCelebrationAnimationLastPlayed();
      }
    })(n, t.current);
  }
  return r.default.createElement(a.CongratulationsAnimation, {
    ref: t
  });
};
var a = require("./833118.js");
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = l(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(a, o, i);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var o = require("../app/655241.js");
function l(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (l = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}