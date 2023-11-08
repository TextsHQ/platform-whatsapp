var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    maxSubgroups: t,
    isCommunityCreation: n = false
  } = e;
  if (n) {
    return i.default.createElement(r.ConfirmPopup, {
      testid: "max-subgroup-count-creation-popup",
      onOK: () => o.ModalManager.close()
    }, l.fbt._({
      "*": "You can only add {max_subgroup_count} groups when creating a community. You can add more after this community is created.",
      _1: "You can only add 1 group when creating a community. You can add more after this community is created."
    }, [l.fbt._plural(t - 1, "max_subgroup_count")], {
      hk: "1bJsFe"
    }));
  }
  return i.default.createElement(r.ConfirmPopup, {
    testid: "max-subgroup-count-popup",
    onOK: () => o.ModalManager.close()
  }, l.fbt._({
    "*": "Limit of {max_subgroups} groups reached.",
    _1: "Limit of 1 group reached."
  }, [l.fbt._plural(t - 1, "max_subgroups")], {
    hk: "1qE7sf"
  }));
};
var r = require("../app/103440.js");
var o = require("../app/114850.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));