Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcFingerprintWamEvent = undefined;
var r = require("./901032.js");
var i = require("./753308.js");
const {
  BOOLEAN: a,
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  WebcFingerprint: [1704, {
    webcCanvasFingerprint: [25, o],
    webcDocumentDriverEvaluate: [9, a],
    webcDocumentDriverUnwrapped: [7, a],
    webcDocumentElementAttrDriver: [14, a],
    webcDocumentElementAttrSelenium: [12, a],
    webcDocumentElementAttrWebdriver: [13, a],
    webcDocumentFxdriverEvaluate: [6, a],
    webcDocumentFxdriverUnwrapped: [11, a],
    webcDocumentSeleniumEvaluate: [2, a],
    webcDocumentSeleniumUnwrapped: [10, a],
    webcDocumentWebdriverEvaluate: [1, a],
    webcDocumentWebdriverScriptFn: [5, a],
    webcDocumentWebdriverScriptFunc: [4, a],
    webcDocumentWebdriverScriptFunction: [3, a],
    webcDocumentWebdriverUnwrapped: [8, a],
    webcWebglFingerprint: [24, o],
    webcWebglRenderer: [23, o],
    webcWebglVendor: [22, o],
    webcWindowSeleniumIdeRecorder: [20, a],
    webcWindowCallphantom: [18, a],
    webcWindowCallselenium: [19, a],
    webcWindowNavigatorWebdriver: [21, i.WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE],
    webcWindowNightmare: [16, a],
    webcWindowPhantom: [15, a],
    webcWindowSelenium: [17, a]
  }, [1, 1, 1], "regular"]
});
exports.WebcFingerprintWamEvent = s;