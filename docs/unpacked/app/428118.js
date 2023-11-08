Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWebpMetadata = function (e) {
  const t = function (e) {
    const t = new Uint8Array(e);
    const n = (0, r.findWebpMetadata)(t);
    if (!n) {
      return {};
    }
    const {
      position: i,
      size: a
    } = n;
    const o = new TextDecoder();
    const s = t.slice(i, i + a);
    const l = o.decode(s);
    try {
      return JSON.parse(l);
    } catch (e) {
      __LOG__(2)`Failed to parse emojis out of sticker, returning empty object.`;
      return {};
    }
  }(e);
  return (0, i.toWebpMetadata)(t);
};
var r = require("./176819.js");
var i = require("./612193.js");