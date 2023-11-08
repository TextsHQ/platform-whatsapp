var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.broadcastMenu = function (e, t) {
  const n = [];
  n.push(E.default.createElement(c.DropdownItem, {
    key: "info",
    testid: "mi-broadcast-info",
    action: () => u.Cmd.chatInfoDrawer(e)
  }, g.fbt._("Broadcast list info", null, {
    hk: "1cXRzw"
  })));
  n.push(E.default.createElement(c.DropdownItem, {
    testid: "mi-select-messages",
    key: "select",
    action: t
  }, g.fbt._("Select messages", null, {
    hk: "40nxs"
  })));
  n.push(E.default.createElement(c.DropdownItem, {
    key: "clear",
    testid: "mi-clear",
    action: () => u.Cmd.clearChat(e)
  }, g.fbt._("Clear chat", null, {
    hk: "zjV3w"
  })));
  n.push(E.default.createElement(s.default, {
    key: "delete",
    onDeleteOrExit: () => u.Cmd.deleteOrExitChat(e),
    chat: e
  }));
  return n;
};
exports.groupMenu = function (e, t) {
  var n;
  var a;
  const v = [];
  const _ = () => {
    u.Cmd.ephemeralDrawer((0, m.unproxy)(e), false, h.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW);
  };
  if ((0, l.canAssignChats)()) {
    v.push(E.default.createElement(c.DropdownItem, {
      key: "assignChat",
      testid: "mi-assign-chat",
      action: () => {
        u.Cmd.assignChat(e, o.ChatAssignmentEntryPointType.CONVERSATION_MENU);
      }
    }, g.fbt._("Assign chat", null, {
      hk: "a77h0"
    })));
  }
  v.push(E.default.createElement(c.DropdownItem, {
    key: "info",
    testid: "menu-item-chat-info",
    action: () => u.Cmd.chatInfoDrawer(e)
  }, ((n = e.groupMetadata) === null || n === undefined ? undefined : n.groupType) === d.GroupType.LINKED_ANNOUNCEMENT_GROUP ? g.fbt._("Announcements info", null, {
    hk: "2MIp6J"
  }) : g.fbt._("Group info", null, {
    hk: "2SfTUZ"
  })));
  v.push(E.default.createElement(c.DropdownItem, {
    testid: "mi-select-messages",
    key: "select",
    action: t
  }, g.fbt._("Select messages", null, {
    hk: "40nxs"
  })));
  v.push(E.default.createElement(c.DropdownItem, {
    testid: "mi-close-chat",
    key: "close",
    action: () => u.Cmd.closeChat(e)
  }, g.fbt._("Close chat", null, {
    hk: "456CEL"
  })));
  if (e.mute.canMute()) {
    v.push(E.default.createElement(f.default, {
      key: "mute",
      onMute: t => u.Cmd.muteChat(e, t),
      mute: e.mute,
      chat: e,
      settings: p.default
    }));
  }
  if ((0, r.getABPropConfigValue)("add_dm_to_chat_overflow_menu") && (0, i.shouldShowEphemeralSetting)(e) && ((a = e.groupMetadata) === null || a === undefined ? undefined : a.canSetEphemeralSetting())) {
    v.push(E.default.createElement(c.DropdownItem, {
      key: "disappearingMessages",
      action: _
    }, g.fbt._("Disappearing messages", null, {
      hk: "29k6qZ"
    })));
  }
  v.push(E.default.createElement(c.DropdownItem, {
    key: "clear",
    testid: "mi-clear",
    action: () => u.Cmd.clearChat(e)
  }, g.fbt._("Clear chat", null, {
    hk: "zjV3w"
  })));
  v.push(E.default.createElement(s.default, {
    key: "delete",
    onDeleteOrExit: () => u.Cmd.deleteOrExitChat(e),
    chat: e
  }));
  return v;
};
var r = require("../app/287461.js");
var o = require("../app/698052.js");
var l = require("../app/560861.js");
var i = require("../app/738501.js");
var u = require("../app/780549.js");
require("./708138.js");
var s = a(require("./819136.js"));
require("./807078.js");
var c = require("../app/675085.js");
var d = require("../app/862159.js");
var f = a(require("./462034.js"));
require("../app/533494.js");
require("../app/437911.js");
var p = a(require("../app/634152.js"));
var m = require("../app/163139.js");
require("../app/142601.js");
var h = require("./298187.js");
var g = require("../vendor/548360.js");
var E = a(require("../vendor/667294.js"));