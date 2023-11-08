Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactUsSessionWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./980611.js");
const {
  BOOLEAN: o,
  NUMBER: l,
  STRING: i,
  TIMER: u
} = a.TYPES;
const s = (0, a.defineEvents)({
  ContactUsSession: [470, {
    contactUsAutomaticEmail: [3, o],
    contactUsExitState: [1, r.CONTACT_US_EXIT_STATE],
    contactUsFaq: [2, o],
    contactUsLogs: [4, o],
    contactUsMenuFaqT: [12, u],
    contactUsOutage: [5, o],
    contactUsOutageEmail: [6, o],
    contactUsScreenshotC: [19, l],
    contactUsT: [11, u],
    languageCode: [21, i]
  }, [1, 1, 1], "regular"]
});
exports.ContactUsSessionWamEvent = s;