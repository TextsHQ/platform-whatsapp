Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepRawMedia = function (e, t) {
  let n;
  __LOG__(2)`Prepping raw media`;
  n = t.isPtt === true ? i.OUTWARD_TYPES.PTT : t.asDocument === true ? i.OUTWARD_TYPES.DOCUMENT : t.asGif === true ? i.OUTWARD_TYPES.VIDEO : t.isAudio === true ? i.OUTWARD_TYPES.AUDIO : t.asSticker === true ? i.OUTWARD_TYPES.STICKER : i.OUTWARD_TYPES.UNKNOWN;
  const o = Promise.resolve(e).then(e => {
    e.autoreleaseWhenPromiseCompletes(o);
    return (0, a.processRawMedia)(e, t);
  });
  return new r.MediaPrep(n, o);
};
var r = require("./328793.js");
var i = require("./172259.js");
var a = require("./774317.js");