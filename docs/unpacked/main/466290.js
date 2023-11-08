var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    selected: t,
    mediaData: n
  } = e;
  switch (n.type) {
    case l.default.TYPE.AUDIO:
      return i.default.createElement(d, {
        duration: n.duration,
        selected: t
      });
    case l.default.TYPE.VIDEO:
      if (n.isGif) {
        return null;
      } else {
        return i.default.createElement(d, {
          duration: n.duration,
          selected: t
        });
      }
    default:
      return null;
  }
};
var r = require("../app/396574.js");
var o = require("../app/63014.js");
var l = a(require("../app/116253.js"));
var i = a(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
const s = {
  position: "lhggkp7q",
  bottom: "blj1rie1",
  left: "qwwpii8a",
  display: "p357zi0d",
  fontSize: "lak21jic",
  lineHeight: "bvyb7wbk",
  color: "pp8r7oc8",
  pointerEvents: "m62443ks"
};
const c = {
  "@media (min-width: 800px) and (max-width: 999px), (min-width: 1025px) and (max-width: 1180px)": {
    display: "jyd2w1n8"
  }
};
function d(e) {
  let {
    duration: t,
    selected: n
  } = e;
  const a = o.Clock.durationStr(t);
  if (a) {
    return i.default.createElement("span", {
      className: (0, r.classnamesConvertMeToStylexPlease)((0, u.default)(s), {
        [(0, u.default)(c)]: n
      })
    }, a);
  } else {
    return null;
  }
}