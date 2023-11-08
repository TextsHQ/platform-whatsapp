var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    showCreate: n = true
  } = e;
  const a = (0, m.useModelValues)(e.chat, ["groupMetadata"]);
  const h = (0, m.useModelValues)((0, r.default)(a.groupMetadata, "chat.groupMetadata"), ["displayedDesc", "groupType", "owner", "creation", "restrict", "participants", "support", "groupType"]);
  const g = (0, p.default)(h, ["change:desc"], () => h.displayedDesc);
  const E = h.owner && ((t = h.participants.get(h.owner)) === null || t === undefined ? undefined : t.contact);
  let v = null;
  if (E != null && n) {
    const e = [h.creation, (0, s.getFormattedName)(E), (0, u.getIsMe)(E)];
    v = h.groupType === c.GroupType.COMMUNITY ? l.Clock.communityCreatedByStr(...e) : l.Clock.groupCreatedByStr(...e);
  }
  const _ = (0, i.richCommunityDescriptionEnabled)();
  return f.default.createElement(o.default, {
    description: g,
    bulletPointsEnabled: _,
    chat: e.chat,
    showFullDescription: e.showFullDescription,
    editRestrictionText: e.editRestrictionText,
    testid: e.testid,
    containerTestId: e.containerTestId,
    emptyValuePlaceholder: e.emptyValuePlaceholder,
    creationString: v,
    canSetDescription: h.canSetDescription(),
    setDescriptionAction: d.setDesc
  });
};
var r = a(require("../app/670983.js"));
var o = a(require("./711367.js"));
var l = require("../app/63014.js");
var i = require("../app/174834.js");
var u = require("../app/660666.js");
var s = require("../app/714574.js");
var c = require("../app/862159.js");
var d = require("./790730.js");
var f = a(require("../vendor/667294.js"));
var p = a(require("../app/524578.js"));
var m = require("../app/655241.js");