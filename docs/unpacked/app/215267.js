var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChatlistDropdownBtnLabel = function () {
  const e = (0, i.getUserDesktopOs)();
  if (e == null) {
    return null;
  }
  switch (e) {
    case i.UserDesktopOs.WINDOWS:
      return a.fbt._("Get WhatsApp for Windows", null, {
        hk: "klV2a"
      });
    case i.UserDesktopOs.MACOS:
      return a.fbt._("Get WhatsApp for Mac", null, {
        hk: "4jJumU"
      });
  }
};
exports.getDesktopAppDownloadBtnLabel = function () {
  return a.fbt._("Get the app", null, {
    hk: "1MGfc8"
  });
};
exports.getDesktopUpsellDownloadWhatsAppTitle = function () {
  const e = (0, i.getUserDesktopOs)();
  if (e == null) {
    return null;
  }
  switch (e) {
    case i.UserDesktopOs.WINDOWS:
      return a.fbt._("Download WhatsApp for Windows", null, {
        hk: "qp5VS"
      });
    case i.UserDesktopOs.MACOS:
      return a.fbt._("Download WhatsApp for Mac", null, {
        hk: "1zUXj1"
      });
  }
};
exports.getDesktopUpsellIntroPanelText = function () {
  const e = (0, i.getUserDesktopOs)();
  if (e == null) {
    return null;
  }
  switch (e) {
    case i.UserDesktopOs.WINDOWS:
      return a.fbt._("Make calls, share your screen and get a faster experience when you download the Windows app.", null, {
        hk: "SxM3X"
      });
    case i.UserDesktopOs.MACOS:
      return a.fbt._("Make calls, share your screen and get a faster experience when you download the Mac app.", null, {
        hk: "431CP3"
      });
  }
};
exports.getDesktopUpsellToastbarLabel = function () {
  const e = (0, i.getUserDesktopOs)();
  if (e == null) {
    return null;
  }
  switch (e) {
    case i.UserDesktopOs.WINDOWS:
      return a.fbt._("Get WhatsApp for Windows", null, {
        hk: "43ksJJ"
      });
    case i.UserDesktopOs.MACOS:
      return a.fbt._("Get WhatsApp for Mac", null, {
        hk: "4cCu5h"
      });
  }
};
var i = require("./787827.js");
var a = require("../vendor/548360.js");
r(require("../vendor/667294.js"));