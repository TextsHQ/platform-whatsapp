import DBMessage from '../entities/DBMessage'

// end of history transfer message
const getEotMessage = (threadID: string, orderKey: number): DBMessage => {
  const msg = new DBMessage()
  const content: Partial<DBMessage> = {
    threadID,
    id: 'eot-msg',
    timestamp: new Date(0),
    senderID: 'none',
    isSender: false,
    text: 'Use WhatsApp on your phone to see older messages',
    cursor: (orderKey - 1)?.toString(),
  }

  return Object.assign(msg, content)
}

export default getEotMessage
