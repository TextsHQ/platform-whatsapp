module.exports = function (e) {
  if (e && e.length > 1) {
    if (e[0] === 255 && e[1] === 216 && e[2] === 255) {
      return {
        ext: "jpg",
        mime: "image/jpeg"
      };
    } else if (e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71) {
      return {
        ext: "png",
        mime: "image/png"
      };
    } else if (e[0] === 71 && e[1] === 73 && e[2] === 70) {
      return {
        ext: "gif",
        mime: "image/gif"
      };
    } else if (e[8] === 87 && e[9] === 69 && e[10] === 66 && e[11] === 80) {
      return {
        ext: "webp",
        mime: "image/webp"
      };
    } else if ((e[0] === 73 && e[1] === 73 && e[2] === 42 && e[3] === 0 || e[0] === 77 && e[1] === 77 && e[2] === 0 && e[3] === 42) && e[8] === 67 && e[9] === 82) {
      return {
        ext: "cr2",
        mime: "image/x-canon-cr2"
      };
    } else if (e[0] === 73 && e[1] === 73 && e[2] === 42 && e[3] === 0 || e[0] === 77 && e[1] === 77 && e[2] === 0 && e[3] === 42) {
      return {
        ext: "tif",
        mime: "image/tiff"
      };
    } else if (e[0] === 66 && e[1] === 77) {
      return {
        ext: "bmp",
        mime: "image/bmp"
      };
    } else if (e[0] === 73 && e[1] === 73 && e[2] === 188) {
      return {
        ext: "jxr",
        mime: "image/vnd.ms-photo"
      };
    } else if (e[0] === 56 && e[1] === 66 && e[2] === 80 && e[3] === 83) {
      return {
        ext: "psd",
        mime: "image/vnd.adobe.photoshop"
      };
    } else if (e[0] === 80 && e[1] === 75 && e[2] === 3 && e[3] === 4 && e[30] === 109 && e[31] === 105 && e[32] === 109 && e[33] === 101 && e[34] === 116 && e[35] === 121 && e[36] === 112 && e[37] === 101 && e[38] === 97 && e[39] === 112 && e[40] === 112 && e[41] === 108 && e[42] === 105 && e[43] === 99 && e[44] === 97 && e[45] === 116 && e[46] === 105 && e[47] === 111 && e[48] === 110 && e[49] === 47 && e[50] === 101 && e[51] === 112 && e[52] === 117 && e[53] === 98 && e[54] === 43 && e[55] === 122 && e[56] === 105 && e[57] === 112) {
      return {
        ext: "epub",
        mime: "application/epub+zip"
      };
    } else if (e[0] === 80 && e[1] === 75 && e[2] === 3 && e[3] === 4 && e[30] === 77 && e[31] === 69 && e[32] === 84 && e[33] === 65 && e[34] === 45 && e[35] === 73 && e[36] === 78 && e[37] === 70 && e[38] === 47 && e[39] === 109 && e[40] === 111 && e[41] === 122 && e[42] === 105 && e[43] === 108 && e[44] === 108 && e[45] === 97 && e[46] === 46 && e[47] === 114 && e[48] === 115 && e[49] === 97) {
      return {
        ext: "xpi",
        mime: "application/x-xpinstall"
      };
    } else if (e[0] !== 80 || e[1] !== 75 || e[2] !== 3 && e[2] !== 5 && e[2] !== 7 || e[3] !== 4 && e[3] !== 6 && e[3] !== 8) {
      if (e[257] === 117 && e[258] === 115 && e[259] === 116 && e[260] === 97 && e[261] === 114) {
        return {
          ext: "tar",
          mime: "application/x-tar"
        };
      } else if (e[0] !== 82 || e[1] !== 97 || e[2] !== 114 || e[3] !== 33 || e[4] !== 26 || e[5] !== 7 || e[6] !== 0 && e[6] !== 1) {
        if (e[0] === 31 && e[1] === 139 && e[2] === 8) {
          return {
            ext: "gz",
            mime: "application/gzip"
          };
        } else if (e[0] === 66 && e[1] === 90 && e[2] === 104) {
          return {
            ext: "bz2",
            mime: "application/x-bzip2"
          };
        } else if (e[0] === 55 && e[1] === 122 && e[2] === 188 && e[3] === 175 && e[4] === 39 && e[5] === 28) {
          return {
            ext: "7z",
            mime: "application/x-7z-compressed"
          };
        } else if (e[0] === 120 && e[1] === 1) {
          return {
            ext: "dmg",
            mime: "application/x-apple-diskimage"
          };
        } else if (e[0] === 0 && e[1] === 0 && e[2] === 0 && (e[3] === 24 || e[3] === 32) && e[4] === 102 && e[5] === 116 && e[6] === 121 && e[7] === 112 || e[0] === 51 && e[1] === 103 && e[2] === 112 && e[3] === 53 || e[0] === 0 && e[1] === 0 && e[2] === 0 && e[3] === 28 && e[4] === 102 && e[5] === 116 && e[6] === 121 && e[7] === 112 && e[8] === 109 && e[9] === 112 && e[10] === 52 && e[11] === 50 && e[16] === 109 && e[17] === 112 && e[18] === 52 && e[19] === 49 && e[20] === 109 && e[21] === 112 && e[22] === 52 && e[23] === 50 && e[24] === 105 && e[25] === 115 && e[26] === 111 && e[27] === 109 || e[0] === 0 && e[1] === 0 && e[2] === 0 && e[3] === 28 && e[4] === 102 && e[5] === 116 && e[6] === 121 && e[7] === 112 && e[8] === 105 && e[9] === 115 && e[10] === 111 && e[11] === 109 || e[0] === 0 && e[1] === 0 && e[2] === 0 && e[3] === 28 && e[4] === 102 && e[5] === 116 && e[6] === 121 && e[7] === 112 && e[8] === 109 && e[9] === 112 && e[10] === 52 && e[11] === 50 && e[12] === 0 && e[13] === 0 && e[14] === 0 && e[15] === 0) {
          return {
            ext: "mp4",
            mime: "video/mp4"
          };
        } else if (e[0] === 0 && e[1] === 0 && e[2] === 0 && e[3] === 28 && e[4] === 102 && e[5] === 116 && e[6] === 121 && e[7] === 112 && e[8] === 77 && e[9] === 52 && e[10] === 86) {
          return {
            ext: "m4v",
            mime: "video/x-m4v"
          };
        } else if (e[0] === 77 && e[1] === 84 && e[2] === 104 && e[3] === 100) {
          return {
            ext: "mid",
            mime: "audio/midi"
          };
        } else if (e[31] === 109 && e[32] === 97 && e[33] === 116 && e[34] === 114 && e[35] === 111 && e[36] === 115 && e[37] === 107 && e[38] === 97) {
          return {
            ext: "mkv",
            mime: "video/x-matroska"
          };
        } else if (e[0] === 26 && e[1] === 69 && e[2] === 223 && e[3] === 163) {
          return {
            ext: "webm",
            mime: "video/webm"
          };
        } else if (e[0] === 0 && e[1] === 0 && e[2] === 0 && e[3] === 20 && e[4] === 102 && e[5] === 116 && e[6] === 121 && e[7] === 112) {
          return {
            ext: "mov",
            mime: "video/quicktime"
          };
        } else if (e[0] === 82 && e[1] === 73 && e[2] === 70 && e[3] === 70 && e[8] === 65 && e[9] === 86 && e[10] === 73) {
          return {
            ext: "avi",
            mime: "video/x-msvideo"
          };
        } else if (e[0] === 48 && e[1] === 38 && e[2] === 178 && e[3] === 117 && e[4] === 142 && e[5] === 102 && e[6] === 207 && e[7] === 17 && e[8] === 166 && e[9] === 217) {
          return {
            ext: "wmv",
            mime: "video/x-ms-wmv"
          };
        } else if (e[0] === 0 && e[1] === 0 && e[2] === 1 && e[3].toString(16)[0] === "b") {
          return {
            ext: "mpg",
            mime: "video/mpeg"
          };
        } else if (e[0] === 73 && e[1] === 68 && e[2] === 51 || e[0] === 255 && e[1] === 251) {
          return {
            ext: "mp3",
            mime: "audio/mpeg"
          };
        } else if (e[4] === 102 && e[5] === 116 && e[6] === 121 && e[7] === 112 && e[8] === 77 && e[9] === 52 && e[10] === 65 || e[0] === 77 && e[1] === 52 && e[2] === 65 && e[3] === 32) {
          return {
            ext: "m4a",
            mime: "audio/m4a"
          };
        } else if (e[28] === 79 && e[29] === 112 && e[30] === 117 && e[31] === 115 && e[32] === 72 && e[33] === 101 && e[34] === 97 && e[35] === 100) {
          return {
            ext: "opus",
            mime: "audio/opus"
          };
        } else if (e[0] === 79 && e[1] === 103 && e[2] === 103 && e[3] === 83) {
          return {
            ext: "ogg",
            mime: "audio/ogg"
          };
        } else if (e[0] === 102 && e[1] === 76 && e[2] === 97 && e[3] === 67) {
          return {
            ext: "flac",
            mime: "audio/x-flac"
          };
        } else if (e[0] === 82 && e[1] === 73 && e[2] === 70 && e[3] === 70 && e[8] === 87 && e[9] === 65 && e[10] === 86 && e[11] === 69) {
          return {
            ext: "wav",
            mime: "audio/x-wav"
          };
        } else if (e[0] === 35 && e[1] === 33 && e[2] === 65 && e[3] === 77 && e[4] === 82 && e[5] === 10) {
          return {
            ext: "amr",
            mime: "audio/amr"
          };
        } else if (e[0] === 37 && e[1] === 80 && e[2] === 68 && e[3] === 70) {
          return {
            ext: "pdf",
            mime: "application/pdf"
          };
        } else if (e[0] === 77 && e[1] === 90) {
          return {
            ext: "exe",
            mime: "application/x-msdownload"
          };
        } else if (e[0] !== 67 && e[0] !== 70 || e[1] !== 87 || e[2] !== 83) {
          if (e[0] === 123 && e[1] === 92 && e[2] === 114 && e[3] === 116 && e[4] === 102) {
            return {
              ext: "rtf",
              mime: "application/rtf"
            };
          } else if (e[0] === 119 && e[1] === 79 && e[2] === 70 && e[3] === 70 && (e[4] === 0 && e[5] === 1 && e[6] === 0 && e[7] === 0 || e[4] === 79 && e[5] === 84 && e[6] === 84 && e[7] === 79)) {
            return {
              ext: "woff",
              mime: "application/font-woff"
            };
          } else if (e[0] === 119 && e[1] === 79 && e[2] === 70 && e[3] === 50 && (e[4] === 0 && e[5] === 1 && e[6] === 0 && e[7] === 0 || e[4] === 79 && e[5] === 84 && e[6] === 84 && e[7] === 79)) {
            return {
              ext: "woff2",
              mime: "application/font-woff"
            };
          } else if (e[34] === 76 && e[35] === 80 && (e[8] === 0 && e[9] === 0 && e[10] === 1 || e[8] === 1 && e[9] === 0 && e[10] === 2 || e[8] === 2 && e[9] === 0 && e[10] === 2)) {
            return {
              ext: "eot",
              mime: "application/octet-stream"
            };
          } else if (e[0] === 0 && e[1] === 1 && e[2] === 0 && e[3] === 0 && e[4] === 0) {
            return {
              ext: "ttf",
              mime: "application/font-sfnt"
            };
          } else if (e[0] === 79 && e[1] === 84 && e[2] === 84 && e[3] === 79 && e[4] === 0) {
            return {
              ext: "otf",
              mime: "application/font-sfnt"
            };
          } else if (e[0] === 0 && e[1] === 0 && e[2] === 1 && e[3] === 0) {
            return {
              ext: "ico",
              mime: "image/x-icon"
            };
          } else if (e[0] === 70 && e[1] === 76 && e[2] === 86 && e[3] === 1) {
            return {
              ext: "flv",
              mime: "video/x-flv"
            };
          } else if (e[0] === 37 && e[1] === 33) {
            return {
              ext: "ps",
              mime: "application/postscript"
            };
          } else if (e[0] === 253 && e[1] === 55 && e[2] === 122 && e[3] === 88 && e[4] === 90 && e[5] === 0) {
            return {
              ext: "xz",
              mime: "application/x-xz"
            };
          } else if (e[0] === 83 && e[1] === 81 && e[2] === 76 && e[3] === 105) {
            return {
              ext: "sqlite",
              mime: "application/x-sqlite3"
            };
          } else if (e[0] === 78 && e[1] === 69 && e[2] === 83 && e[3] === 26) {
            return {
              ext: "nes",
              mime: "application/x-nintendo-nes-rom"
            };
          } else if (e[0] === 67 && e[1] === 114 && e[2] === 50 && e[3] === 52) {
            return {
              ext: "crx",
              mime: "application/x-google-chrome-extension"
            };
          } else if (e[0] === 77 && e[1] === 83 && e[2] === 67 && e[3] === 70 || e[0] === 73 && e[1] === 83 && e[2] === 99 && e[3] === 40) {
            return {
              ext: "cab",
              mime: "application/vnd.ms-cab-compressed"
            };
          } else if (e[0] === 33 && e[1] === 60 && e[2] === 97 && e[3] === 114 && e[4] === 99 && e[5] === 104 && e[6] === 62 && e[7] === 10 && e[8] === 100 && e[9] === 101 && e[10] === 98 && e[11] === 105 && e[12] === 97 && e[13] === 110 && e[14] === 45 && e[15] === 98 && e[16] === 105 && e[17] === 110 && e[18] === 97 && e[19] === 114 && e[20] === 121) {
            return {
              ext: "deb",
              mime: "application/x-deb"
            };
          } else if (e[0] === 33 && e[1] === 60 && e[2] === 97 && e[3] === 114 && e[4] === 99 && e[5] === 104 && e[6] === 62) {
            return {
              ext: "ar",
              mime: "application/x-unix-archive"
            };
          } else if (e[0] === 237 && e[1] === 171 && e[2] === 238 && e[3] === 219) {
            return {
              ext: "rpm",
              mime: "application/x-rpm"
            };
          } else if (e[0] === 31 && e[1] === 160 || e[0] === 31 && e[1] === 157) {
            return {
              ext: "Z",
              mime: "application/x-compress"
            };
          } else if (e[0] === 76 && e[1] === 90 && e[2] === 73 && e[3] === 80) {
            return {
              ext: "lz",
              mime: "application/x-lzip"
            };
          } else if (e[0] === 208 && e[1] === 207 && e[2] === 17 && e[3] === 224 && e[4] === 161 && e[5] === 177 && e[6] === 26 && e[7] === 225) {
            return {
              ext: "msi",
              mime: "application/x-msi"
            };
          } else {
            return null;
          }
        } else {
          return {
            ext: "swf",
            mime: "application/x-shockwave-flash"
          };
        }
      } else {
        return {
          ext: "rar",
          mime: "application/x-rar-compressed"
        };
      }
    } else {
      return {
        ext: "zip",
        mime: "application/zip"
      };
    }
  } else {
    return null;
  }
};