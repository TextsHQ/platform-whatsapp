Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (e < 32) {
    return r.SIZE_BUCKET.LT32;
  }
  if (e < 64) {
    return r.SIZE_BUCKET.LT64;
  }
  if (e < 128) {
    return r.SIZE_BUCKET.LT128;
  }
  if (e < 256) {
    return r.SIZE_BUCKET.LT256;
  }
  if (e < 512) {
    return r.SIZE_BUCKET.LT512;
  }
  if (e < 1024) {
    return r.SIZE_BUCKET.LT1024;
  }
  if (e < 1500) {
    return r.SIZE_BUCKET.LT1500;
  }
  if (e < 2000) {
    return r.SIZE_BUCKET.LT2000;
  }
  if (e < 2500) {
    return r.SIZE_BUCKET.LT2500;
  }
  if (e < 3000) {
    return r.SIZE_BUCKET.LT3000;
  }
  if (e < 3500) {
    return r.SIZE_BUCKET.LT3500;
  }
  if (e < 4000) {
    return r.SIZE_BUCKET.LT4000;
  }
  if (e < 4500) {
    return r.SIZE_BUCKET.LT4500;
  }
  if (e < 5000) {
    return r.SIZE_BUCKET.LT5000;
  }
  return r.SIZE_BUCKET.LARGEST_BUCKET;
};
var r = require("./147402.js");