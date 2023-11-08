var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.businessProfileFromDbRow = p;
exports.businessProfileToDbRow = f;
exports.createOrMergeBusinessProfileRecord = function () {
  return d.apply(this, arguments);
};
exports.getBusinessProfileRecord = function () {
  return c.apply(this, arguments);
};
exports.getBusinessProfileRow = l;
var i = r(require("../vendor/348926.js"));
var a = require("./37237.js");
var o = require("./153194.js");
var s = require("./669050.js");
function l() {
  return u.apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e) {
    return (0, o.getBusinessProfileTable)().get(e);
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = yield l(e);
    if (t) {
      return p(t);
    } else {
      return null;
    }
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = f(e);
    yield (0, o.getBusinessProfileTable)().createOrMerge(t.id, t);
  })).apply(this, arguments);
}
function p(e) {
  const {
    commandsDescription: t
  } = e;
  const n = (0, s.createWid)(e.id);
  const r = a.BizBotAutomatedType.cast(e.automatedType);
  const i = a.BotWelcomeMsgProtocolModeType.cast(e.welcomeMsgProtocolMode);
  let o;
  let l;
  if (e.prompts != null) {
    try {
      o = JSON.parse(e.prompts);
      if (!Array.isArray(o)) {
        o = null;
        __LOG__(4, undefined, new Error(), true)`businessProfileFromDbRow: prompts are not an array`;
        SEND_LOGS("businessProfileFromDbRow: prompts are not an array");
      }
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`businessProfileFromDbRow: prompts parsing failed`;
      SEND_LOGS("businessProfileFromDbRow: prompts parsing failed");
    }
  }
  if (e.commands != null) {
    try {
      l = JSON.parse(e.commands);
      if (!Array.isArray(l)) {
        l = null;
        __LOG__(4, undefined, new Error(), true)`businessProfileFromDbRow: commands are not an array`;
        SEND_LOGS("businessProfileFromDbRow: commands are not an array");
      }
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`businessProfileFromDbRow: commands parsing failed`;
      SEND_LOGS("businessProfileFromDbRow: commands parsing failed");
    }
  }
  return {
    id: n,
    automatedType: r,
    welcomeMsgProtocolMode: i,
    prompts: o,
    commands: l,
    commandsDescription: t
  };
}
function f(e) {
  const {
    commandsDescription: t
  } = e;
  const n = e.id.toString();
  let r;
  let i;
  if (e.automatedType) {
    r = e.automatedType;
  }
  if (e.welcomeMsgProtocolMode) {
    i = e.welcomeMsgProtocolMode;
  }
  return {
    id: n,
    automatedType: r,
    welcomeMsgProtocolMode: i,
    prompts: e.prompts ? JSON.stringify(e.prompts) : undefined,
    commandsDescription: t,
    commands: e.commands ? JSON.stringify(e.commands) : undefined
  };
}