Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncBotProfileProtocol = undefined;
exports.botProfileParser = function (e) {
  var t;
  e.assertTag("bot");
  const n = e.maybeChild("error");
  if (n) {
    return {
      errorCode: n.attrInt("code"),
      errorText: n.attrString("text")
    };
  }
  const r = e.child("profile");
  const i = r.child("name").contentString();
  const a = r.child("attributes").contentString();
  const o = r.child("description").contentString();
  const s = r.child("category").contentString();
  const l = r.maybeChild("default");
  const u = (l == null ? undefined : l.contentString()) === "true";
  const c = function (e) {
    if (e == null) {
      return [];
    }
    const t = [];
    e.forEachChildWithTag("prompt", e => {
      var n;
      var r;
      const i = e.maybeChild("emoji");
      const a = (n = i == null ? undefined : i.contentString()) !== null && n !== undefined ? n : "";
      const o = e.maybeChild("text");
      const s = (r = o == null ? undefined : o.contentString()) !== null && r !== undefined ? r : "";
      t.push({
        emoji: a,
        text: s
      });
    });
    return t;
  }(r.maybeChild("prompts"));
  const d = (t = r.maybeAttrString("persona_id")) !== null && t !== undefined ? t : "";
  const p = r.maybeChild("commands");
  const {
    commands: f,
    commandsDescription: _
  } = function (e) {
    var t;
    if (e == null) {
      return {
        commands: [],
        commandsDescription: ""
      };
    }
    const n = [];
    const r = e.maybeChild("description");
    const i = (t = r == null ? undefined : r.contentString()) !== null && t !== undefined ? t : "";
    e.forEachChildWithTag("command", e => {
      var t;
      var r;
      const i = e.maybeChild("name");
      const a = (t = i == null ? undefined : i.contentString()) !== null && t !== undefined ? t : "";
      const o = e.maybeChild("description");
      const s = (r = o == null ? undefined : o.contentString()) !== null && r !== undefined ? r : "";
      n.push({
        name: a,
        description: s
      });
    });
    return {
      commands: n,
      commandsDescription: i
    };
  }(p);
  return {
    name: i,
    attributes: a,
    description: o,
    category: s,
    isDefault: u,
    prompts: c,
    personaId: d,
    commands: f,
    commandsDescription: _
  };
};
var r = require("./716358.js");
exports.USyncBotProfileProtocol = class {
  getName() {
    return "bot";
  }
  getQueryElement() {
    return (0, r.wap)("bot", null, (0, r.wap)("profile", {
      v: "1"
    }));
  }
  getUserElement(e) {
    const t = e.getPersonaId();
    return (0, r.wap)("bot", null, (0, r.wap)("profile", {
      persona_id: t != null ? (0, r.CUSTOM_STRING)(t) : r.DROP_ATTR
    }));
  }
};