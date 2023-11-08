Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inplaceTruncateEventPrecision = function (e, t) {
  const n = t * 1000000;
  e.duration_ns = Math.round(e.duration_ns / n) * n;
  if (e.points) {
    e.points.map(e => {
      e.timeSinceStart = Math.round(e.timeSinceStart / t) * t;
    });
  }
};