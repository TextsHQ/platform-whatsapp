Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (e <= 33) {
    return r.CLIENT_GROUP_SIZE_BUCKET.SMALL;
  }
  if (e <= 65) {
    return r.CLIENT_GROUP_SIZE_BUCKET.MEDIUM;
  }
  if (e <= 129) {
    return r.CLIENT_GROUP_SIZE_BUCKET.LARGE;
  }
  if (e <= 257) {
    return r.CLIENT_GROUP_SIZE_BUCKET.EXTRA_LARGE;
  }
  if (e <= 513) {
    return r.CLIENT_GROUP_SIZE_BUCKET.XX_LARGE;
  }
  if (e <= 1025) {
    return r.CLIENT_GROUP_SIZE_BUCKET.LT1024;
  }
  if (e <= 1501) {
    return r.CLIENT_GROUP_SIZE_BUCKET.LT1500;
  }
  if (e <= 2001) {
    return r.CLIENT_GROUP_SIZE_BUCKET.LT2000;
  }
  if (e <= 2501) {
    return r.CLIENT_GROUP_SIZE_BUCKET.LT2500;
  }
  if (e <= 3001) {
    return r.CLIENT_GROUP_SIZE_BUCKET.LT3000;
  }
  if (e <= 3501) {
    return r.CLIENT_GROUP_SIZE_BUCKET.LT3500;
  }
  if (e <= 4001) {
    return r.CLIENT_GROUP_SIZE_BUCKET.LT4000;
  }
  if (e <= 4501) {
    return r.CLIENT_GROUP_SIZE_BUCKET.LT4500;
  }
  if (e <= 5001) {
    return r.CLIENT_GROUP_SIZE_BUCKET.LT5000;
  }
  return r.CLIENT_GROUP_SIZE_BUCKET.LARGEST_BUCKET;
};
var r = require("./749286.js");