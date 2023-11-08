Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setIsCommandPaletteOpen = exports.isCommandPaletteOpen = undefined;
let n = false;
exports.setIsCommandPaletteOpen = e => {
  n = e;
};
exports.isCommandPaletteOpen = () => n;