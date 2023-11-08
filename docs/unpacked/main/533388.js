var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerMakerText = exports.QuickRepliesText = exports.PollText = exports.PhotosAndVideosText = exports.OrderText = exports.DocumentText = exports.ContactText = exports.CatalogText = exports.CameraText = undefined;
var r = require("../app/72696.js");
var o = require("../vendor/548360.js");
a(require("../vendor/667294.js"));
exports.CameraText = () => o.fbt._("Camera", null, {
  hk: "1AmyYx"
});
exports.CatalogText = () => o.fbt._("Catalog", null, {
  hk: "4o6ci2"
});
exports.ContactText = () => o.fbt._("Contact", null, {
  hk: "1EQSSZ"
});
exports.DocumentText = () => o.fbt._("Document", null, {
  hk: "3ExOut"
});
exports.OrderText = () => (0, r.isOrderContentOptimizationEnabled)() ? o.fbt._("Charge", null, {
  hk: "1jZJeQ"
}) : o.fbt._("Order", null, {
  hk: "1EGPeJ"
});
exports.PhotosAndVideosText = () => o.fbt._("Photos & Videos", null, {
  hk: "ZW4y9"
});
exports.PollText = () => o.fbt._("Poll", null, {
  hk: "1PlYYp"
});
exports.QuickRepliesText = () => o.fbt._("Quick Replies", null, {
  hk: "3VBzfb"
});
exports.StickerMakerText = () => o.fbt._("New Sticker", null, {
  hk: "3yYRSJ"
});