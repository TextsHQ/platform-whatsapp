import { Platform, MessageDeletionMode, Attribute } from '@texts/platform-sdk'

const WhatsApp: Platform = {
    name: 'whatsapp',
    displayName: 'WhatsApp',
    version: '0.2.0',
    supportedReactions: [],
    attributes: new Set ([
        Attribute.SUPPORTS_ARCHIVE,
        Attribute.SEARCH_USERS_IN_CONTACTS,
        Attribute.SUPPORTS_QUOTED_MESSAGES,
        Attribute.SUPPORTS_SEARCH
    ]),
    deletionMode: MessageDeletionMode.DELETE_FOR_EVERYONE,
    icon: null,
    loginMode: 'custom',
    browserLogin: null,
    maxGroupTitleLength: 25,
    typingDurationMs: 1000,
    getUserLink: p => p.id
}