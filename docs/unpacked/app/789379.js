Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetLoader = undefined;
const r = new (require("./135630.js").AssetLoaderImpl)();
exports.AssetLoader = r;
window.addEventListener("dpichange", () => {
  r.loadAssetsForCurrentDpi();
});