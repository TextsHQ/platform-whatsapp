Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THRESHOLD = undefined;
exports.maybeSwitchHost = function (e, t, n, o) {
  let {
    selectedHost: s,
    fallbackHost: l
  } = t;
  let {
    selectedHost: u,
    fallbackHost: c
  } = n;
  if (o < i) {
    return {
      changed: false,
      host: e
    };
  }
  switch (e.type) {
    case r.HOST_TYPE.PRIMARY:
      if (!e.equals(u)) {
        return {
          changed: true,
          host: u
        };
      }
      break;
    case r.HOST_TYPE.FALLBACK:
      if (!s.equals(u)) {
        return {
          changed: true,
          host: u
        };
      }
      if (a(e, l, c) || a(e, s.fallback, u.fallback)) {
        return {
          changed: true,
          host: s
        };
      }
  }
  return {
    changed: false,
    host: e
  };
};
var r = require("./464662.js");
const i = 52428800;
function a(e, t, n) {
  return e.equals(t) && n != null && t != null && !t.equals(n);
}
exports.THRESHOLD = i;