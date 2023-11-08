var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupSuggestionsApproveLimit = function (e) {
  const {
    onOK: t
  } = e;
  return u.default.createElement(r.ConfirmPopup, {
    title: i.fbt._("Community is full", null, {
      hk: "MqwTq"
    }),
    testid: "approve-suggestions-limit-popup",
    onOK: () => {
      s();
      t();
    },
    okText: i.fbt._("Manage groups", null, {
      hk: "3bqfyZ"
    }),
    onCancel: s
  }, i.fbt._("You cannot add more groups because this community is full. To add more, you must remove groups.", null, {
    hk: "1SKP8u"
  }));
};
exports.confirmCommunityFull = function (e, t) {
  return new Promise(n => {
    const a = e === 0 ? i.fbt._("No pending group suggestions will be approved because this community is full.", null, {
      hk: "4sfN35"
    }) : i.fbt._({
      "*": "Only {available} of {pending_suggestions} pending group suggestions will be approved because this community is full.",
      _1: "Only {available} of 1 pending group suggestion will be approved because this community is full."
    }, [i.fbt._plural(t, "pending_suggestions"), i.fbt._param("available", o.default.n(e))], {
      hk: "2AaRC2"
    });
    l.ModalManager.open(u.default.createElement(r.ConfirmPopup, {
      title: i.fbt._("Community is full", null, {
        hk: "3C9sbo"
      }),
      okText: e !== 0 ? i.fbt._("Approve", null, {
        hk: "YoNtY"
      }) : undefined,
      onOK: () => {
        n(true);
        s();
      },
      onCancel: () => {
        n(false);
        s();
      }
    }, a));
  });
};
var r = require("../app/103440.js");
var o = a(require("../app/932325.js"));
var l = require("../app/114850.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
function s() {
  l.ModalManager.close();
}