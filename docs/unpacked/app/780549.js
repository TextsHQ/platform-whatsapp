var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Revoke = exports.CmdImpl = exports.Cmd = exports.APP_STATE_SYNC_COMPLETED = undefined;
var a = i(require("../vendor/348926.js"));
var o = i(require("../vendor/81109.js"));
var s = i(require("../vendor/23279.js"));
var l = require("./898817.js");
var u = require("./338042.js");
var c = require("./493288.js");
var d = i(require("./395654.js"));
var p = require("./163139.js");
i(require("./556869.js"));
var f = i(require("../vendor/441143.js"));
const _ = require("../vendor/76672.js").Mirrored(["Sender", "Admin"]);
exports.Revoke = _;
exports.APP_STATE_SYNC_COMPLETED = "app_state_sync_completed";
class g extends d.default {
  constructor() {
    super(...arguments);
    this.isMainLoaded = false;
    this.uiBusy = 0;
    this.isMainStreamReadyMd = false;
    this.isOfflineDeliveryEnd = false;
    this._clearUiBusy = (0, s.default)(() => {
      if (this.uiBusy) {
        __LOG__(2)`cmd:clearUIBusy uibusy timeout`;
        this.uiBusy = 0;
        this._triggerIdleEvent();
      }
    }, 1000, {
      maxWait: 5000
    });
    this._triggerIdleEvent = function (e) {
      let t;
      const n = () => {
        if (t) {
          return;
        }
        t = new r();
        const {
          signal: n
        } = t;
        (0, c.documentFlushed)({
          signal: n
        }).then(() => {
          if (!n.aborted) {
            t = null;
            e();
          }
        }, e => {
          if (e.name !== l.ABORT_ERROR) {
            throw e;
          }
        });
      };
      n.cancel = () => {
        if (t) {
          t.abort();
          t = null;
        }
      };
      return n;
    }(() => {
      (0, f.default)(this.uiBusy === 0, `ui_idle triggered when uiBusy is ${this.uiBusy}`);
      if (this.uiBusy === 0) {
        this._clearUiBusy.cancel();
        this.trigger("ui_idle");
      }
    });
  }
  mainLoaded() {
    this.isMainLoaded = true;
    this.trigger("main_loaded");
  }
  initialLoadReady() {
    __LOG__(2)`Cmd: initialLoadReady`;
    this.trigger("initial_load_ready");
  }
  logSocketSummary() {
    this.trigger("log_socket_summary");
  }
  muteAll(e, t, n, r) {
    this.trigger("mute_all", e, t, n, r);
  }
  muteAllCall(e, t) {
    this.trigger("mute_all_call", e, t);
  }
  muteChat(e, t, n) {
    this.trigger("mute_chat", (0, p.unproxy)(e), t, n);
  }
  muteChatMultiselect(e, t, n) {
    this.trigger("mute_chat_multiselect", e, t, n);
  }
  muteChatFromEntryPoint(e, t, n, r) {
    this.trigger("mute_chat_from_entrypoint", (0, p.unproxy)(e), t, n, r);
  }
  assignChat(e, t) {
    this.trigger("assign_chat", (0, p.unproxy)(e), t);
  }
  deleteOrExitChat(e, t) {
    this.trigger("delete_or_exit_chat", (0, p.unproxy)(e), t);
  }
  deleteOrExitChatFromEntryPoint(e, t, n) {
    this.trigger("delete_or_exit_chat_from_entrypoint", (0, p.unproxy)(e), t, n);
  }
  clearChat(e, t) {
    this.trigger("clear_chat", (0, p.unproxy)(e), t);
  }
  archiveChat(e, t) {
    let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    this.trigger("archive_chat", (0, p.unproxy)(e), t, n);
  }
  archiveChatFromEntryPoint(e, t, n) {
    let r = !(arguments.length > 3 && arguments[3] !== undefined) || arguments[3];
    this.trigger("archive_chat_from_entrypoint", (0, p.unproxy)(e), t, n, r);
  }
  pinChat(e, t) {
    this.trigger("pin_chat", (0, p.unproxy)(e), t);
  }
  markChatUnread(e, t) {
    this.trigger("mark_chat_unread", (0, p.unproxy)(e), t);
  }
  msgInfoDrawer(e) {
    this.trigger("msg_info_drawer", (0, p.unproxy)(e));
  }
  chatSearch(e) {
    this.trigger("chat_search", (0, p.unproxy)(e));
  }
  scrollChatHeight(e) {
    this.trigger("scroll_chat_by_height", e);
  }
  chatInfoDrawer(e, t) {
    this.trigger("chat_info_drawer", (0, p.unproxy)(e), t == null ? undefined : t.showFullGroupDescription, t == null ? undefined : t.scrollToParticipantList, t == null ? undefined : t.sourceGroupChatOrNewsletter, t == null ? undefined : t.focusNewsletterDescriptionOnMount);
  }
  attachMediaDrawer(e) {
    const t = (0, o.default)((0, o.default)({}, e), {}, {
      chat: (0, p.unproxy)(e.chat)
    });
    this.trigger("attach_media_drawer", t);
  }
  attachProduct(e) {
    this.trigger("attach_product", e);
  }
  verificationDrawer(e) {
    this.trigger("verification_drawer", e);
  }
  mediaViewerModal(e) {
    const {
      msg: t,
      getZoomNode: n,
      currentTime: r,
      highlightedMsgIds: i
    } = e;
    this.trigger("media_viewer_modal", {
      msg: t,
      getZoomNode: n,
      currentTime: r,
      highlightedMsgIds: i
    });
  }
  openMediaViewerForAlbumMedia(e) {
    this.trigger("open_media_viewer_for_album_media", e);
  }
  productImageViewerModal(e, t) {
    this.trigger("product_image_viewer_modal", e, t);
  }
  ephemeralDrawer(e, t, n) {
    this.trigger("ephemeral_drawer", e, t, n);
  }
  openCommunityHome(e, t, n) {
    this.trigger("open_community_home", e, t, n);
  }
  openCommunityTabbedInfo(e, t, n, r) {
    this.trigger("open_community_tabbed_info", e, t, n, r);
  }
  openCommunityPendingGroupsDrawer(e) {
    this.trigger("open_community_pending_groups_drawer", e);
  }
  openCommunityHomeManageGroups(e) {
    this.trigger("open_community_home_manage_groups", e);
  }
  openCommunityInviteLinkDrawer(e) {
    this.trigger("open_community_invite_link_drawer", e);
  }
  openCommunitySettingsDrawer(e) {
    this.trigger("open_community_settings_drawer", e);
  }
  openCommunitySubgroupJoinModal(e, t) {
    this.trigger("open_subgroup_join_modal", e, t);
  }
  openProfileInfoFromNotification(e) {
    this.trigger("open_profile_info_from_notification", e);
  }
  communityAddNewGroup(e, t, n) {
    this.trigger("open_community_add_new_group", e, t, n);
  }
  openCreatedNewsletter(e) {
    this.trigger("open_created_newsletter", e);
  }
  editNewsletterDescription() {
    this.trigger("edit_newsletter_description");
  }
  sendStarMsgs(e, t, n, r) {
    this.trigger("send_star_msgs", (0, p.unproxy)(e), t, n, r);
  }
  sendUnstarMsgs(e, t, n, r) {
    this.trigger("send_unstar_msgs", (0, p.unproxy)(e), t, n, r);
  }
  sendDeleteMsgs(e, t, n, r, i) {
    this.trigger("send_delete_msgs", (0, p.unproxy)(e), t, n, r, i);
  }
  sendRevokeMsgs(e, t, n) {
    this.trigger("send_revoke_msgs", (0, p.unproxy)(e), t, n);
  }
  _openChat(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : u.ChatEntryPoint.Unknown;
    const r = (0, p.unproxy)(e);
    r.chatEntryPoint = n;
    return new Promise(e => {
      this.trigger("open_chat", r, t, n, e);
    }).catch(e => {
      __LOG__(2)`Unexpected openChat error: ${String(e)}`;
      throw e;
    });
  }
  openChatAt(e, t, n) {
    var r = this;
    const i = (0, p.unproxy)(e);
    if (!t) {
      return this.openChatBottom(i);
    }
    this.setUiBusy(true);
    const o = this._openChat(i, t, n).then(function () {
      var e = (0, a.default)(function* (e) {
        let n;
        let i;
        const a = t.enableAnimation == null || t.enableAnimation;
        if (e) {
          if (e.wasVisible) {
            n = () => r._scrollToFocusedMsg({
              pos: "offset",
              offset: e.offset
            });
            i = () => r._scrollToFocusedMsg({
              pos: "center",
              animate: a,
              duration: 400,
              easing: [0.7, 0, 0.3, 1]
            });
          } else {
            n = () => r._scrollToFocusedMsg({
              pos: e.alignAt
            });
            switch (e.alignAt) {
              case "top":
              case "bottom":
                i = () => r._scrollToFocusedMsg({
                  pos: "center",
                  animate: a,
                  duration: 400,
                  easing: [0.88, 0.64, 0.13, 0.99]
                });
                break;
              case "center":
              default:
                i = () => Promise.resolve();
            }
          }
        } else {
          n = () => r._scrollToFocusedMsg({
            pos: "center"
          });
          i = () => Promise.resolve();
        }
        yield n();
        return i();
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()).then(() => {
      var e;
      if ((t == null || (e = t.msg) === null || e === undefined ? undefined : e.botPluginReferenceIndex) != null) {
        var n;
        const e = t == null || (n = t.msg) === null || n === undefined ? undefined : n.botResponseTargetId;
        if (e != null) {
          this.botTogglePluginSearchDetailsToggle(e, true);
        }
      }
      this.flashFocusedMsg(t.highlightMentionMsg);
    }).then(() => true).catch((0, l.catchAbort)(() => false));
    o.finally(() => {
      this.setUiBusy(false);
    });
    return o;
  }
  openChatFromUnread(e, t) {
    const n = (0, p.unproxy)(e);
    let r;
    if (n.unreadMsgAnchor) {
      r = {
        collection: n.unreadMsgAnchor.msgChunk,
        promise: Promise.resolve(),
        msg: n.unreadMsgAnchor,
        isUnreadDivider: n.shouldShowUnreadDivider
      };
    }
    if (r || n.unreadCount > 0) {
      this.setUiBusy(true);
      const e = this._openChat(n, r, t).then(() => this._scrollToFocusedMsg({
        pos: "top",
        offset: -120
      })).then(() => true).catch((0, l.catchAbort)(() => false));
      e.finally(() => {
        this.setUiBusy(false);
      });
      return e;
    }
    return this.openChatBottom(n, t);
  }
  openChatBottom(e, t) {
    const n = (0, p.unproxy)(e);
    let r;
    this.setUiBusy(true);
    if (n.msgs.length > 0) {
      r = {
        collection: n.msgs,
        msg: n.msgs.last(),
        isUnreadDivider: false
      };
    }
    const i = this._openChat(n, r, t).then(() => this._scrollChatToBottom()).then(() => true).catch((0, l.catchAbort)(() => false));
    i.finally(() => {
      this.setUiBusy(false);
    });
    return i;
  }
  _scrollToFocusedMsg(e) {
    return new Promise(t => {
      this.trigger("scroll_to_focused_msg", t, e);
    }).catch(e => {
      __LOG__(3)`Unexpected scrollToFocusedMsg error: ${String(e)}`;
    });
  }
  _scrollChatToBottom() {
    return new Promise(e => {
      this.trigger("scroll_chat_to_bottom", e);
    }).catch(e => {
      __LOG__(3)`Unexpected scrollChatToBottom error: ${String(e)}`;
    });
  }
  flashFocusedMsg(e) {
    self.setTimeout(() => {
      this.trigger("flash_focused_msg");
      if (e) {
        this.trigger("flash_mention_msg");
      }
    }, 0);
  }
  updateChatlistSelection(e) {
    const t = (0, p.unproxy)(e);
    this.trigger("update_chatlist_selection", t);
  }
  closeChat(e) {
    const t = (0, p.unproxy)(e);
    this.trigger("close_chat", t);
  }
  focusNextChat(e) {
    this.trigger("focus_next_chat", e);
  }
  focusPrevChat(e) {
    this.trigger("focus_prev_chat", e);
  }
  focusChatSearch() {
    this.trigger("focus_chat_search");
  }
  startGroupCall(e, t) {
    const n = (0, p.unproxy)(e);
    this.trigger("voip_start_group_call", n, t);
  }
  closeStatusViewer() {
    this.trigger("close_status_viewer");
  }
  openComposeBoxPanel(e) {
    this.trigger("open_compose_box_panel", e);
  }
  closeExpressionPanels() {
    this.trigger("close_expression_panels");
  }
  login(e) {
    this.trigger("login", e);
  }
  logout() {
    this.trigger("logout");
  }
  openContextMenu(e, t) {
    this.trigger("open_context_menu", e, t);
  }
  closeContextMenu(e) {
    this.trigger("close_context_menu", e);
  }
  openTooltip(e, t) {
    this.trigger("open_tooltip", e, t);
  }
  closeTooltip(e) {
    this.trigger("close_tooltip", e);
  }
  alertNewMsg(e) {
    this.trigger("alert_new_msg", e);
  }
  newMediaMsg(e) {
    this.trigger("new_media_msg", e);
  }
  alertCall(e, t, n, r, i, a) {
    this.trigger("alert_call", {
      wid: e,
      msgId: t,
      isVideo: n,
      isGroup: r,
      canHandleLocally: i,
      isSilenced: a
    });
  }
  cancelCall(e) {
    this.trigger("cancel_call", e);
  }
  windowError() {}
  onPanesWillChange(e) {
    this.trigger("panes_will_change", e);
  }
  onPanesDidChange(e) {
    this.trigger("panes_did_change", e);
  }
  reactionChangeLastMessage() {
    this.trigger("reaction_changed_last_msg");
  }
  openGroupsV4InviteRequestFlow(e, t, n, r) {
    this.trigger("open_groups_v4_invite_request_flow", e, t, n, r);
  }
  toggleLidDebugBadge() {
    this.trigger("toggle_lid_debug_badge");
  }
  openCommandPalette() {
    this.trigger("open_command_palette");
  }
  closeCommandPalette() {
    this.trigger("close_command_palette");
  }
  setUiBusy(e) {
    let t = this.uiBusy || 0;
    if (e) {
      ++t;
      this._clearUiBusy();
      this._triggerIdleEvent.cancel();
    } else if (t) {
      --t;
    }
    this.uiBusy = t;
    if (t === 0) {
      this._clearUiBusy.cancel();
      this._triggerIdleEvent();
    }
  }
  windowMouseDown(e) {
    this.trigger("window_mousedown", e);
  }
  windowClick(e) {
    this.trigger("window_click", e);
  }
  midnight() {
    this.trigger("midnight");
  }
  serverUpdatedClientExpiration() {
    this.trigger("serverUpdatedClientExpiration");
  }
  textsizeChange(e) {
    this.trigger("textsize_change", e);
  }
  scrollMessages() {
    this.trigger("scroll_messages");
  }
  getConversationHeaderOffset(e) {
    this.trigger("get_conversation_header_offset", e);
  }
  floaterEscapeOverlap(e, t) {
    this.trigger("floater_escape_overlap", e, t);
  }
  refreshMessages() {
    this.trigger("refresh_messages");
  }
  readyForMainStreamModeLegacy() {
    this.trigger("main_stream_mode_ready_legacy");
  }
  storageInitializationError() {
    this.trigger("storage_initialization_error");
  }
  editGroupSubject() {
    this.trigger("edit_group_subject");
  }
  endFlow() {
    this.trigger("end_flow");
  }
  refreshQR() {
    this.trigger("md_refresh_qr");
  }
  setSocketState(e) {
    this.trigger("set_socket_state", e);
  }
  socketStreamDisconnected() {
    this.trigger("socket_stream_disconnected");
  }
  openSocketStream() {
    this.trigger("open_socket_stream");
  }
  reconnectSocket() {
    this.trigger("reconnect_socket");
  }
  openLongLinkModal() {
    this.trigger("open_long_link_modal");
  }
  closeLongLinkModal() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    this.trigger("close_long_link_modal", e);
  }
  openLockScreenModal() {
    this.trigger("open_lock_screen_modal");
  }
  correctPasscodeLockScreen(e) {
    this.trigger("correct_passcode_lock_screen", e);
  }
  incorrectPasscodeLockScreen() {
    this.trigger("incorrect_passcode_lock_screen");
  }
  offlineDeliveryEnd() {
    this.isOfflineDeliveryEnd = true;
    this.trigger("offline_delivery_end");
  }
  offlineDeliveryStart() {
    this.isOfflineDeliveryEnd = false;
    this.trigger("offline_delivery_start");
  }
  readyForProcessOffline() {
    this.trigger("offline_process_ready");
  }
  readyForMainStreamMode() {
    this.isMainStreamReadyMd = true;
    this.trigger("main_stream_mode_ready");
  }
  onInitialChatHistorySynced() {
    this.trigger("on_initial_chat_synced");
  }
  onRecentChatHistorySynced() {
    this.trigger("on_recent_chat_history_synced");
  }
  onFullChatHistorySynced() {
    this.trigger("on_full_chat_history_synced");
  }
  onHistorySyncChunkProcessed(e) {
    this.trigger("new_history_sync_chunk_processed", e);
  }
  handleOfflineProgressUpdate() {
    this.trigger("offline_progress_update");
  }
  criticalSyncDone() {
    this.trigger("on_critical_sync_done");
  }
  onTemporaryBan(e) {
    this.trigger("account_temporarily_banned", e);
  }
  onStartingLogout() {
    this.trigger("starting_logout");
  }
  handleFatalError() {
    this.trigger("handle_fatal_error");
  }
  showServiceUnavailableError() {
    this.trigger("service_unavailable_503");
  }
  merchantDetailsDrawer(e) {
    this.trigger("merchant_details_drawer", e);
  }
  showMerchantDetailsEntityTypePopup(e, t) {
    this.trigger("show_merchant_details_entity_type_popup", e, t);
  }
  showCountrySelector(e, t, n, r) {
    this.trigger("show_country_selector_popup", e, t, n, r);
  }
  toggleStickerMaker() {
    this.trigger("toggle_sticker_maker");
  }
  onAccountSyncForPrivacy(e) {
    this.trigger("account_sync_for_privacy", e);
  }
  openStickerPack(e) {
    this.trigger("open_sticker_pack", e);
  }
  onStatusViewerOpen() {
    this.trigger("status_viewer_open");
  }
  triggerStorageAlert() {}
  triggerBugReportV2() {}
  onAbPropsUpdate(e) {
    this.trigger("on_ab_props_update", e);
  }
  abPropsLoaded() {
    this.trigger("ab_props_loaded");
  }
  onNotificationPermissionChange() {
    this.trigger("on_notification_permission_change");
  }
  playNextPtv(e) {
    this.trigger("sequential_ptv_playback", e);
  }
  botWaitlistStateUpdated() {
    this.trigger("bot_waitlist_state_updated");
  }
  botTogglePluginSearchDetailsToggle(e, t) {
    if (e != null) {
      this.trigger(`bot_toggle_plugin_search_details_for_target_id_${e}`, t);
    } else {
      __LOG__(3)`Cmd: botTogglePluginSearchDetailsToggle called w/ null target id.`;
    }
  }
}
exports.CmdImpl = g;
const m = new g();
exports.Cmd = m;