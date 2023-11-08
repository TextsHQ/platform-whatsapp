Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEB_CALL_STATES = exports.WEB_CALL_EVENTS = exports.WACallState = exports.WACallEvent = exports.WACallEndReason = exports.VideoUpgradeRequestEndedReason = exports.VideoState = exports.VOIP_WINDOW_IPC_EVENTS = exports.RENDERER_IPC_EVENTS = exports.RELAY_INFO = exports.PlatformTypeMapping = exports.ParticipantState = exports.MAIN_IPC_EVENTS = exports.ContentType = exports.CallNetworkMedium = exports.CALL_STATES = exports.CALL_LOG_RESULT_TYPE = exports.CALL_LOG_RESULT = undefined;
const r = require("../vendor/76672.js").Mirrored(["INCOMING", "ACTIVE_VOICE", "ACTIVE_VIDEO"]);
exports.ContentType = r;
exports.WACallEvent = {
  WANone: 0,
  CallOfferSent: 1,
  CallOfferReceived: 2,
  CallOfferAckedWithRelayInfo: 3,
  CallOfferNacked: 4,
  CallOfferReceiptReceived: 5,
  CallAcceptFailed: 6,
  CallAcceptSent: 7,
  CallAcceptReceived: 8,
  CallPreacceptReceived: 9,
  CallTerminateReceived: 10,
  CallRejectReceived: 11,
  CallOfferResend: 12,
  AudioStreamStarted: 13,
  P2PNegotiationSuccess: 14,
  RelayCreateSuccess: 15,
  CallStateChanged: 16,
  P2PNegotiationFailed: 17,
  MediaStreamError: 18,
  AudioInitError: 19,
  NoSamplingRatesForAudioRecord: 20,
  SendOfferFailed: 21,
  HandleOfferFailed: 22,
  SendAcceptFailed: 23,
  HandlePreAcceptFailed: 24,
  HandleAcceptFailed: 25,
  WillCreateSoundPort: 26,
  SoundPortCreateFailed: 27,
  TransportCandSendFailed: 28,
  P2PTransportCreateFailed: 29,
  P2PTransportMediaCreateFailed: 30,
  P2PTransportStartFailed: 31,
  P2PTransportRestartSuccess: 32,
  MissingRelayInfo: 33,
  ErrorGatheringHostCandidates: 34,
  MediaStreamStartError: 35,
  RelayLatencySendFailed: 36,
  RelayElectionSendFailed: 37,
  CallEnding: 38,
  CallCaptureBufferFilled: 39,
  CallCaptureEnded: 40,
  RxTimeout: 41,
  TxTimeout: 42,
  RxTrafficStarted: 43,
  RxTrafficStopped: 44,
  RTCPPacketReceived: 45,
  RTCPByeReceived: 46,
  RelayBindsFailed: 47,
  SoundPortCreated: 48,
  AudioDriverRestart: 49,
  Echo: 50,
  SelfVideoStateChanged: 51,
  PeerVideoStateChanged: 52,
  VideoPortCreated: 53,
  VideoPortCreateFailed: 54,
  VideoDecodeStarted: 55,
  VideoRenderStarted: 56,
  VideoCaptureStarted: 57,
  VideoPreviewFailed: 58,
  VideoPreviewReady: 59,
  VideoPreviewShouldMinimize: 60,
  VideoStreamCreateError: 61,
  VideoRenderFormatChanged: 62,
  VideoCodecMismatch: 63,
  VideoDecodePaused: 64,
  VideoDecodeResumed: 65,
  VideoEncodeFatalError: 66,
  VideoDecodeFatalError: 67,
  BatteryLevelLow: 68,
  PeerBatteryLevelLow: 69,
  GroupInfoChanged: 70,
  FieldstatsReady: 71,
  PendingCallInfoChanged: 72,
  MuteStateChanged: 73,
  InterruptionStateChanged: 74,
  RxTrafficStateForPeerChanged: 75,
  HandleAcceptReceiptFailed: 76,
  GroupParticipantLeft: 77,
  AudioRouteChangeRequest: 78,
  HandleAcceptAckFailed: 79,
  CallMissed: 80,
  WeakWiFiSwitchedToCellular: 81,
  CallAutoConnect: 82,
  RejectedDecryptionFailure: 83,
  PeerDeviceOrientationChanged: 84,
  HandleOfferAckFailed: 85,
  PendingCallAutoRejected: 86,
  FDLeakDetected: 87,
  RestartCamera: 88,
  AudioTestReplayFinished: 89,
  SyncDevices: 90,
  VideoCodecStateChanged: 91,
  CallFatal: 92,
  UpdateJoinableCallLog: 93,
  WAMax: 94
};
exports.WACallEndReason = {
  WACallEndReasonUnknown: 0,
  WACallEndReasonEndButtonTapped: 1,
  WACallEndReasonEndButtonTappedOnBusy: 2,
  WACallEndReasonReject: 3,
  WACallEndReasonRejectUnavailable: 4,
  WACallEndReasonRejectBlocked: 5,
  WACallEndReasonTimeout: 6,
  WACallEndReasonPeerUnavailable: 7,
  WACallEndReasonRejectedByPeer: 8,
  WACallEndReasonTimedoutByPeer: 9,
  WACallEndReasonTerminatedByPeer: 10,
  WACallEndReasonFailed: 11,
  WACallEndReasonHandledRemotely: 12
};
exports.WACallState = {
  WACallStateNone: 0,
  WACallStateCalling: 1,
  WACallStatePreacceptReceived: 2,
  WACallStateReceivedCall: 3,
  WACallStateAcceptSent: 4,
  WACallStateAcceptReceived: 5,
  WACallStateCallActive: 6,
  WACallStateCallActiveElseWhere: 7,
  WACallStateReceivedCallWithoutOffer: 8
};
exports.CALL_STATES = {
  INCOMING_RING: "INCOMING_RING",
  OUTGOING_RING: "OUTGOING_RING",
  OUTGOING_CALLING: "OUTGOING_CALLING",
  CONNECTING: "CONNECTING",
  CONNECTION_LOST: "CONNECTION_LOST",
  ACTIVE: "ACTIVE",
  HANDLED_REMOTELY: "HANDLED_REMOTELY",
  ENDED: "ENDED",
  REJECTED: "REJECTED",
  REMOTE_CALL_IN_PROGRESS: "REMOTE_CALL_IN_PROGRESS",
  FAILED: "FAILED",
  NOT_ANSWERED: "NOT_ANSWERED"
};
exports.WEB_CALL_STATES = {
  OUTGOING_CALLING: "OUTGOING_CALLING",
  INCOMING_CALLING: "INCOMING_CALLING",
  ACTIVE: "ACTIVE",
  NONE: "NONE"
};
exports.WEB_CALL_EVENTS = {
  MEDIA_READY: "MEDIA_STREAM_READY",
  AUDIO_TRACK_RECEIVED: "AUDIO_TRACK_RECEIVED",
  VIDEO_TRACK_RECEIVED: "VIDEO_TRACK_RECEIVED"
};
exports.VOIP_WINDOW_IPC_EVENTS = {
  INIT: "VOIP_WINDOW_INIT",
  UPDATE: "VOIP_WINDOW_UPDATE",
  REJECT: "VOIP_WINDOW_REJECT",
  ACCEPT: "VOIP_WINDOW_ACCEPT",
  IGNORE: "VOIP_WINDOW_IGNORE",
  END: "VOIP_WINDOW_END",
  OPEN_PRINA_MODAL: "OPEN_PRINA_MODAL",
  RESET: "VOIP_WINDOW_RESET",
  TOGGLE_MUTE: "VOIP_WINDOW_TOGGLE_MUTE",
  TOGGLE_CAMERA: "VOIP_WINDOW_TOGGLE_CAMERA",
  OPEN_IN_CALL_MENU: "OPEN_IN_CALL_MENU",
  CLOSE_IN_CALL_MENU: "CLOSE_IN_CALL_MENU",
  TOGGLE_DEBUG_INFO: "TOGGLE_DEBUG_INFO",
  GROUP_CALL_INVITE: "GROUP_CALL_INVITE",
  UPGRADE_REQUEST: "UPGRADE_REQUEST",
  UPGRADE_ACCEPT: "UPGRADE_ACCEPT",
  UPGRADE_REJECT: "UPGRADE_REJECT",
  UPGRADE_CANCEL: "UPGRADE_CANCEL",
  INITIATE_WINDOW_MOVE: "INITIATE_WINDOW_MOVE",
  CLOSE_WINDOW_CLICK: "CLOSE_WINDOW_CLICK",
  MINIMIZE_WINDOW_CLICK: "MINIMIZE_WINDOW_CLICK",
  MAXIMIZE_WINDOW_CLICK: "MAXIMIZE_WINDOW_CLICK",
  UNMAXIMIZE_WINDOW_CLICK: "UNMAXIMIZE_WINDOW_CLICK",
  WINDOW_MAXIMIZED: "WINDOW_MAXIMIZED",
  WINDOW_UNMAXIMIZED: "WINDOW_UNMAXIMIZED",
  WINDOW_TITLE_DBL_CLICK: "WINDOW_TITLE_DBL_CLICK",
  WINDOW_ESC_PRESS: "WINDOW_ESC_PRESS",
  WINDOW_ALWAYS_ON_TOP_CHANGED: "WINDOW_ALWAYS_ON_TOP_CHANGED",
  L10N_UPDATE: "L10N_UPDATE"
};
exports.MAIN_IPC_EVENTS = {
  EVENT: "VOIP_MAIN_WINDOW_EVENT",
  SIGNALING: "VOIP_MAIN_WINDOW_SIGNALING",
  LOGGING: "VOIP_MAIN_WINDOW_LOGGING",
  LOG_PATH: "VOIP_MAIN_WINDOW_LOG_PATH",
  AV_EVENT: "AV_DEVICE_INFO_CHANGED",
  AV_LOG: "AV_MAIN_WINDOW_LOGGING",
  AV_DEVICE_CHANGE_TOAST: "AV_DEVICE_CHANGE_TOAST",
  AV_DEVICE_STATUS_CHANGE: "AV_DEVICE_STATUS_CHANGE"
};
exports.RENDERER_IPC_EVENTS = {
  ENABLE_VOIP_FEATURES: "voip:ENABLE_VOIP_FEATURES",
  ENABLE_VOIP_GROUP_FEATURES: "voip:ENABLE_VOIP_GROUP_FEATURES",
  REQUEST_NUM_PARTICIPANTS: "voip:REQUEST_NUM_PARTICIPANTS"
};
exports.CALL_LOG_RESULT = {
  0: "invalid",
  1: "canceled",
  2: "missed",
  3: "unavailable",
  4: "reject",
  5: "connected"
};
exports.CALL_LOG_RESULT_TYPE = {
  INVALID: 0,
  CANCELED: 1,
  MISSED: 2,
  UNAVAILABLE: 3,
  REJECT: 4,
  CONNECTED: 5
};
exports.VideoState = {
  VideoStateDisabled: 0,
  VideoStateEnabled: 1,
  VideoStatePaused: 2,
  VideoStateUpgradeRequest: 3,
  VideoStateUpgradeAccept: 4,
  VideoStateUpgradeReject: 5,
  VideoStateStopped: 6,
  VideoStateUpgradeRejectByTimeout: 7,
  VideoStateUpgradeCancel: 8,
  VideoStateUpgradeCancelByTimeout: 9,
  VideoStateError: 20
};
exports.VideoUpgradeRequestEndedReason = {
  EndedByUser: 0,
  EndedByTimeout: 1
};
exports.ParticipantState = {
  ParticipantStateInvalid: 0,
  ParticipantConnected: 1,
  ParticipantIncoming: 2,
  ParticipantRinging: 3,
  ParticipantRejected: 4,
  ParticipantTerminated: 5,
  ParticipantTimedout: 6,
  ParticipantCreatingCall: 7,
  ParticipantInvisible: 8,
  ParticipantVisible: 9,
  ParticipantCancelOffer: 10
};
exports.CallNetworkMedium = {
  CallNetworkMediumCellular: 1,
  CallNetworkMediumWifi: 2,
  CallNetworkMediumNone: 3
};
exports.PlatformTypeMapping = {
  0: "unknown",
  1: "android",
  2: "iphone",
  3: "wp",
  4: "ios_tablet",
  5: "kaios",
  6: "windows",
  7: "portal",
  8: "mac_os_electron",
  9: "windows_electron"
};
exports.RELAY_INFO = {
  RELAY_ELECTION: "relayelection",
  RELAY_LATENCY: "relaylatency"
};