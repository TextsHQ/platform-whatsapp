Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    partialVideoOpts: t,
    progressiveJpegOpts: n,
    scanCount: a
  } = e;
  if (n && a != null) {
    return {
      start: 0,
      end: (0, r.alignChunkLengthsToMultipleOfAesBlockSize)(n.scanLengths).slice(0, a).reduce((e, t) => e + t, 0)
    };
  }
  if (t) {
    const {
      video: {
        size: e,
        duration: n
      },
      secondsToDownload: r
    } = t;
    const a = Math.max(e * r / n, 131072);
    return {
      start: 0,
      end: Math.ceil(a / i.BLOCK_SIZE) * i.BLOCK_SIZE - 1
    };
  }
  return null;
};
var r = require("./713713.js");
var i = require("./98516.js");