Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logSessionEvent = function (e, t, n) {
  const r = new a.ContactUsSessionWamEvent({
    contactUsExitState: e,
    contactUsT: Math.ceil(self.performance.now() - t)
  });
  if (n) {
    r.contactUsAutomaticEmail = true;
    r.contactUsScreenshotC = n.numScreenshots;
  }
  r.commit();
};
var a = require("./864172.js");