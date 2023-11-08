var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelSubgroupSuggestions = exports.approveSubgroupSuggestions = undefined;
exports.getRequestErrorMessage = E;
exports.getSuggestionErrorMessage = v;
exports.rejectSubgroupSuggestions = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/984330.js");
var l = require("../app/921264.js");
var i = require("../app/174834.js");
var u = require("./894808.js");
var s = require("../app/114850.js");
var c = require("../app/163139.js");
var d = require("./293365.js");
var f = require("../app/625786.js");
var p = require("../app/390737.js");
var m = require("../vendor/548360.js");
var h = a(require("../vendor/667294.js"));
function g() {
  return m.fbt._("Something went wrong. Please try again later.", null, {
    hk: "4mqVql"
  });
}
function E() {
  return g();
}
function v(e, t) {
  switch (e) {
    case 401:
      if (t === d.SubgroupSuggestionAction.CANCEL) {
        return m.fbt._("Couldn't cancel group suggestion.", null, {
          hk: "3IlNWx"
        });
      } else {
        return m.fbt._("You're no longer a community admin. Only community admins can review group suggestions.", null, {
          hk: "1qMYtC"
        });
      }
    case 404:
      return m.fbt._("Group suggestion no longer exists.", null, {
        hk: "3UhNDp"
      });
    case 419:
      return m.fbt._("You cannot add more groups because this community is full. To add more, you must remove groups.", null, {
        hk: "2Km8R2"
      });
    case 409:
      return m.fbt._("You cannot add this group because it may have been removed or added to another community.", null, {
        hk: "1uNzVX"
      });
  }
  return g();
}
const _ = (e, t, n) => {
  const a = new Map();
  t.map(e => a.set(e.id, e));
  e.forEach(e => {
    if (e.error != null) {
      const t = a.get(e.id);
      if (t) {
        t.error = v(Number(e.error), n);
        t.currentState = l.State.Error;
      }
    }
  });
};
const y = (e, t) => {
  t.forEach(t => {
    t.currentState = l.State.Error;
    if (e instanceof o.ServerStatusCodeError) {
      t.error = E();
    }
  });
};
const C = (e, t) => {
  let n = 0;
  e.forEach(e => {
    if (e.currentState !== l.State.Error) {
      e.currentState = t;
      n++;
    }
  });
  return n;
};
const b = (e, t, n) => {
  const a = (0, c.unproxy)(e);
  return (0, d.sendSubgroupSuggestionsAction)(a.id, t.map(e => ({
    id: e.groupId,
    creator: e.owner
  })), n);
};
const M = function () {
  var e = (0, r.default)(function* (e, t) {
    if (!(t == null)) {
      t.forEach(e => {
        e.currentState = l.State.Loading;
      });
    }
    try {
      const n = yield b(e, t, d.SubgroupSuggestionAction.CANCEL);
      _(n, t, d.SubgroupSuggestionAction.CANCEL);
      const a = C(t, l.State.Canceled);
      if (a > 0) {
        p.ToastManager.open(h.default.createElement(f.Toast, {
          msg: m.fbt._({
            "*": "{number} suggestions canceled",
            _1: "Suggestion canceled"
          }, [m.fbt._plural(a, "number")], {
            hk: "4lNROi"
          })
        }));
      }
    } catch (e) {
      y(e, t);
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.cancelSubgroupSuggestions = M;
const S = function () {
  var e = (0, r.default)(function* (e, t) {
    if (!(t == null)) {
      t.forEach(e => {
        e.currentState = l.State.Loading;
      });
    }
    try {
      const n = yield b(e, t, d.SubgroupSuggestionAction.REJECT);
      _(n, t, d.SubgroupSuggestionAction.REJECT);
      const a = C(t, l.State.Rejected);
      if (a > 0) {
        p.ToastManager.open(h.default.createElement(f.Toast, {
          msg: m.fbt._({
            "*": "{number} groups rejected",
            _1: "Group rejected"
          }, [m.fbt._plural(a, "number")], {
            hk: "2FGBjW"
          })
        }));
      }
    } catch (e) {
      y(e, t);
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.rejectSubgroupSuggestions = S;
const T = function () {
  var e = (0, r.default)(function* (e, t, n) {
    if (!e.groupMetadata) {
      return;
    }
    const a = e.groupMetadata.joinedSubgroups.length + e.groupMetadata.unjoinedSubgroups.length;
    const r = (0, i.getParentGroupLinkLimit)() - a;
    if (r <= 0) {
      s.ModalManager.open(h.default.createElement(u.SubgroupSuggestionsApproveLimit, {
        onOK: n
      }));
    } else if (!(t.length > r) || (yield (0, u.confirmCommunityFull)(r, t.length))) {
      if (!(t == null)) {
        t.forEach(e => {
          e.currentState = l.State.Loading;
        });
      }
      try {
        const n = yield b(e, t, d.SubgroupSuggestionAction.APPROVE);
        _(n, t, d.SubgroupSuggestionAction.APPROVE);
        const a = C(t, l.State.Approved);
        if (a > 0) {
          p.ToastManager.open(h.default.createElement(f.Toast, {
            msg: m.fbt._({
              "*": "{number} groups added",
              _1: "Group added"
            }, [m.fbt._plural(a, "number")], {
              hk: "WdApr"
            })
          }));
        }
      } catch (e) {
        y(e, t);
      }
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.approveSubgroupSuggestions = T;