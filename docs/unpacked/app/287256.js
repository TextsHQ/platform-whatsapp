Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnexpectedNonNewsletterJidError = exports.UnexpectedNonNewsletterChatError = exports.NewsletterMediaUploadError = exports.MissingNewsletterServerIdError = undefined;
var r = require("./477689.js");
class i extends (0, r.customError)("UnexpectedNonNewsletterJidError") {}
exports.UnexpectedNonNewsletterJidError = i;
class a extends (0, r.customError)("UnexpectedNonNewsletterJidError") {}
exports.UnexpectedNonNewsletterChatError = a;
class o extends (0, r.customError)("MissingNewsletterServerIdError") {}
exports.MissingNewsletterServerIdError = o;
class s extends (0, r.customError)("NewsletterMediaUploadError") {}
exports.NewsletterMediaUploadError = s;