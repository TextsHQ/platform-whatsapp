Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterPictureMetadataMixin = function (e) {
  const t = (0, a.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, a.mapChildrenWithTag)(e, "picture", 0, 2, o);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    picture: n.value
  });
};
exports.parseNewsletterPictureMetadataPicture = o;
var r = require("./135781.js");
var i = require("./968523.js");
var a = require("./686310.js");
function o(e) {
  const t = (0, a.assertTag)(e, "picture");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseQueryPictureDirectPathOrMatchedOrEmptyResponseMixinGroup)(e);
  if (n.success) {
    return (0, r.makeResult)({
      queryPictureDirectPathOrMatchedOrEmptyResponseMixinGroup: n.value
    });
  } else {
    return n;
  }
}