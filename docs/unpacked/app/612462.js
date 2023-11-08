var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrapNewsletterBackend = function () {
  if (!(0, o.isNewsletterEnabled)()) {
    return;
  }
  if (_ != null) {
    __LOG__(2)`[newsletter-bootstrap] Bootstrap already ongoing, returning`;
    return _;
  }
  if ((0, f.getNewsletterWasBootstrapped)()) {
    return;
  }
  if ((0, o.isNewsletterEnabledOnPrimary)()) {
    _ = g();
    return _;
  }
  u.PrimaryFeatures.on("change:newsletter", () => {
    if ((0, o.isNewsletterEnabledOnPrimary)()) {
      _ = g();
      return _;
    }
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./15842.js");
var o = require("./73225.js");
var s = require("./380137.js");
var l = require("./415432.js");
var u = require("./805617.js");
var c = require("./316348.js");
var d = require("./555622.js");
var p = require("./126592.js");
var f = require("./673168.js");
let _ = null;
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* () {
    __LOG__(2)`[newsletter-bootstrap] Bootstrap started`;
    const e = d.QPL.markerStart(c.QuickLogMarkerId.NEWSLETTER_BOOSTRAP);
    l.NewsletterLoadingStageManager.start();
    try {
      yield (0, p.queryAndUpdateAllNewsletterMetadataAction)(p.NewsletterMetadataUpdateEntryPoint.Bootstrap, {
        messageCount: 1,
        addSystemMsgs: true,
        qplEvent: e
      });
      if ((0, o.isNewsletterReactionEnabled)()) {
        yield (0, s.getMyNewsletterAddOnsJob)({
          count: 5000
        }).catch(() => {
          __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Failed to retrieve my reactions on bootstrap`;
          SEND_LOGS("newsletter-bootstrap-my-reactions-failed", 1, "newsletter");
        });
      }
      (0, f.setNewsletterWasBootstrapped)();
      l.NewsletterLoadingStageManager.end();
      e.end(a.QuickLogActionType.SUCCESS);
      __LOG__(2)`[newsletter-bootstrap] Bootstrap completed`;
    } catch (t) {
      e.end(a.QuickLogActionType.FAIL);
      l.NewsletterLoadingStageManager.fail();
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter-bootstrap] Bootstrap failed`;
      SEND_LOGS("newsletter-bootstrap-failed", 1, "newsletter");
    } finally {
      _ = null;
    }
  })).apply(this, arguments);
}