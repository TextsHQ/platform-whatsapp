var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDescriptionNotification = function (e) {
  let {
    author: author,
    authorClickable: authorClickable,
    isParentGroup: isParentGroup = false,
    shouldFormatAsLastMsg: shouldFormatAsLastMsg = false
  } = e;
  if (shouldFormatAsLastMsg) {
    if ((0, a.isMe)(author)) {
      if (isParentGroup) {
        return o.fbt._("You changed the community description", null, {
          hk: "17mic3"
        });
      } else {
        return o.fbt._("You changed the group description", null, {
          hk: "1wezEo"
        });
      }
    } else if (authorClickable != null) {
      if (isParentGroup) {
        return o.fbt._("{user_name} changed the community description", [o.fbt._param("user_name", authorClickable)], {
          hk: "2tSLBs"
        });
      } else {
        return o.fbt._("{user_name} changed the group description", [o.fbt._param("user_name", authorClickable)], {
          hk: "4bc4fs"
        });
      }
    } else if (isParentGroup) {
      return o.fbt._("A participant changed the community description", null, {
        hk: "2rtAey"
      });
    } else {
      return o.fbt._("A participant changed the group description", null, {
        hk: "3Ji71I"
      });
    }
  }
  if ((0, a.isMe)(author)) {
    if (isParentGroup) {
      if (systemMessageActionTextStylingEnabled) {
        return o.fbt._("You changed the community description", null, {
          hk: "2ZR72p"
        });
      } else {
        return o.fbt._("You changed the community description. Click to view", null, {
          hk: "4lpFuM"
        });
      }
    } else if (systemMessageActionTextStylingEnabled) {
      return o.fbt._("You changed the group description", null, {
        hk: "15hF7V"
      });
    } else {
      return o.fbt._("You changed the group description. Click to view.", null, {
        hk: "44K01H"
      });
    }
  }
  if (authorClickable != null) {
    if (isParentGroup) {
      if (systemMessageActionTextStylingEnabled) {
        return o.fbt._("{user_name} changed the community description", [o.fbt._param("user_name", authorClickable)], {
          hk: "4mBEdZ"
        });
      } else {
        return o.fbt._("{user_name} changed the community description. Click to view", [o.fbt._param("user_name", authorClickable)], {
          hk: "2PaOdp"
        });
      }
    } else if (systemMessageActionTextStylingEnabled) {
      return o.fbt._("{user_name} changed the group description", [o.fbt._param("user_name", authorClickable)], {
        hk: "46ZqU8"
      });
    } else {
      return o.fbt._("{user_name} changed the group description. Click to view", [o.fbt._param("user_name", authorClickable)], {
        hk: "375pmb"
      });
    }
  }
  if (isParentGroup) {
    if (systemMessageActionTextStylingEnabled) {
      return o.fbt._("A participant changed the community description", null, {
        hk: "bod0C"
      });
    } else {
      return o.fbt._("A participant changed the community description. Click to view", null, {
        hk: "3urRw0"
      });
    }
  } else if (systemMessageActionTextStylingEnabled) {
    return o.fbt._("A participant changed the group description", null, {
      hk: "4Fk1Dx"
    });
  } else {
    return o.fbt._("A participant changed the group description. Click to view", null, {
      hk: "28By3A"
    });
  }
};
var i = require("./108590.js");
var a = require("./526424.js");
var o = require("../vendor/548360.js");
r(require("../vendor/667294.js"));
const systemMessageActionTextStylingEnabled = (0, i.systemMessageActionTextStylingEnabled)();