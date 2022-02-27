import DBMessage from '../entities/DBMessage'

// end of history transfer message
const getEotMessage = (threadID: string, orderKey: number, timestamp: Date): DBMessage => {
  const msg = new DBMessage()
  const content: Partial<DBMessage> = {
    threadID,
    id: 'eot-msg',
    timestamp: new Date((timestamp?.getTime() || 1) - 1),
    senderID: 'none',
    isSender: false,
    isAction: true,
    text: 'Use WhatsApp on your phone to see older messages',
    cursor: (orderKey - 1)?.toString(),
  }

  return Object.assign(msg, content)
}

export default getEotMessage
