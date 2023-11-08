var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t
  } = e;
  const n = c.default.createElement(u.WDSButtonSimplified, {
    onClick: () => {
      new o.SuspendedGroupDeleteWamEvent({
        deleteBtnSource: i.DELETE_SUSPENDED_GROUP_BTN.BLOCKED_COMPOSER_BTN
      }).commit();
      (0, l.openExitAndDeleteGroupModal)(t);
    },
    testid: "suspended-group-exit-delete-group-btn"
  }, s.fbt._("Delete group for me", null, {
    hk: "9wFxn"
  }));
  return c.default.createElement(r.FlexColumn, {
    align: "center"
  }, c.default.createElement("span", {
    className: (0, d.default)(f)
  }, s.fbt._("This group is no longer available", null, {
    hk: "3Trrkr"
  })), n);
};
var r = require("../app/690495.js");
var o = require("./12704.js");
var l = require("./983271.js");
var i = require("./395808.js");
var u = require("../app/617425.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
const f = {
  whiteSpace: "bbv8nyr4"
};