Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  var e;
  if (!((e = window.performance) === null || e === undefined ? undefined : e.timing) || !window.performance.getEntriesByType) {
    return void __LOG__(2)`MetricReporter:logResourceLoads metrics not provided by browser!`;
  }
  const t = window.performance.timing.fetchStart === window.performance.timing.domainLookupEnd;
  const n = window.performance.getEntriesByType("resource");
  const i = document.createElement("a");
  n.forEach(function (e) {
    if (e.initiatorType !== "xmlhttprequest") {
      i.href = e.name;
      new r.WebcResourceLoadWamEvent({
        webcResourceName: i.pathname + i.search + i.hash,
        webcResourceDuration: Math.round(e.duration),
        webcResourceCached: t
      }).commit();
    }
  });
};
var r = require("./743106.js");