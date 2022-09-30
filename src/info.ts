import { PlatformInfo, MessageDeletionMode, Attribute, Participant } from '@textshq/platform-sdk'

const info: PlatformInfo = {
  name: 'whatsapp',
  version: '0.0.1',
  displayName: 'WhatsApp',
  tags: [],
  icon: `
<svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 5.19974 0 3.79961 0.544967 2.73005C1.02433 1.78924 1.78924 1.02433 2.73005 0.544967C3.79961 0 5.19974 0 8 0C10.8003 0 12.2004 0 13.27 0.544967C14.2108 1.02433 14.9757 1.78924 15.455 2.73005C16 3.79961 16 5.19974 16 8C16 10.8003 16 12.2004 15.455 13.27C14.9757 14.2108 14.2108 14.9757 13.27 15.455C12.2004 16 10.8003 16 8 16C5.19974 16 3.79961 16 2.73005 15.455C1.78924 14.9757 1.02433 14.2108 0.544967 13.27C0 12.2004 0 10.8003 0 8Z" fill="#48C95F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.02234 13.2925H8.02014C7.13127 13.2922 6.25786 13.0692 5.48213 12.6461L2.66667 13.3846L3.42014 10.6325C2.95536 9.82705 2.7108 8.9134 2.7112 7.97735C2.71236 5.04906 5.09489 2.66666 8.02228 2.66666C9.44305 2.66727 10.7765 3.22037 11.7793 4.22426C12.782 5.22811 13.3339 6.56246 13.3333 7.98154C13.3322 10.9092 10.9506 13.2913 8.02234 13.2925ZM5.61243 11.6846L5.77363 11.7803C6.45138 12.1825 7.22829 12.3953 8.0204 12.3956H8.02219C10.4552 12.3956 12.4355 10.4153 12.4365 7.98125C12.4369 6.80173 11.9782 5.69267 11.1448 4.85827C10.3113 4.02387 9.203 3.56413 8.02393 3.56372C5.58901 3.56372 3.60873 5.54382 3.60777 7.97768C3.60743 8.81178 3.84081 9.62409 4.28269 10.3269L4.38765 10.4939L3.9417 12.1229L5.61243 11.6846ZM10.5164 9.12501C10.6089 9.16974 10.6714 9.19995 10.6981 9.2445C10.7313 9.29983 10.7313 9.56553 10.6208 9.87556C10.5101 10.1855 9.97998 10.4685 9.725 10.5065C9.49638 10.5407 9.20706 10.555 8.88917 10.454C8.69642 10.3928 8.44925 10.3111 8.13264 10.1744C6.88856 9.63722 6.04782 8.43144 5.88892 8.20355C5.87779 8.18759 5.87 8.17642 5.86566 8.17062L5.86459 8.16919C5.79436 8.07549 5.32379 7.44764 5.32379 6.79784C5.32379 6.18657 5.62406 5.86617 5.76227 5.71869C5.77174 5.70858 5.78045 5.69929 5.78825 5.69077C5.90988 5.55791 6.05366 5.5247 6.14213 5.5247C6.23058 5.5247 6.31915 5.52552 6.39647 5.5294C6.40601 5.52988 6.41593 5.52982 6.42619 5.52976C6.50352 5.52931 6.59994 5.52874 6.69505 5.7572C6.73163 5.84512 6.78517 5.97545 6.84164 6.11292C6.95583 6.39093 7.082 6.6981 7.1042 6.74255C7.13738 6.80898 7.15949 6.88644 7.11526 6.97505C7.10862 6.98833 7.10248 7.00087 7.09661 7.01285C7.06339 7.08068 7.03895 7.13057 6.98256 7.19641C6.96039 7.2223 6.93747 7.25021 6.91456 7.27812C6.8689 7.33372 6.82325 7.38931 6.7835 7.42891C6.71706 7.49509 6.64791 7.56688 6.72532 7.69974C6.80273 7.8326 7.06906 8.26715 7.46356 8.61904C7.88764 8.9973 8.25622 9.15718 8.44304 9.23821C8.47952 9.25404 8.50908 9.26685 8.53076 9.27771C8.66341 9.34416 8.74083 9.33304 8.81824 9.2445C8.89566 9.15593 9.14998 8.85699 9.23843 8.72415C9.32688 8.59135 9.41539 8.61347 9.537 8.65773C9.65867 8.70206 10.3111 9.02306 10.4438 9.08948C10.4697 9.10245 10.4939 9.11416 10.5164 9.12501Z" fill="#FDFDFD"/>
</svg>`,
  loginMode: 'custom',
  deletionMode: MessageDeletionMode.DELETE_FOR_EVERYONE,
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
    Attribute.GROUP_THREAD_CREATION_REQUIRES_TITLE,
    Attribute.SUBSCRIBE_TO_CONN_STATE_CHANGE,
    Attribute.SUBSCRIBE_TO_THREAD_SELECTION,
    Attribute.SUPPORTS_STOP_TYPING_INDICATOR,
    Attribute.SORT_MESSAGES_ON_PUSH,
    Attribute.SUPPORTS_QUOTED_MESSAGES_FROM_ANY_THREAD,
    Attribute.SUBSCRIBE_TO_ONLINE_OFFLINE_ACTIVITY,
    Attribute.SUPPORTS_MESSAGE_EXPIRY,
    Attribute.CAN_FETCH_LINK_PREVIEW,
    // Attribute.SUPPORTS_SEARCH,
    // Attribute.SUPPORTS_PUSH_NOTIFICATIONS,
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
