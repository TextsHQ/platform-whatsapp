var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  (0, p.useModelValues)(e.chatstate, ["id", "type", "deny", "t"]);
  const t = (0, p.useModelValues)(e.groupMetadata, ["announce", "participants", "groupType", "size", "id"]);
  const n = (0, p.useModelValues)(e.presence, ["forceDisplay", "withholdDisplayStage"]);
  (0, f.useEffect)(() => {
    if (!(t.groupType !== u.GroupType.LINKED_ANNOUNCEMENT_GROUP || !t.participants.iAmMember() || t.participants.iAmAdmin() || t.size)) {
      (0, i.queryAndUpdateGroupMetadataById)(t.id);
    }
  }, []);
  (0, f.useEffect)(() => {
    if (e.assignmentSubtitle != null && n.withholdDisplayStage === c.WithholdDisplayStage.ChatAssignment) {
      (0, r.logChatStatusTickerShown)(e.chatId);
    }
  }, [e.chatId, n.withholdDisplayStage, e.assignmentSubtitle]);
  const a = (0, l.elevatedPushNamesM2Enabled)(o.ChatCollection.get(e.chatId));
  let m;
  let h;
  if (n.withholdDisplayStage === c.WithholdDisplayStage.Info) {
    m = e.placeholder;
  } else if (e.assignmentSubtitle != null && n.withholdDisplayStage === c.WithholdDisplayStage.ChatAssignment) {
    m = e.assignmentSubtitle;
  } else {
    const e = t.groupType === u.GroupType.LINKED_ANNOUNCEMENT_GROUP ? {
      text: d.fbt._("Announcements", null, {
        hk: "4mmLYA"
      })
    } : n.getGroupSubtitleText({
      elevatedPushNamesEnabled: a
    });
    if (e != null) {
      m = e.text;
      h = e.ariaLabel;
    }
  }
  return f.default.createElement(s.default, {
    groupMetadata: t,
    overridingText: m,
    placeholder: e.placeholder,
    ariaLabel: h,
    location: e.location
  });
};
var r = require("../app/2772.js");
var o = require("../app/351053.js");
var l = require("../app/235630.js");
var i = require("../app/113269.js");
var u = require("../app/862159.js");
var s = a(require("./714540.js"));
var c = require("../app/576965.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var p = require("../app/655241.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}