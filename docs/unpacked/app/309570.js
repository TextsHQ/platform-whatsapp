Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsletterSubscribeQueue = exports.newsletterDeleteQueue = exports.newsletterCreationQueue = undefined;
var r = require("./652204.js");
const i = new r.PromiseQueue();
exports.newsletterCreationQueue = i;
const a = new r.PromiseQueue();
exports.newsletterSubscribeQueue = a;
const o = new r.PromiseQueue();
exports.newsletterDeleteQueue = o;