Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (s && t !== true) {
    __LOG__(3, undefined, undefined, undefined, ["qpl"])`QPL Config has already been initialized`;
  } else {
    o = new Map();
    l = e;
    f();
    s = {
      isQplEnabled: u,
      uploadInterval: c,
      getEventDetails: p,
      uploadDelay: d
    };
  }
  return s;
};
var r = require("./855034.js");
var i = require("./786950.js");
const a = {
  sampleRate: 0,
  samplingMethod: r.QplSampleMethod.EVENT_BASED_SAMPLING
};
r.QplSampleMethod.EVENT_BASED_SAMPLING;
let o;
let s;
let l;
function u() {
  return l.isQplEnabled();
}
function c() {
  return l.getUploadIntervalInSeconds();
}
function d() {
  return l.getInitialUploadDelayInSeconds();
}
function p(e) {
  const t = o.get(e);
  return t || a;
}
function f() {
  try {
    let e = l.getEventSampling();
    if (e.indexOf("json:") === 0) {
      e = e.slice(5);
    }
    const t = JSON.parse(e);
    t.sampling.forEach(e => {
      const t = e[0];
      const n = e[1];
      const r = Math.max(e[2], 0);
      o.set(t, {
        sampleRate: r,
        samplingMethod: n
      });
    });
  } catch (e) {
    (0, i.errorParsingConfig)(e);
  }
}