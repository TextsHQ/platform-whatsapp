var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDescriptionNotification = function (e) {
  let {
    author: t,
    authorClickable: n,
    isParentGroup: r = false,
    shouldFormatAsLastMsg: i = false
  } = e;
  if (i) {
    if ((0, a.isMe)(t)) {
      if (r) {
        return o.fbt._("You changed the community description", null, {
          hk: "17mic3"
        });
      } else {
        return o.fbt._("You changed the group description", null, {
          hk: "1wezEo"
        });
      }
    } else if (n != null) {
      if (r) {
        return o.fbt._("{user_name} changed the community description", [o.fbt._param("user_name", n)], {
          hk: "2tSLBs"
        });
      } else {
        return o.fbt._("{user_name} changed the group description", [o.fbt._param("user_name", n)], {
          hk: "4bc4fs"
        });
      }
    } else if (r) {
      return o.fbt._("A participant changed the community description", null, {
        hk: "2rtAey"
      });
    } else {
      return o.fbt._("A participant changed the group description", null, {
        hk: "3Ji71I"
      });
    }
  }
  if ((0, a.isMe)(t)) {
    if (r) {
      if (s) {
        return o.fbt._("You changed the community description", null, {
          hk: "2ZR72p"
        });
      } else {
        return o.fbt._("You changed the community description. Click to view", null, {
          hk: "4lpFuM"
        });
      }
    } else if (s) {
      return o.fbt._("You changed the group description", null, {
        hk: "15hF7V"
      });
    } else {
      return o.fbt._("You changed the group description. Click to view.", null, {
        hk: "44K01H"
      });
    }
  }
  if (n != null) {
    if (r) {
      if (s) {
        return o.fbt._("{user_name} changed the community description", [o.fbt._param("user_name", n)], {
          hk: "4mBEdZ"
        });
      } else {
        return o.fbt._("{user_name} changed the community description. Click to view", [o.fbt._param("user_name", n)], {
          hk: "2PaOdp"
        });
      }
    } else if (s) {
      return o.fbt._("{user_name} changed the group description", [o.fbt._param("user_name", n)], {
        hk: "46ZqU8"
      });
    } else {
      return o.fbt._("{user_name} changed the group description. Click to view", [o.fbt._param("user_name", n)], {
        hk: "375pmb"
      });
    }
  }
  if (r) {
    if (s) {
      return o.fbt._("A participant changed the community description", null, {
        hk: "bod0C"
      });
    } else {
      return o.fbt._("A participant changed the community description. Click to view", null, {
        hk: "3urRw0"
      });
    }
  } else if (s) {
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
const s = (0, i.systemMessageActionTextStylingEnabled)();