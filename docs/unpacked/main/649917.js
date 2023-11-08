var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vcardFromContactModel = function (e) {
  var t;
  const n = s((0, i.getMaybeMeUser)() ? (0, l.getDisplayName)(e) : (0, l.getFormattedName)(e));
  const a = [`X-WA-LID:${String((0, o.getUserid)(e))}`, `X-WA-LID-DISPLAY-NAME:${String(e.displayNameLID)}`];
  const r = [`TEL;type=CELL;waid=${String((0, o.getUserid)(e))}:${(0, u.widToFormattedUser)((0, o.getUserid)(e))}`];
  const d = ["BEGIN:VCARD", "VERSION:3.0", `N:${c(e)}`, `FN:${n}`, ...(e.id.isLid() ? a : r), e.isBusiness ? `X-WA-BIZ-NAME:${n}` : null, ((t = e.businessProfile) === null || t === undefined ? undefined : t.description) ? `X-WA-BIZ-DESCRIPTION:${s(e.businessProfile.description)}` : null, "END:VCARD"].filter(Boolean);
  return {
    displayName: n,
    vcard: d.join("\n"),
    isMultiVcard: false
  };
};
var r = a(require("../vendor/763105.js"));
var o = require("../app/660666.js");
var l = require("../app/714574.js");
var i = require("../app/459857.js");
var u = require("../app/931019.js");
function s(e) {
  if (e) {
    return e.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,");
  } else {
    return "";
  }
}
function c(e) {
  const t = (0, r.default)((0, l.getFormattedName)(e).split((0, l.getFormattedShortName)(e)));
  const n = t.length ? t[0].trim() : undefined;
  const a = n ? (0, l.getFormattedShortName)(e) : (0, l.getFormattedName)(e);
  return `${s(n)};${s(a)};;;`;
}