Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeSignedKeyIndexBytes = function (e, t) {
  let n;
  let o;
  try {
    n = (0, a.decodeProtobuf)(i.ADVSignedKeyIndexListSpec, t);
  } catch (e) {
    return null;
  }
  if (!(0, r.verifyKeyIndexListAccountSignature)(n, e)) {
    return null;
  }
  try {
    o = (0, a.decodeProtobuf)(i.ADVKeyIndexListSpec, n.details);
  } catch (e) {
    return null;
  }
  const {
    timestamp: s,
    rawId: l,
    validIndexes: u,
    currentIndex: c,
    accountType: d
  } = o;
  if (s == null) {
    return null;
  }
  if (l == null) {
    return null;
  }
  return {
    timestamp: s,
    rawId: l,
    validIndexes: u,
    currentIndex: c,
    accountType: d
  };
};
var r = require("./678002.js");
var i = require("./962559.js");
var a = require("./394629.js");