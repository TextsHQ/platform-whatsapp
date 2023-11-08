var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    isPaused: t,
    hasAudio: n,
    isMuted: a,
    onPlay: o,
    onPauseButtonClick: l,
    onMute: i,
    onUnmute: u,
    contact: s,
    onReport: d,
    onDelete: f,
    onOverflowMenuShown: m,
    onOverflowMenuDismissed: h
  } = e;
  return p.default.createElement("div", {
    onClick: e => e.stopPropagation()
  }, p.default.createElement(r.FlexRow, null, p.default.createElement(v, {
    isPaused: t,
    handlePlayPauseButton: () => {
      if (t) {
        o();
      } else {
        l();
      }
    }
  }), p.default.createElement(_, {
    hasAudio: n,
    isMuted: a,
    handleMuteButton: () => {
      if (a) {
        u();
      } else {
        i();
      }
    }
  }), p.default.createElement(c.default, {
    onOverflowMenuShown: m,
    onOverflowMenuDismissed: h,
    contact: s,
    onReport: d,
    onDelete: f
  })));
};
var r = require("../app/690495.js");
var o = require("./599414.js");
var l = require("./52993.js");
var i = require("./671630.js");
var u = require("./568475.js");
var s = require("./394214.js");
var c = a(require("./232595.js"));
var d = a(require("../app/397778.js"));
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
var m = a(require("../app/156720.js"));
const h = {
  cursor: "bx7g2weo",
  width: "i94gqilv",
  height: "bmot90v7",
  color: "lxozqee9"
};
const g = {
  marginEnd: "bugiwsl0"
};
const E = {
  opacity: "brh521k9"
};
function v(e) {
  let {
    isPaused: t,
    handlePlayPauseButton: n
  } = e;
  return p.default.createElement("div", {
    className: (0, m.default)(g, h)
  }, p.default.createElement(d.default, {
    "aria-label": t ? f.fbt._("Play", null, {
      hk: "4CjEWt"
    }) : f.fbt._("Pause", null, {
      hk: "1kvbzt"
    }),
    onClick: n,
    Icon: t ? i.StatusMediaControlsPlayIcon : l.StatusMediaControlsPauseIcon
  }));
}
function _(e) {
  let {
    hasAudio: t,
    isMuted: n,
    handleMuteButton: a
  } = e;
  if (t) {
    return p.default.createElement("div", {
      className: (0, m.default)(h)
    }, p.default.createElement(d.default, {
      "aria-label": n ? f.fbt._("Unmute", null, {
        hk: "aQpZx"
      }) : f.fbt._("Mute", null, {
        hk: "1C7Sjw"
      }),
      onClick: a,
      Icon: n ? u.StatusMediaControlsVolumeOffIcon : s.StatusMediaControlsVolumeOnIcon
    }));
  } else {
    return p.default.createElement("div", {
      className: (0, m.default)(E, h)
    }, p.default.createElement(o.StatusMediaControlsNoSoundIcon, null));
  }
}