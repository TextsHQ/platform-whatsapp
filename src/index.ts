import { texts, Platform } from '@textshq/platform-sdk'

export default {
  get info() {
    return require('./info').default
  },

  get api() {
    const nmPath = require('path').join(texts.constants.BUILD_DIR_PATH, '../node_modules')
    require('module').globalPaths.push(nmPath) // fix for bs3

    return require('./api').default
  },
} as Platform
