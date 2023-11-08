var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebOfflineResumeProgressToastbar = function () {
  const [e, t] = (0, g.default)(o.Cmd, "offline_progress_update", () => [u.OfflineMessageHandler.getOfflineDeliveryProgress(), u.OfflineMessageHandler.getOfflineMessageCount()], []);
  return h.default.createElement(d.WAWebToastbar, {
    wrapperXstyle: [f.uiPadding.all0, E.wrapper]
  }, h.default.createElement(r.Box, {
    xstyle: E.progressWrapper
  }, h.default.createElement(c.default, {
    value: e,
    className: s.default.progress
  })), h.default.createElement(l.FlexItem, {
    xstyle: E.textWrapper
  }, h.default.createElement(p.WDSTextMuted, {
    xstyle: E.textTitle
  }, m.fbt._("Syncing chats...", null, {
    hk: "283hyu"
  })), h.default.createElement(p.WDSTextSmall, {
    xstyle: E.textProgress
  }, m.fbt._({
    "*": "{processed-messages} of {total-messages} messages",
    _1: "{processed-messages} of {total-messages} message"
  }, [m.fbt._plural(t), m.fbt._param("processed-messages", i.default.n(Math.floor(e / 100 * t))), m.fbt._param("total-messages", i.default.n(t))], {
    hk: "3EvPZ7"
  }))));
};
var r = require("../app/58972.js");
var o = require("../app/780549.js");
var l = require("../app/690495.js");
var i = a(require("../app/932325.js"));
var u = require("../app/359484.js");
var s = a(require("./208719.js"));
var c = a(require("../app/525481.js"));
var d = require("./585589.js");
var f = require("../app/676345.js");
var p = require("../app/851488.js");
var m = require("../vendor/548360.js");
var h = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var g = a(require("../app/524578.js"));
const E = {
  wrapper: {
    minHeight: "btly6xw1",
    justifyContent: "ac2vgrno"
  },
  progressWrapper: {
    position: "lhggkp7q",
    width: "ln8gz9je",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    display: "p357zi0d"
  },
  textWrapper: {
    textAlign: "qfejxiq4"
  },
  textTitle: {
    fontSize: "dsh4tgtl"
  },
  textProgress: {
    fontSize: "lak21jic"
  }
};