import { randomBytes } from 'crypto'

const generateMessageID = () => '3EB0' + randomBytes(8).toString('hex').toUpperCase()

export default generateMessageID
