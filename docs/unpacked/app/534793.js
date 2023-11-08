Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./904704.js");
var i = require("./114479.js");
var a = require("./698210.js");
let o;
let s = 0;
exports.default = class {
  constructor(e) {
    this.oggBlob = e;
  }
  generateBlob() {
    return this.oggBlobToWAVBlob(this.oggBlob, 1);
  }
  oggBlobToWAVBlob(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return new Promise(n => {
      const r = (0, i.getOpusDecoderWorker)(e => {
        if (e.data == null) {
          for (let e = 0; e < t; e++) {
            l.forEach(t => {
              const n = t[e] || t[0];
              for (let e = 0; e < n.length; e++) {
                u.push(n[e]);
              }
            });
          }
          const e = this.encodeWAV(u, c, t);
          const r = new Blob([e.readByteArray()], {
            type: "audio/wav"
          });
          s--;
          if (s === 0 && o) {
            if (o.close) {
              o.close();
            }
            o = undefined;
          }
          n(r);
        } else {
          l.push(e.data);
          t = l[0].length;
        }
      });
      const l = [];
      const u = [];
      s++;
      const c = o || new window.AudioContext();
      const d = {
        outputBufferSampleRate: c.sampleRate,
        bufferLength: 4096
      };
      r.postMessage({
        command: "decode-init",
        config: d
      });
      (0, a.blobToArrayBuffer)(e).then(e => {
        r.postMessage({
          command: "decode",
          pages: new Uint8Array(e)
        });
        r.postMessage({
          command: "decode-done"
        });
      }).catch(e => {
        __LOG__(3)`Player::oggBlobToWAVBlob error: ${e}`;
      });
    });
  }
  encodeWAV(e, t, n) {
    const i = new r.Binary(undefined, true);
    i.ensureCapacity(44 + e.length * 2);
    i.writeString("RIFF");
    i.writeUint32(36 + e.length * 2);
    i.writeString("WAVE");
    i.writeString("fmt ");
    i.writeUint32(16);
    i.writeUint16(1);
    i.writeUint16(n);
    i.writeUint32(t.sampleRate);
    i.writeUint32(t.sampleRate * n * 2);
    i.writeUint16(n * 2);
    i.writeUint16(16);
    i.writeString("data");
    i.writeUint32(e.length * 2);
    for (let t = 0; t < e.length; t++) {
      let n = Math.max(-1, Math.min(e[t], 1));
      n *= n > 0 ? 32767 : 32768;
      i.writeInt16(Math.floor(n));
    }
    return i;
  }
};