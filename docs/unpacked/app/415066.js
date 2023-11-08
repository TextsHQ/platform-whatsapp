Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PsPhoneNumberHyperlinkWamEvent = undefined;
var r = require("./901032.js");
var i = require("./421778.js");
const {
  BOOLEAN: a,
  INTEGER: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  PsPhoneNumberHyperlink: [3266, {
    isPhoneNumHyperlinkOwner: [1, a],
    phoneNumHyperlinkAction: [2, i.PHONE_NUM_HYPERLINK_ACTION_TYPE],
    phoneNumberStatusOnWa: [3, a],
    sequenceNumber: [4, o]
  }, [1, 1, 1], "private", 113760892]
});
exports.PsPhoneNumberHyperlinkWamEvent = s;