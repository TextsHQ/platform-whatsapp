function n(e, t) {
  if (t instanceof Map || t instanceof Set) {
    return Array.from(t);
  } else {
    return t;
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasConfigChanged = function (e, t) {
  var r;
  var i;
  var a;
  var o;
  if (e.maxConcurrency !== t.maxConcurrency) {
    return true;
  }
  if (((r = e.jobPrioritiesQuota) === null || r === undefined ? undefined : r.size) !== ((i = t.jobPrioritiesQuota) === null || i === undefined ? undefined : i.size)) {
    return true;
  }
  if (Object.keys((a = e.maxConcurrencyPerJob) !== null && a !== undefined ? a : {}).length !== Object.keys((o = t.maxConcurrencyPerJob) !== null && o !== undefined ? o : {}).length) {
    return true;
  }
  return JSON.stringify(e, n) !== JSON.stringify(t, n);
};