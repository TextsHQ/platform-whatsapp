Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaTooLargeError = exports.MediaNotFoundError = exports.MediaInvalidError = exports.MMSUnauthorizedError = exports.MMSThrottleError = exports.MMSForbiddenError = undefined;
var r = require("./791357.js");
class i extends r.HttpStatusCodeError {
  constructor(e) {
    super(404, e);
    this.name = "MediaNotFoundError";
  }
}
exports.MediaNotFoundError = i;
class a extends r.HttpStatusCodeError {
  constructor(e) {
    super(413, e);
    this.name = "MediaTooLargeError";
  }
}
exports.MediaTooLargeError = a;
class o extends r.HttpStatusCodeError {
  constructor(e) {
    super(415, e);
    this.name = "MediaInvalidError";
  }
}
exports.MediaInvalidError = o;
class s extends r.HttpStatusCodeError {
  constructor(e) {
    super(401, e);
    this.name = "MMSUnauthorizedError";
  }
}
exports.MMSUnauthorizedError = s;
class l extends r.HttpStatusCodeError {
  constructor(e) {
    super(403, e);
    this.name = "MMSForbiddenError";
  }
}
exports.MMSForbiddenError = l;
class u extends r.HttpStatusCodeError {
  constructor(e) {
    super(507, e);
    this.name = "MMSThrottleError";
  }
}
exports.MMSThrottleError = u;