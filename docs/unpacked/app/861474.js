Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
const n = {
  LOW: "low",
  HIGH: "high"
};
const r = window.matchMedia("\n    only screen and (-webkit-min-device-pixel-ratio: 2),\n    only screen and (min-device-pixel-ratio: 2),\n    only screen and (min-resolution: 2dppx)\n");
const i = {
  RES: n,
  currentRes: r.matches ? n.HIGH : n.LOW
};
r.addListener(function (e) {
  const t = e.matches ? n.HIGH : n.LOW;
  if (t === i.currentRes) {
    return;
  }
  i.currentRes = t;
  const r = document.createEvent("Event");
  r.initEvent("dpichange", true, true);
  window.dispatchEvent(r);
});
var a = i;
exports.default = a;