var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDeleteNotification = function (e) {
  let {
    chat: t
  } = e;
  if ((0, i.isCommunityAnnouncementGroup)(t)) {
    return a.fbt._("This community is no longer available", null, {
      hk: "3e98vZ"
    });
  }
  if ((0, i.isSupportGroup)(t)) {
    return a.fbt._("This chat has been closed", null, {
      hk: "4v1FVm"
    });
  } else {
    return a.fbt._("This group has ended", null, {
      hk: "3LCAzO"
    });
  }
};
var i = require("./374660.js");
var a = require("../vendor/548360.js");
r(require("../vendor/667294.js"));