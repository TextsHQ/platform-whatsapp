Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (t) {
    return i.UPLOAD_SOURCE_TYPE.OTHER;
  }
  switch (e) {
    case r.MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY:
      return i.UPLOAD_SOURCE_TYPE.GALLERY;
    case r.MEDIA_PICKER_ORIGIN_TYPE.MENU_CAMERA_CAPTURE:
      return i.UPLOAD_SOURCE_TYPE.CAMERA;
    case r.MEDIA_PICKER_ORIGIN_TYPE.PASTE:
      return i.UPLOAD_SOURCE_TYPE.SHARE;
    default:
      return i.UPLOAD_SOURCE_TYPE.OTHER;
  }
};
var r = require("./169467.js");
var i = require("./268682.js");