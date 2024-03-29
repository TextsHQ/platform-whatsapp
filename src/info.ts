import { PlatformInfo, MessageDeletionMode, Attribute, Participant } from '@textshq/platform-sdk'

const info: PlatformInfo = {
  name: 'whatsapp',
  version: '0.0.1',
  displayName: 'WhatsApp',
  tags: [],
  icon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 16 16">
  <rect width="16" height="16" fill="#48C95F" rx="5"/>
  <path fill="#FFFFFF" fill-rule="evenodd" d="M8.022 13.292H8.02a5.306 5.306 0 0 1-2.538-.646l-2.816.738.754-2.752a5.301 5.301 0 0 1-.709-2.655 5.318 5.318 0 0 1 5.311-5.31c1.42 0 2.754.553 3.757 1.557a5.279 5.279 0 0 1 1.554 3.757 5.32 5.32 0 0 1-5.31 5.311Zm-2.41-1.608.161.096a4.407 4.407 0 0 0 2.247.615h.002a4.42 4.42 0 0 0 4.414-4.414c0-1.18-.458-2.288-1.291-3.123a4.384 4.384 0 0 0-3.121-1.294 4.42 4.42 0 0 0-4.416 4.414c0 .834.233 1.646.675 2.349l.104.167-.445 1.629 1.67-.439Zm4.904-2.56c.093.046.155.076.182.12.033.056.033.321-.077.631-.111.31-.641.593-.896.631a1.818 1.818 0 0 1-.836-.052 7.647 7.647 0 0 1-.757-.28c-1.244-.537-2.084-1.743-2.243-1.97a1.628 1.628 0 0 0-.024-.034c-.07-.094-.541-.722-.541-1.371 0-.612.3-.932.438-1.08l.026-.027a.487.487 0 0 1 .354-.166c.088 0 .177 0 .254.004h.03c.077 0 .174 0 .269.228l.146.356c.115.278.24.585.263.63.033.066.055.143.011.232l-.019.038a.754.754 0 0 1-.114.183 5.207 5.207 0 0 0-.068.082 1.78 1.78 0 0 1-.13.15c-.067.067-.136.139-.059.272a4 4 0 0 0 .738.919c.424.378.793.538.98.619l.088.04c.132.066.21.055.287-.034a7.74 7.74 0 0 0 .42-.52c.089-.133.177-.11.299-.066a22.113 22.113 0 0 1 .98.467Z" clip-rule="evenodd"/>
  </svg>`,
  brand: {
    background: '#48C95F',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 48 48">
    <path fill="black" fill-rule="evenodd" d="M24.067 39.877h-.007a15.92 15.92 0 0 1-7.614-1.939L8 40.154l2.26-8.257a15.904 15.904 0 0 1-2.126-7.965C8.137 15.147 15.284 8 24.067 8a15.83 15.83 0 0 1 11.27 4.673A15.836 15.836 0 0 1 40 23.945c-.003 8.783-7.148 15.929-15.933 15.932Zm-7.23-4.823.484.287a13.222 13.222 0 0 0 6.74 1.846h.006c7.299 0 13.24-5.941 13.242-13.243a13.164 13.164 0 0 0-3.875-9.37 13.153 13.153 0 0 0-9.362-3.883c-7.305 0-13.246 5.94-13.249 13.242a13.21 13.21 0 0 0 2.025 7.048l.315.5-1.338 4.888 5.012-1.315Zm14.712-7.679c.278.134.465.225.545.358.1.166.1.964-.232 1.894-.332.93-1.922 1.779-2.687 1.893-.686.102-1.554.145-2.508-.158a22.932 22.932 0 0 1-2.27-.839c-3.731-1.611-6.254-5.229-6.73-5.912a4.649 4.649 0 0 0-.07-.1l-.003-.003c-.21-.281-1.623-2.165-1.623-4.114 0-1.834.901-2.795 1.316-3.238l.078-.084a1.462 1.462 0 0 1 1.061-.498c.266 0 .531.003.763.014a.894.894 0 0 0 .09.001c.232-.001.52-.003.806.683.11.263.27.654.44 1.067.343.834.721 1.755.788 1.889.1.199.166.431.033.697l-.056.114a2.26 2.26 0 0 1-.342.55c-.067.078-.136.162-.204.245a6.61 6.61 0 0 1-.393.453c-.2.198-.407.414-.175.812.232.399 1.031 1.703 2.215 2.758a10.28 10.28 0 0 0 2.938 1.858c.11.047.198.086.263.118.398.2.63.166.863-.1.232-.265.995-1.162 1.26-1.56.266-.399.531-.333.896-.2s2.322 1.096 2.72 1.296l.218.106Z" clip-rule="evenodd"/>
    </svg>`,
  },
  loginMode: 'custom',
  deletionMode: MessageDeletionMode.DELETE_FOR_EVERYONE,
  editMessageTimeLimit: 15 * 60, // 15 minutes
  deleteForEveryoneTimeLimit: 60 * 60 * 24 * 2, // 2 days
  maxGroupTitleLength: 25,
  reactions: {
    supported: {
      '👍': { title: '👍', render: '👍' },
      '❤️': { title: '❤️', render: '❤️' },
      '😂': { title: '😂', render: '😂' },
      '😯': { title: '😯', render: '😯' },
      '😢': { title: '😢', render: '😢' },
      '🙏': { title: '🙏', render: '🙏' },
    },
    canReactWithAllEmojis: true,
  },
  attributes: new Set([
    Attribute.SUPPORTS_ARCHIVE,
    Attribute.SUPPORTS_FORWARD,
    Attribute.SUPPORTS_MARK_AS_UNREAD,
    Attribute.SUPPORTS_DELETE_THREAD,
    Attribute.SHARES_CONTACTS,
    Attribute.SUPPORTS_QUOTED_MESSAGES,
    Attribute.CAN_MESSAGE_PHONE_NUMBER,
    Attribute.SUPPORTS_GROUP_IMAGE_CHANGE,
    Attribute.SUPPORTS_GROUP_PARTICIPANT_ROLE_CHANGE,
    Attribute.SUBSCRIBE_TO_CONN_STATE_CHANGE,
    Attribute.SUBSCRIBE_TO_THREAD_SELECTION,
    Attribute.SUPPORTS_STOP_TYPING_INDICATOR,
    Attribute.SORT_MESSAGES_ON_PUSH,
    Attribute.SUPPORTS_QUOTED_MESSAGES_FROM_ANY_THREAD,
    Attribute.SUBSCRIBE_TO_ONLINE_OFFLINE_ACTIVITY,
    Attribute.SUPPORTS_MESSAGE_EXPIRY,
    Attribute.CAN_FETCH_LINK_PREVIEW,
    Attribute.CAN_REMOVE_LINK_PREVIEW,
    Attribute.SUPPORTS_EDIT_MESSAGE,
    Attribute.GET_MESSAGES_SUPPORTS_AFTER_DIRECTION,
    // Attribute.SUPPORTS_SEARCH,
    Attribute.SUPPORTS_PUSH_NOTIFICATIONS,
  ]),
  attachments: {
    recordedAudioMimeType: 'audio/ogg',
    gifMimeType: 'video/mp4',
    supportsCaption: true,
    supportsStickers: true,
    maxSize: {
      // https://faq.whatsapp.com/general/i-get-a-message-that-my-video-is-too-long-and-it-wont-send/
      // "Note: For documents, the maximum file size allowed is 100 MB."
      // "The maximum file size allowed for all media (photos, videos or voice messages) to be sent or forwarded through WhatsApp is 16 MB on all platforms."
      image: 16 * 1024 * 1024,
      video: 16 * 1024 * 1024,
      audio: 16 * 1024 * 1024,
      files: 100 * 1024 * 1024,
    },
  },
  notifications: {
    android: {
      senderID: '293955441834',
    },
  },
  extra: {
    e2ee: 'full',
    macOSAppBundleIDs: [
      'WhatsApp', // electron
      'net.whatsapp.WhatsApp', // catalyst
    ],
    mentionsSupported: true,
    getUnknownParticipant(participantID: string): Participant | undefined {
      if (participantID && participantID.endsWith('s.whatsapp.net')) {
        return {
          id: participantID,
          phoneNumber: '+' + participantID.split('@').shift(),
        }
      }
    },
  },
}

export default info
