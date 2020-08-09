import React, { Component } from 'react'
import QRCode from 'qrcode.react'

export default class WhatsAppAuth extends Component {
  state: { qrValue: string } = { qrValue: null }

  constructor(props) {
    super(props)
    const { api, login } = this.props as any
    api.onLoginEvent(ev => {
      if (ev.name === 'qr') {
        this.setState({ qrValue: ev.qr })
      } else if (ev.name === 'ready') {
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
          <li>{'Tap on "WhatsApp Web/Desktop", then "Scan QR Code"'}</li>
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
