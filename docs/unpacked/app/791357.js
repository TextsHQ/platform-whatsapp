Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MmsDownloadFilehashMismatchError = exports.HttpTimedOutError = exports.HttpStatusCodeError = exports.HttpNetworkError = exports.HttpInvalidResponseError = undefined;
var r = require("./477689.js");
class i extends (0, r.customError)("HttpNetworkError") {}
exports.HttpNetworkError = i;
exports.HttpTimedOutError = class extends i {
  constructor() {
    super(...arguments);
    this.name = "HttpTimedOutError";
  }
};
class a extends (0, r.customError)("HttpStatusCodeError") {
  constructor(e, t, n) {
    super(`${t}: ${e}`);
    this.status = e;
  }
}
exports.HttpStatusCodeError = a;
class o extends (0, r.customError)("HttpInvalidResponseError") {
  constructor(e, t) {
    super(e);
  }
}
exports.HttpInvalidResponseError = o;
exports.MmsDownloadFilehashMismatchError = class extends o {
  constructor(e) {
    super("mmsDownload: filehash mismatch", e);
    this.name = "MmsDownloadFilehashMismatchError";
  }
};