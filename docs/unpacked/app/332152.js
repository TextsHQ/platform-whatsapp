var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logFingerprintToWam = function () {
  const e = a.default.getAutoToolsProperties();
  const t = {
    webcDocumentWebdriverEvaluate: e.data.dKeys.__webdriver_evaluate,
    webcDocumentSeleniumEvaluate: e.data.dKeys.__selenium_evaluate,
    webcDocumentWebdriverScriptFunction: e.data.dKeys.__webdriver_script_function,
    webcDocumentWebdriverScriptFunc: e.data.dKeys.__webdriver_script_func,
    webcDocumentWebdriverScriptFn: e.data.dKeys.__webdriver_script_fn,
    webcDocumentFxdriverEvaluate: e.data.dKeys.__fxdriver_evaluate,
    webcDocumentDriverUnwrapped: e.data.dKeys.__driver_unwrapped,
    webcDocumentWebdriverUnwrapped: e.data.dKeys.__webdriver_unwrapped,
    webcDocumentDriverEvaluate: e.data.dKeys.__driver_evaluate,
    webcDocumentSeleniumUnwrapped: e.data.dKeys.__selenium_unwrapped,
    webcDocumentFxdriverUnwrapped: e.data.dKeys.__fxdriver_unwrapped,
    webcDocumentElementAttrSelenium: e.data.dElKeys.selenium,
    webcDocumentElementAttrWebdriver: e.data.dElKeys.webdriver,
    webcDocumentElementAttrDriver: e.data.dElKeys.driver,
    webcWindowPhantom: e.data.wKeys._phantom,
    webcWindowNightmare: e.data.wKeys.__nightmare,
    webcWindowSelenium: e.data.wKeys._selenium,
    webcWindowCallphantom: e.data.wKeys.callPhantom,
    webcWindowCallselenium: e.data.wKeys.callSelenium,
    webcWindowSeleniumIdeRecorder: e.data.wKeys._Selenium_IDE_Recorder,
    webcWindowNavigatorWebdriver: e.data.wKeys.wd === true ? i.WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE.TRUE : e.data.wKeys.wd === false ? i.WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE.FALSE : i.WEBC_WINDOW_NAVIGATOR_WEBDRIVER_TYPE.UNDEFINED
  };
  new o.WebcFingerprintWamEvent(t).commit();
};
var i = require("./753308.js");
var a = r(require("./552652.js"));
var o = require("./272508.js");