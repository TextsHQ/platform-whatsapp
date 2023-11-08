Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberToPreciseSizeBucket = function (e) {
  if (e < 4) {
    return a.PRECISE_SIZE_BUCKET.LT4;
  }
  if (e < 8) {
    return a.PRECISE_SIZE_BUCKET.LT8;
  }
  if (e < 16) {
    return a.PRECISE_SIZE_BUCKET.LT16;
  }
  if (e < 32) {
    return a.PRECISE_SIZE_BUCKET.LT32;
  }
  if (e < 64) {
    return a.PRECISE_SIZE_BUCKET.LT64;
  }
  if (e < 128) {
    return a.PRECISE_SIZE_BUCKET.LT128;
  }
  if (e < 256) {
    return a.PRECISE_SIZE_BUCKET.LT256;
  }
  if (e < 512) {
    return a.PRECISE_SIZE_BUCKET.LT512;
  }
  if (e < 1000) {
    return a.PRECISE_SIZE_BUCKET.LT1000;
  }
  if (e < 1500) {
    return a.PRECISE_SIZE_BUCKET.LT1500;
  }
  if (e < 2000) {
    return a.PRECISE_SIZE_BUCKET.LT2000;
  }
  if (e < 2500) {
    return a.PRECISE_SIZE_BUCKET.LT2500;
  }
  if (e < 3000) {
    return a.PRECISE_SIZE_BUCKET.LT3000;
  }
  if (e < 3500) {
    return a.PRECISE_SIZE_BUCKET.LT3500;
  }
  if (e < 4000) {
    return a.PRECISE_SIZE_BUCKET.LT4000;
  }
  if (e < 4500) {
    return a.PRECISE_SIZE_BUCKET.LT4500;
  }
  if (e < 5000) {
    return a.PRECISE_SIZE_BUCKET.LT5000;
  }
  return a.PRECISE_SIZE_BUCKET.LARGEST_BUCKET;
};
var a = require("./900213.js");