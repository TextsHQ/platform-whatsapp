Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBizPrivacyInfoString = function (e) {
  switch (e) {
    case a.WebMessageInfo$BizPrivacyStatus.E2EE:
      return r.fbt._("This message was secured with end-to-end encryption.", null, {
        hk: "23E1FN"
      });
    case a.WebMessageInfo$BizPrivacyStatus.BSP:
      return r.fbt._("This business worked with other companies to manage this message.", null, {
        hk: "1COrne"
      });
    case a.WebMessageInfo$BizPrivacyStatus.BSP_AND_FB:
    case a.WebMessageInfo$BizPrivacyStatus.FB:
      return r.fbt._("This business used a secure service from Meta to manage this message.", null, {
        hk: "4qnSf0"
      });
  }
};
var a = require("../app/968923.js");
var r = require("../vendor/548360.js");