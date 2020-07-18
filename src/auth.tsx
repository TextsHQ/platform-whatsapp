import React, { Component } from 'react'
import QRCode from 'qrcode.react'

export default class WhatsAppAuth extends Component {
  constructor(props) {
    super(props)
    this.state = { qrValue: null as string }
    const { api } = this.props as any
    api.onLoginEvent(ev => {
      console.log(ev)
      if (ev.name === 'qr') {
        this.setState({ qrValue: ev.qr })
      } else if (ev.name === 'ready') {
        (this.props as any).login()
      }
    })
  }

  render() {
    const { qrValue } = this.state as any
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
          {qrValue ? React.createElement(QRCode, { size: 256, value: qrValue, includeMargin: true } as any) : 'Loading QR code...'}
        </div>
      </div>
    )
  }
}
