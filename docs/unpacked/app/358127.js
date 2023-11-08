Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaPickerWamEvent = undefined;
var r = require("./901032.js");
var i = require("./169467.js");
var a = require("./501329.js");
var o = require("./684290.js");
const {
  BOOLEAN: s,
  INTEGER: l,
  STRING: u,
  TIMER: c
} = r.TYPES;
const d = (0, r.defineEvents)({
  MediaPicker: [1038, {
    audienceSelectorClicked: [24, s],
    audienceSelectorUpdated: [25, s],
    chatRecipients: [16, l],
    isViewOnce: [22, s],
    mediaPickerChanged: [4, l],
    mediaPickerCroppedRotated: [10, l],
    mediaPickerDeleted: [3, l],
    mediaPickerDrawing: [11, l],
    mediaPickerFilter: [18, l],
    mediaPickerHasLocationSticker: [26, s],
    mediaPickerLikeDoc: [19, l],
    mediaPickerNotLikeDoc: [20, l],
    mediaPickerOrigin: [14, i.MEDIA_PICKER_ORIGIN_TYPE],
    mediaPickerOriginThirdParty: [21, s],
    mediaPickerSent: [2, l],
    mediaPickerSentUnchanged: [5, l],
    mediaPickerSessionId: [29, u],
    mediaPickerStickers: [12, l],
    mediaPickerT: [15, c],
    mediaPickerText: [13, l],
    mediaType: [1, o.MEDIA_TYPE],
    motionPhotoImpressionCount: [31, l],
    motionPhotoSentCount: [32, l],
    photoGalleryDurationT: [23, c],
    photoQualitySetting: [27, a.MEDIA_QUALITY],
    pickerSessionId: [30, l],
    statusRecipients: [17, l],
    videoQualitySetting: [28, a.MEDIA_QUALITY]
  }, [1, 1, 1], "regular"]
});
exports.MediaPickerWamEvent = d;