function n() {
  return typeof WorkerGlobalScope != "undefined" && typeof importScripts == "function";
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isServiceWorker = function () {
  return n() && "ServiceWorkerGlobalScope" in self;
};
exports.isWorker = n;