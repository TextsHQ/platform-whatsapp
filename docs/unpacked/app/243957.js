Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.default = () => "randomUUID" in self.crypto ? self.crypto.randomUUID() : ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, e => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));