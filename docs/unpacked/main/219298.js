Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVDeviceType = exports.AVDeviceStatusContext = exports.AVDeviceStatusCode = undefined;
exports.AVDeviceType = {
  AudioInput: 0,
  AudioOutput: 1,
  Video: 2,
  NotIdentified: 3
};
exports.AVDeviceStatusContext = {
  DeviceSetup: 0,
  DeviceMidstream: 1,
  DeviceSelection: 2,
  DeviceStop: 3,
  DeviceOther: 4
};
exports.AVDeviceStatusCode = {
  DeviceSuccess: 0,
  FailureNonDevice: 1,
  VideoDeviceNotFound: 2,
  VideoDeviceUnsupportedCapability: 3,
  VideoDeviceUnusable: 4,
  VideoDeviceInUse: 5,
  VideoDeviceUnauthorized: 6,
  VideoDeviceTimeout: 7,
  VideoDeviceOther: 127,
  AudioCaptureDeviceNotFound: 128,
  AudioPlaybackDeviceNotFound: 129,
  AudioDeviceNotFound: 130,
  AudioCaptureDeviceUnusable: 131,
  AudioPlaybackDeviceUnusable: 132,
  AudioDeviceUnusable: 133,
  AudioCaptureDeviceInUse: 134,
  AudioPlaybackDeviceInUse: 135,
  AudioDeviceInUse: 136,
  AudioCaptureDeviceUnauthorized: 137,
  AudioPlaybackDeviceUnauthorized: 138,
  AudioDeviceUnauthorized: 139,
  AudioCaptureDeviceTimeout: 140,
  AudioPlaybackDeviceTimeout: 141,
  AudioDeviceTimeout: 142,
  AudioCaptureDeviceOther: 253,
  AudioPlaybackDeviceOther: 254,
  AudioDeviceOther: 255
};