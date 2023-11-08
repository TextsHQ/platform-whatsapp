var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, me.default)();
  const t = function (t, n, a) {
    let r = !(arguments.length > 3 && arguments[3] !== undefined) || arguments[3];
    if (n) {
      const n = (e, n, r) => {
        if (t.isPSA && a !== 0) {
          let e;
          switch (r) {
            case 1:
              e = le.MUTE_ENTRY_POINT.CHAT_LIST_SCREEN;
              break;
            case 2:
              e = le.MUTE_ENTRY_POINT.CONTACT_INFO;
              break;
            default:
              e = le.MUTE_ENTRY_POINT.CONVERSATION_SCREEN;
          }
          (0, re.logChatPSAMute)(e, n === 1 / 0 ? -1 : n);
        }
        t.pendingAction++;
        t.mute.mute({
          expiration: e,
          sendDevice: true
        }).finally(() => {
          t.pendingAction--;
        });
        if (t.isBusinessGroup || t.contact.isBusiness) {
          new E.BusinessMuteWamEvent().commit();
        }
      };
      if (r) {
        const r = ce.fbt._("Mute notifications", null, {
          hk: "4vOGfT"
        });
        j.ModalManager.open(de.default.createElement(H.default, {
          title: r,
          mute: t.mute,
          onMute: n,
          entryPoint: a
        }, ce.fbt._("No one else in this chat will see that you muted it, and you will still be notified if you are mentioned.", null, {
          hk: "5IkMT"
        })), {
          transition: "modal",
          uim: e
        });
      } else {
        const e = Number.POSITIVE_INFINITY;
        n((0, W.calculateMuteExpiration)(e), e, a != null ? a : 0);
      }
    } else {
      t.pendingAction++;
      t.mute.unmute({
        sendDevice: true
      }).finally(() => {
        t.pendingAction--;
      });
      if (t.isPSA && a !== 0) {
        let e;
        switch (a) {
          case 1:
            e = le.MUTE_ENTRY_POINT.CHAT_LIST_SCREEN;
            break;
          case 2:
            e = le.MUTE_ENTRY_POINT.CONTACT_INFO;
            break;
          default:
            e = le.MUTE_ENTRY_POINT.CONVERSATION_SCREEN;
        }
        (0, re.logChatPSAUnmute)(e);
      }
      if (t.isBusinessGroup || t.contact.isBusiness) {
        new v.BusinessUnmuteWamEvent().commit();
      }
    }
  };
  const n = function (t, n, a) {
    let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    let o = ce.fbt._("Turn off all desktop notifications for:", null, {
      hk: "3Xkism"
    });
    let l = ce.fbt._("Notifications enabled", null, {
      hk: "mZYyC"
    });
    let i = ce.fbt._("Enable sounds and notifications?", null, {
      hk: "4B6qY1"
    });
    if (a) {
      o = ce.fbt._("Turn off all reactions notifications for:", null, {
        hk: "2Ghe4F"
      });
      l = ce.fbt._("Reactions notifications enabled", null, {
        hk: "4t3wuk"
      });
      i = ce.fbt._("Enable sounds and notifications for Reactions?", null, {
        hk: "4bKMS6"
      });
    }
    if (n) {
      j.ModalManager.open(de.default.createElement(H.default, {
        mute: t,
        title: o,
        onMute: (e, n) => {
          t.mute({
            expiration: e
          });
          te.ToastManager.open(de.default.createElement(ee.Toast, {
            msg: Ee(n),
            id: (0, ee.genId)()
          }));
        },
        muteAll: true
      }), {
        transition: "modal",
        uim: e
      });
    } else {
      if (r) {
        return void t.unmute();
      }
      const e = () => {
        t.unmute();
        j.ModalManager.close();
        te.ToastManager.open(de.default.createElement(ee.Toast, {
          msg: l,
          id: (0, ee.genId)()
        }));
      };
      j.ModalManager.open(de.default.createElement(w.ConfirmPopup, {
        onOK: e,
        okText: ce.fbt._("Unmute", null, {
          hk: "3KLKtD"
        }),
        onCancel: () => j.ModalManager.close(),
        cancelText: ce.fbt._("Cancel", null, {
          hk: "H0gNq"
        })
      }, i));
    }
  };
  const r = (t, n) => {
    j.ModalManager.open(de.default.createElement(P.DeleteChatPopup, {
      chat: t,
      onDeleteOrExit: e => {
        t.pendingAction++;
        if (t.isPSA && n !== 0) {
          const e = t.msgs.last();
          (0, re.logChatPSARemove)(e, 6, n);
        }
        e.finally(() => {
          t.pendingAction--;
        });
      }
    }), {
      transition: "modal",
      uim: e
    });
  };
  const l = (e, t, n, a) => {
    if (e.isPSA && n !== 0 && e.msgs.length > 0) {
      const a = e.msgs.last();
      (0, re.logChatPSARemove)(a, t ? 3 : 4, n);
    }
    e.pendingAction++;
    (0, Z.setArchive)(e, t, a).catch(() => {}).finally(() => {
      e.pendingAction--;
    });
  };
  const u = (e, t) => {
    if (!e) {
      throw new x.ActionError();
    }
    if (e.some(e => !e.id)) {
      throw new x.ActionError();
    }
    const n = t || (0, c.genId)();
    te.ToastManager.open(de.default.createElement(ee.Toast, {
      id: n,
      msg: ce.fbt._({
        "*": "Messages were restored",
        _1: "Message was restored"
      }, [ce.fbt._plural(e.length)], {
        hk: "1yzu6U"
      })
    }));
  };
  const d = function (e, t, n, r) {
    let l = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "LEFT";
    if (!t) {
      return Promise.reject(new x.ActionError());
    }
    if (t.some(e => !e.id)) {
      return Promise.reject(new x.ActionError());
    }
    const f = t.length;
    const p = r || (0, c.genId)();
    const m = new a();
    const h = m.signal;
    let E;
    if ((0, L.accidentalDeleteMessageEnabled)()) {
      Se(e, t, "shown");
      t.forEach(e => {
        e.pendingDeleteForMe = true;
        if ((0, g.isBotReceiveEnabled)()) {
          const t = (0, G.getBotPluginSearchProvider)(e);
          const n = (0, G.getBotResponseTargetId)(e);
          if (t != null && n != null) {
            S.Cmd.botTogglePluginSearchDetailsToggle(n, false);
          }
        }
      });
      e.pendingDeleteForMeCount += t.length;
      const n = f === 1 ? ce.fbt._("Message deleted for me", null, {
        hk: "3kP27Z"
      }) : ce.fbt._({
        "*": "{number_of_messages} messages deleted for me",
        _1: "1 message deleted for me"
      }, [ce.fbt._plural(f, "number_of_messages")], {
        hk: "1CKDvW"
      });
      E = new c.ActionType(n, {
        actionText: ce.fbt._("Undo", null, {
          hk: "4d7yun"
        }),
        actionHandler: (v = (0, o.default)(function* () {
          m.abort();
          t.forEach(e => {
            e.pendingDeleteForMe = false;
          });
          e.pendingDeleteForMeCount -= t.length;
          Se(e, t, "undo");
          yield u(t, p);
        }), function () {
          return v.apply(this, arguments);
        })
      });
    } else {
      E = new c.ActionType(ce.fbt._({
        "*": "Deleting messages",
        _1: "Deleting message"
      }, [ce.fbt._plural(f)], {
        hk: "2dAzAV"
      }));
    }
    var v;
    let _ = Promise.resolve();
    if ((0, L.accidentalDeleteMessageEnabled)()) {
      _ = _.then(() => (0, s.delayMs)(4000));
    }
    _ = _.then(() => {
      if ((0, L.accidentalDeleteMessageEnabled)() && h.aborted) {
        throw new i.AbortError();
      }
      return (0, C.sendDeleteMsgs)(e, t, n);
    }).then(n => {
      e.pendingDeleteForMeCount -= n;
      if (n === f) {
        be(e, t, false);
        if ((0, L.accidentalDeleteMessageEnabled)()) {
          return null;
        } else {
          return new c.ActionType(ce.fbt._({
            "*": "{count} messages deleted",
            _1: "1 message deleted"
          }, [ce.fbt._plural(f, "count")], {
            hk: "36xJSq"
          }));
        }
      } else {
        return new c.ActionType(ce.fbt._({
          "*": "Couldn't delete messages",
          _1: "Couldn't delete message"
        }, [ce.fbt._plural(f - n)], {
          hk: "4gR8Lu"
        }));
      }
    }).catch((0, i.catchAbort)(() => {})).catch(() => {
      __LOG__(3)`chatAction:sendDeleteMsgs dropped`;
      return new c.ActionType(ce.fbt._({
        "*": "Couldn't delete messages",
        _1: "Couldn't delete message"
      }, [ce.fbt._plural(f)], {
        hk: "4gR8Lu"
      }), {
        actionText: ce.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => d(e, t, false, p, l)
      });
    });
    te.ToastManager.open(de.default.createElement(c.ActionToast, {
      id: p,
      toastPosition: l,
      initialAction: E,
      pendingAction: _
    }));
    return _;
  };
  const b = () => {};
  (0, pe.useListener)(S.Cmd, ["mute_all"], n);
  (0, pe.useListener)(S.Cmd, ["mute_all_call"], (t, n) => {
    if (n) {
      j.ModalManager.open(de.default.createElement(H.default, {
        mute: t,
        title: ce.fbt._("Turn off all desktop incoming calls for:", null, {
          hk: "2isMX6"
        }),
        onMute: (e, n) => {
          t.muteCall(e);
          te.ToastManager.open(de.default.createElement(ee.Toast, {
            msg: ve(n),
            id: (0, ee.genId)()
          }));
        },
        muteAll: true
      }), {
        transition: "modal",
        uim: e
      });
    } else {
      j.ModalManager.open(de.default.createElement(w.ConfirmPopup, {
        onOK: () => {
          t.unmuteCall();
          j.ModalManager.close();
          te.ToastManager.open(de.default.createElement(ee.Toast, {
            msg: ce.fbt._("Incoming calls enabled", null, {
              hk: "11LQU6"
            }),
            id: (0, ee.genId)()
          }));
        },
        okText: ce.fbt._("Unmute", null, {
          hk: "3KLKtD"
        }),
        onCancel: () => j.ModalManager.close(),
        cancelText: ce.fbt._("Cancel", null, {
          hk: "H0gNq"
        })
      }, ce.fbt._("Enable desktop incoming calls?", null, {
        hk: "1oiZtT"
      })));
    }
  });
  (0, pe.useListener)(S.Cmd, ["mute_chat"], (e, n, a) => t(e, n, 0, a));
  (0, pe.useListener)(S.Cmd, ["mute_chat_multiselect"], (t, n, a) => {
    if (!t) {
      return;
    }
    const r = ce.fbt._({
      "*": "Mute selected chats for...",
      _1: "Mute selected chat for..."
    }, [ce.fbt._plural(t.length)], {
      hk: "z2G37"
    });
    if (n) {
      j.ModalManager.open(de.default.createElement(H.default, {
        title: r,
        mute: t[0].mute,
        onMute: e => {
          t.forEach(t => {
            t.pendingAction++;
            t.mute.mute({
              expiration: e,
              sendDevice: true,
              fromMultiselect: true
            }).finally(() => {
              t.pendingAction--;
            });
          });
          a();
        }
      }), {
        transition: "modal",
        uim: e
      });
    } else {
      t.forEach(e => {
        e.pendingAction++;
        e.mute.unmute({
          sendDevice: true,
          fromMultiselect: true
        }).finally(() => {
          e.pendingAction--;
        });
      });
      a();
    }
  });
  (0, pe.useListener)(S.Cmd, ["mute_chat_from_entrypoint"], t);
  (0, pe.useListener)(S.Cmd, ["archive_chat"], (e, t, n) => {
    l(e, t, 0, n);
  });
  (0, pe.useListener)(S.Cmd, ["archive_chat_from_entrypoint"], l);
  (0, pe.useListener)(S.Cmd, ["clear_chat"], t => {
    j.ModalManager.open(de.default.createElement(M.default, {
      chat: t
    }), {
      transition: "modal",
      uim: e
    });
  });
  (0, pe.useListener)(S.Cmd, ["mark_chat_unread"], (e, t) => {
    e.pendingAction++;
    (0, ne.markUnread)(e, t).finally(() => {
      e.pendingAction--;
    });
  });
  (0, pe.useListener)(S.Cmd, ["pin_chat"], (e, t) => {
    if ((0, L.pinChatSyncEnabled)()) {
      e.pendingAction++;
      (0, J.setPin)(e, t).catch(() => {}).finally(() => {
        e.pendingAction--;
      });
    } else {
      j.ModalManager.open(de.default.createElement(w.ConfirmPopup, {
        title: ce.fbt._("Can't pin chat", null, {
          hk: "17sJeN"
        }),
        onOK: () => {
          j.ModalManager.close();
        },
        okText: (0, k.default)("Close")
      }, ce.fbt._("Pinning chats from web/desktop is not yet available on the multi-device beta", null, {
        hk: "24ieVt"
      })));
    }
  });
  (0, pe.useListener)(S.Cmd, ["assign_chat"], (e, t) => {
    const n = _.ChatAssignmentEntryPointType.getName(t);
    K.QPL.markerStart(z.QuickLogMarkerId.WHATSAPP_FETCH_ASSIGN_CHAT_AGENT_LIST, {
      annotations: {
        string: {
          CHAT_ASSIGNMENT_ENTRY_POINT: n
        }
      }
    });
    j.ModalManager.open(de.default.createElement(f.default, {
      chats: [e],
      entryPoint: t
    }));
  });
  (0, pe.useListener)(S.Cmd, ["send_star_msgs"], _e);
  (0, pe.useListener)(S.Cmd, ["send_unstar_msgs"], ye);
  (0, pe.useListener)(S.Cmd, ["send_delete_msgs"], d);
  (0, pe.useListener)(S.Cmd, ["send_revoke_msgs"], (e, t, n) => {
    var a;
    var r;
    const {
      clearMedia: o
    } = n;
    const l = (a = n.toastId) !== null && a !== undefined ? a : (0, c.genId)();
    const i = (r = n.toastPosition) !== null && r !== undefined ? r : "LEFT";
    if (!t) {
      return Promise.reject(new x.ActionError());
    }
    const [u, s] = t.reduce((e, t) => {
      const [n, a] = [(0, B.canSenderRevokeMsg)(t) || (0, B.canAdminRevokeMsg)(t) || (0, B.canBotResponseBeRevokeByInvoker)(t), t.type !== U.MSG_TYPE.GROUPS_V4_INVITE || (0, G.getIsGroupsV4InviteExpired)(t) ? null : t];
      return [e[0] || !n, e[1] || a];
    }, [false, null]);
    if (u) {
      return Promise.reject(new x.ActionError());
    }
    if (s) {
      (() => {
        throw (0, se.default)("This call is not supported");
      })();
    }
    const d = t.length;
    const f = new c.ActionType(e.isNewsletter ? ce.fbt._({
      "*": "Deleting updates",
      _1: "Deleting update"
    }, [ce.fbt._plural(d)], {
      hk: "QmIT4"
    }) : ce.fbt._({
      "*": "Deleting messages",
      _1: "Deleting message"
    }, [ce.fbt._plural(d)], {
      hk: "2dAzAV"
    }));
    const p = (e.isNewsletter ? (0, V.sendNewsletterRevokeMsgs)(e, t, o) : (0, C.sendRevokeMsgs)(e, t, o)).then(n => {
      const a = n.filter(e => e.messageSendResult !== Q.SendMsgResult.OK).length;
      if (a > 0) {
        throw (0, se.default)(`${a} / ${n.length} dropped`);
      }
      be(e, t, true);
      return new c.ActionType(e.isNewsletter ? ce.fbt._({
        "*": "{number_of_updates} updates deleted",
        _1: "Update deleted"
      }, [ce.fbt._plural(d, "number_of_updates")], {
        hk: "2rAvM8"
      }) : ce.fbt._({
        "*": "{count} messages deleted",
        _1: "1 message deleted"
      }, [ce.fbt._plural(d, "count")], {
        hk: "36xJSq"
      }));
    }).catch(() => {
      __LOG__(3)`chatAction:sendRevokeMsgs fail`;
      if ((0, y.isEphemeralSettingOn)(e)) {
        return new c.ActionType(R.default.t(5, {
          count: d,
          _plural: d
        }));
      } else {
        return new c.ActionType(e.isNewsletter ? ce.fbt._({
          "*": "Couldn't delete {number_of_updates} updates",
          _1: "Couldn't delete update"
        }, [ce.fbt._plural(d, "number_of_updates")], {
          hk: "2C5DKU"
        }) : ce.fbt._({
          "*": "Couldn't delete messages",
          _1: "Couldn't delete message"
        }, [ce.fbt._plural(d)], {
          hk: "4gR8Lu"
        }));
      }
    });
    te.ToastManager.open(de.default.createElement(c.ActionToast, {
      id: l,
      toastPosition: i,
      initialAction: f,
      pendingAction: p
    }));
    return p;
  });
  (0, pe.useListener)(S.Cmd, ["delete_or_exit_chat"], e => {
    r(e, 0);
  });
  (0, pe.useListener)(S.Cmd, ["delete_or_exit_chat_from_entrypoint"], r);
  (0, pe.useListener)(S.Cmd, ["product_image_viewer_modal"], (t, n) => {
    j.ModalManager.openMedia(de.default.createElement(Y.default, {
      activeProductImage: t.activeProductImage,
      productImageCollection: t.productImageCollection,
      getZoomNode: t.getZoomNode,
      product: t.product,
      sessionId: n
    }), {
      transition: "media-viewer",
      uim: e
    });
  });
  (0, pe.useListener)(S.Cmd, ["mute_all"], n);
  (0, pe.useListener)(S.Cmd, ["attach_product"], t => {
    let {
      product: n,
      onSend: a
    } = t;
    j.ModalManager.open(de.default.createElement(X.SendProductModalLoadable, {
      product: n,
      onSend: a
    }), {
      transition: "modal-flow",
      uim: e
    });
  });
  (0, pe.useListener)(S.Cmd, ["show_country_selector_popup"], (t, n, a, r) => {
    j.ModalManager.open(de.default.createElement(A.default, {
      title: t,
      countryCode: n,
      countries: a,
      onSave: r
    }), {
      transition: "modal",
      uim: e
    });
  });
  (0, pe.useListener)(S.Cmd, "show_merchant_details_entity_type_popup", (t, n) => {
    j.ModalManager.open(de.default.createElement(p.default, {
      legalEntityDetails: t,
      onSave: n
    }), {
      transition: "modal",
      uim: e
    });
  });
  (0, pe.useListener)(S.Cmd, ["open_groups_v4_invite_request_flow"], (e, t, n, a) => {
    j.ModalManager.open(de.default.createElement(D.GroupsV4InviteFlowLoadable, {
      participantNeedInvite: e,
      groupGid: t,
      subject: n,
      groupDesc: a
    }));
  });
  (0, pe.useListener)(S.Cmd, ["open_profile_info_from_notification"], t => {
    (0, I.openInfoPanel)(t, e, ie.PROFILE_ENTRY_POINT.NOTIFICATION_BLOCK_ACTION);
    (0, m.handleBlock)(t, h.BlockEntryPoint.NotificationBlock);
  });
  (0, pe.useListener)(S.Cmd, ["open_command_palette"], () => {
    j.ModalManager.open(de.default.createElement(T.default, null), {
      transition: "modal",
      uim: e
    });
  });
  (0, de.useEffect)(b, []);
  (0, pe.useListener)(S.Cmd, "on_ab_props_update", b);
  (0, de.useEffect)(() => {
    self.setTimeout(O.generateKeepInChatSystemMessage, 60000);
  }, []);
  (0, pe.useListener)(S.Cmd, "on_ab_props_update", O.generateKeepInChatSystemMessage);
  (0, fe.default)();
  (0, ae.default)();
  (0, pe.useListener)(S.Cmd, ["trigger_bugreport_v2"], e => {});
  return null;
};
var o = r(require("../vendor/348926.js"));
var l = r(require("../vendor/944908.js"));
var i = require("../app/898817.js");
var u = require("../app/122583.js");
var s = require("../app/8304.js");
var c = require("../app/328620.js");
var d = require("../app/984330.js");
var f = r(require("./235600.js"));
var p = r(require("./112258.js"));
var m = require("./923092.js");
var h = require("../app/400436.js");
var g = require("../app/354458.js");
var E = require("./457879.js");
var v = require("./409439.js");
var _ = require("../app/698052.js");
var y = require("../app/738501.js");
var C = require("./239523.js");
var b = require("../app/698867.js");
var M = r(require("./467421.js"));
var S = require("../app/780549.js");
var T = r(require("./386084.js"));
var w = require("../app/103440.js");
var A = r(require("./838954.js"));
var P = require("./24957.js");
var O = require("./896834.js");
var k = r(require("../app/395767.js"));
var D = require("./105272.js");
var I = require("./556530.js");
var R = r(require("../app/932325.js"));
var N = require("./536346.js");
var x = ge(require("../app/288057.js"));
var L = require("../app/97858.js");
var j = require("../app/114850.js");
var B = require("../app/939716.js");
var F = require("../app/678794.js");
var G = require("../app/787742.js");
var U = require("../app/373070.js");
var W = require("./304792.js");
var H = r(require("./318214.js"));
var V = require("./577025.js");
var q = require("../app/575472.js");
var Y = r(require("./841209.js"));
var z = require("../app/316348.js");
var K = require("../app/555622.js");
var Q = require("../app/693741.js");
var X = require("./125775.js");
var Z = require("./722615.js");
var J = require("./873453.js");
var $ = require("./199670.js");
var ee = require("../app/625786.js");
var te = require("../app/390737.js");
var ne = require("../app/397516.js");
var ae = r(require("./21748.js"));
var re = require("../app/369084.js");
var oe = require("./983017.js");
var le = require("../app/119550.js");
var ie = require("./679281.js");
var ue = require("./114443.js");
var se = r(require("../app/556869.js"));
var ce = require("../vendor/548360.js");
var de = ge(require("../vendor/667294.js"));
var fe = r(require("./756580.js"));
var pe = require("../app/808446.js");
var me = r(require("../app/321201.js"));
function he(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (he = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function ge(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = he(t);
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
}
function Ee(e) {
  switch (e) {
    case 1:
      return ce.fbt._("Alerts and sounds off for 1 hour", null, {
        hk: "aeCEy"
      });
    case 8:
      return ce.fbt._("Alerts and sounds off for 8 hours", null, {
        hk: "16qxXR"
      });
    case 24:
      return ce.fbt._("Alerts and sounds off for 1 day", null, {
        hk: "1XliNB"
      });
    case 168:
      return ce.fbt._("Alerts and sounds off for 1 week", null, {
        hk: "2DHi5a"
      });
    default:
      __LOG__(2)`DoNotDisturbSettings:globalMuteDurationLabel non standard global mute duration:${e}`;
      return ce.fbt._("Alerts and sounds off", null, {
        hk: "3AeVPs"
      });
  }
}
function ve(e) {
  switch (e) {
    case 1:
      return ce.fbt._("Incoming calls off for 1 hour", null, {
        hk: "czSNR"
      });
    case 8:
      return ce.fbt._("Incoming calls off for 8 hours", null, {
        hk: "21mgEI"
      });
    case 24:
      return ce.fbt._("Incoming calls off for 1 day", null, {
        hk: "2wj1CR"
      });
    case 168:
      return ce.fbt._("Incoming calls off for 1 week", null, {
        hk: "3DcWZf"
      });
    default:
      __LOG__(2)`DoNotDisturbSettings:getMuteAllCallDurationLabel non standard global mute duration:${e}`;
      return ce.fbt._("Incoming calls off", null, {
        hk: "1rVYia"
      });
  }
}
function _e(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "LEFT";
  if (!t) {
    return Promise.reject(new x.ActionError());
  }
  if (t.some(e => !e.id)) {
    return Promise.reject(new x.ActionError());
  }
  const r = n || (0, c.genId)();
  const o = t.length;
  if (e.isPSA) {
    let e = 0;
    for (; e < o; e++) {
      (0, re.logChatPSAStar)(t[e]);
    }
  }
  const l = new c.ActionType(ce.fbt._({
    "*": "Starring messages",
    _1: "Starring message"
  }, [ce.fbt._plural(o)], {
    hk: "nqlcp"
  }));
  const i = (0, C.sendStarMsgs)(e, t, true).then(() => new c.ActionType(ce.fbt._({
    "*": "{count} messages starred",
    _1: "1 message starred"
  }, [ce.fbt._plural(o, "count")], {
    hk: "R0SnK"
  }), {
    actionText: ce.fbt._("Undo", null, {
      hk: "4sCkfZ"
    }),
    actionHandler: () => ye(e, t, r, a)
  })).catch((0, u.filteredCatch)(d.ServerStatusCodeError, t => {
    if (t.status >= 400) {
      if ((0, y.isEphemeralSettingOn)(e)) {
        return new c.ActionType(ce.fbt._({
          "*": "Couldn't star messages because the messages may have expired",
          _1: "Couldn't star message because the message may have expired"
        }, [ce.fbt._plural(o)], {
          hk: "1wb6Q3"
        }));
      } else {
        return new c.ActionType(ce.fbt._({
          "*": "Couldn't star messages",
          _1: "Couldn't star message"
        }, [ce.fbt._plural(o)], {
          hk: "2WQDEk"
        }));
      }
    }
  })).catch(() => {
    __LOG__(3)`chatAction:sendStarMsgs dropped`;
    return new c.ActionType(ce.fbt._({
      "*": "Couldn't star messages",
      _1: "Couldn't star message"
    }, [ce.fbt._plural(o)], {
      hk: "2WQDEk"
    }), {
      actionText: ce.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => _e(e, t, r, a)
    });
  });
  te.ToastManager.open(de.default.createElement(c.ActionToast, {
    id: r,
    toastPosition: a,
    initialAction: l,
    pendingAction: i
  }));
  return i;
}
function ye(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "LEFT";
  if (!t) {
    return Promise.reject(new x.ActionError());
  }
  if (t.some(e => !e.id)) {
    return Promise.reject(new x.ActionError());
  }
  const r = n || (0, c.genId)();
  const o = t.length;
  const l = new c.ActionType(ce.fbt._({
    "*": "Unstarring messages",
    _1: "Unstarring message"
  }, [ce.fbt._plural(o)], {
    hk: "1n8FhH"
  }));
  const i = (0, C.sendStarMsgs)(e, t, false).then(() => new c.ActionType(ce.fbt._({
    "*": "{count} messages unstarred",
    _1: "1 message unstarred"
  }, [ce.fbt._plural(o, "count")], {
    hk: "dh2ap"
  }), {
    actionText: ce.fbt._("Undo", null, {
      hk: "4sCkfZ"
    }),
    actionHandler: () => _e(e, t, r, a)
  })).catch((0, u.filteredCatch)(d.ServerStatusCodeError, t => {
    if (t.status >= 400) {
      if ((0, y.isEphemeralSettingOn)(e)) {
        return new c.ActionType(ce.fbt._({
          "*": "Couldn't unstar messages because the messages may have expired",
          _1: "Couldn't unstar message because the message may have expired"
        }, [ce.fbt._plural(o)], {
          hk: "11kx5A"
        }));
      } else {
        return new c.ActionType(ce.fbt._({
          "*": "Couldn't unstar messages",
          _1: "Couldn't unstar message"
        }, [ce.fbt._plural(o)], {
          hk: "1pSSxS"
        }));
      }
    }
  })).catch(() => {
    __LOG__(3)`chatAction:sendUnstarMsgs dropped`;
    return new c.ActionType(ce.fbt._({
      "*": "Couldn't unstar messages",
      _1: "Couldn't unstar message"
    }, [ce.fbt._plural(o)], {
      hk: "1pSSxS"
    }), {
      actionText: ce.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => ye(e, t, r, a)
    });
  });
  te.ToastManager.open(de.default.createElement(c.ActionToast, {
    id: r,
    toastPosition: a,
    initialAction: l,
    pendingAction: i
  }));
  return i;
}
function Ce(e) {
  const t = (0, l.default)(e.map(e => e.getWamMediaType()));
  if (t.length === 1) {
    return t[0];
  } else {
    return undefined;
  }
}
function be() {
  return Me.apply(this, arguments);
}
function Me() {
  return (Me = (0, o.default)(function* (e, t, n) {
    if (e.isPSA) {
      let e = 0;
      for (; e < t.length; e++) {
        (0, re.logChatPSADelete)(t[e]);
      }
    }
    t.filter(G.getIsAuthenticationMessage).forEach(e => {
      (0, q.logOTPMessageDeleted)((0, F.msgDataFromMsgModel)(e));
    });
    return new N.MessageDeleteActionsWamEvent({
      deleteActionType: n ? oe.DELETE_ACTION_TYPE.DELETE_FOR_EVERYONE : oe.DELETE_ACTION_TYPE.DELETE_FOR_ME,
      isAGroup: e.isGroup,
      messagesDeleted: t.length,
      threadId: yield (0, b.getChatThreadID)(e.id.toJid()),
      mediaType: Ce(t)
    }).commitAndWaitForFlush();
  })).apply(this, arguments);
}
function Se() {
  return Te.apply(this, arguments);
}
function Te() {
  return (Te = (0, o.default)(function* (e, t, n) {
    return new $.SnackbarDeleteUndoWamEvent({
      snackbarActionType: n === "shown" ? ue.SNACKBAR_ACTION_TYPE.SNACKBAR_SHOWN : ue.SNACKBAR_ACTION_TYPE.MESSAGE_UNDELETE,
      isAGroup: e.isGroup,
      messagesUndeleted: t.length,
      threadId: yield (0, b.getChatThreadID)(e.id.toJid()),
      mediaType: Ce(t)
    }).commitAndWaitForFlush();
  })).apply(this, arguments);
}