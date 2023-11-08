var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execNewsletterApiCmd = function (e) {
  const t = (0, i.getNewsletterDeeplinkGating)();
  switch (t) {
    case i.NewsletterCompanionGating.Enabled:
      switch (e.type) {
        case "view":
          (0, p.openNewsletterPreviewChat)(e.identifier, e.chatEntryPoint, e.serverId);
          return Promise.resolve();
        case "create":
          (0, d.openNewsletterCreationFlow)({
            tosAcceptCallback: e => r.DrawerManager.openDrawerLeft(h.default.createElement(s.NewsletterTabFlowLoadable, {
              initialStep: c.NewsletterTabFlowStep.CreateNewsletter,
              adminFunnelLogger: e
            }), {
              focusType: o.FocusType.TABBABLE
            })
          });
          return Promise.resolve();
        case "directory":
          (0, f.openNewsletterDirectory)({
            tosAcceptCallback: () => r.DrawerManager.openDrawerLeft(h.default.createElement(s.NewsletterTabFlowLoadable, {
              initialStep: c.NewsletterTabFlowStep.NewsletterDirectory,
              directoryEntryPoint: m.CHANNEL_DIRECTORY_ENTRY_POINT.DEEP_LINK
            }), {
              focusType: o.FocusType.TABBABLE
            })
          });
          return Promise.resolve();
        default:
          e.type;
          __LOG__(4, undefined, new Error())`[execNewsletterApiCmd] Unsupported type ${e.type}`;
          return Promise.resolve();
      }
    default:
      (function (e) {
        l.ModalManager.open(h.default.createElement(u.NewsletterNotAvailableModal, {
          gating: e
        }));
      })(t);
      return Promise.resolve();
  }
};
var r = require("../app/900316.js");
var o = require("../app/299950.js");
var l = require("../app/114850.js");
var i = require("../app/73225.js");
var u = require("./745934.js");
var s = require("./163441.js");
var c = require("./286832.js");
var d = require("./246556.js");
var f = require("./195627.js");
var p = require("./60249.js");
var m = require("./320390.js");
var h = a(require("../vendor/667294.js"));