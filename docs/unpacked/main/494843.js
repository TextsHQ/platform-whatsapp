var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = [r.Action.TOGGLE_UNREAD, r.Action.TOGGLE_MUTE, r.Action.TOGGLE_ARCHIVE, r.Action.DELETE_OR_EXIT_CHAT, r.Action.TOGGLE_PIN, r.Action.SEARCH, r.Action.SEARCH_IN_CHAT, r.Action.OPEN_NEW_CHAT, r.Action.GO_TO_NEXT_CHAT, r.Action.GO_TO_PREV_CHAT, r.Action.CLOSE_CHAT, r.Action.OPEN_NEW_GROUP, r.Action.OPEN_PROFILE, r.Action.INCREASE_PTT_SPEED, r.Action.DECREASE_PTT_SPEED, r.Action.OPEN_SETTINGS, r.Action.OPEN_EMOJI_PANEL, r.Action.OPEN_GIF_PANEL, r.Action.OPEN_STICKER_PANEL, r.Action.TOGGLE_COMMAND_PALETTE];
  if ((0, u.screenLockFeatureSupported)()) {
    e.push(r.Action.LOCK_SCREEN);
  }
  const t = e.map(e => [(0, r.getLabel)(e), e, e !== r.Action.INCREASE_PTT_SPEED && e !== r.Action.DECREASE_PTT_SPEED && e !== r.Action.CLOSE_CHAT]).map((e, t) => {
    let [n, a, r = true] = e;
    if (n === "") {
      return;
    }
    const o = p.default.createElement(i.KeyboardShortcut, {
      action: a,
      addModifiers: r
    });
    if (o) {
      return p.default.createElement("div", {
        key: t,
        className: (0, m.default)(h.section, t !== 0 && h.sectionTopMargin)
      }, p.default.createElement("div", {
        className: (0, m.default)(h.action),
        title: n
      }, n), p.default.createElement("div", {
        className: (0, m.default)(h.shortcut)
      }, o));
    } else {
      return undefined;
    }
  });
  return p.default.createElement(o.ConfirmPopup, {
    onOK: () => {
      c.ModalManager.close();
    },
    okText: (0, l.default)("OK"),
    type: s.ModalTheme.Flex
  }, p.default.createElement("div", {
    className: (0, m.default)(h.container)
  }, p.default.createElement(d.WDSTextLarge, {
    as: "span"
  }, f.fbt._("Keyboard shortcuts", null, {
    hk: "1uFFXP"
  })), p.default.createElement("div", {
    className: (0, m.default)(h.list)
  }, t)));
};
var r = require("./861620.js");
var o = require("../app/103440.js");
var l = a(require("../app/395767.js"));
var i = require("./324077.js");
var u = require("../app/97858.js");
var s = require("../app/118612.js");
var c = require("../app/114850.js");
var d = require("../app/180519.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
var m = a(require("../app/156720.js"));
const h = {
  section: {
    display: "p357zi0d",
    flex: "kk3akd72",
    alignItems: "gndfcl4n",
    fontSize: "ovllcyds",
    "@media (min-width: 1024px)": {
      boxSizing: "iw92fjir",
      flex: "kmu397b4",
      paddingTop: "nqllc0nc",
      paddingEnd: "ig95634g",
      paddingBottom: "esbr2q4m",
      paddingStart: "rff0pby1",
      overflowX: "io2webec",
      overflowY: "er6vhnn5"
    }
  },
  sectionTopMargin: {
    "@media (max-width: 1023px)": {
      marginTop: "sk9gzju7"
    }
  },
  action: {
    flexGrow: "ggj6brxn",
    marginEnd: "spjzgwxb",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "f8jlpxt4",
    "@media (max-width: 1023px)": {
      maxWidth: "h8v2zhlv"
    }
  },
  shortcut: {
    flexGrow: "ggj6brxn",
    textAlign: "e65innqk"
  },
  container: {
    boxSizing: "cm280p3y",
    paddingTop: "a4bywxmn",
    paddingEnd: "lk91ofgv",
    paddingBottom: "lzi2pvmc",
    paddingStart: "s9xya5d7"
  },
  list: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    maxHeight: "nfnc8vpt",
    marginTop: "lxsc1wef",
    overflowX: "i44ccddp",
    overflowY: "ag5g9lrv",
    "@media (max-height: 700px)": {
      maxHeight: "k965fud5"
    },
    "@media (max-width: 1023px)": {
      boxSizing: "ltfv880v",
      width: "gi7c5dsw",
      paddingTop: "mdkfpzhl",
      paddingEnd: "szpwbp00",
      paddingBottom: "tggrzbf0",
      paddingStart: "tfy4sp8n"
    },
    "@media (min-width: 1024px)": {
      flexFlow: "qt8u2dv2",
      width: "covohgai",
      marginEnd: "lqlaz5rc",
      marginStart: "ia382lwg"
    }
  }
};