import React from 'react'
import QRCode from 'qrcode.react'

import type WhatsAppAPI from './api'

type Props = { api: WhatsAppAPI, login: () => void }

export default class WhatsAppAuth extends React.Component<Props> {
  state: { qrValue?: string } = { }

  constructor(props: Props) {
    super(props)
    const { api, login } = this.props
    api.onLoginEvent(({ qr: qrValue, isOpen }) => {
      this.setState({ qrValue })
      if (isOpen) {
        login()
      }
    })
  }

  render() {
    const { qrValue } = this.state
    return (
      <div className="auth whatsapp-auth">
        <ol>
          <li>Open WhatsApp app on your phone</li>
          <li>Go to Settings or Menu</li>
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          <li>{'Tap on "Linked Devices", then "Link a Device"'}</li>
          <li>Point your phone to this screen:</li>
        </ol>
        <div className="text-center">
          {qrValue
            ? <QRCode size={256} value={qrValue} includeMargin />
            : 'Loading QR code...'}
        </div>
      </div>
    )
  }
}
