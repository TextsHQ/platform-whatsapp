import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import type WhatsAppAPI from './api'

export default class WhatsAppAuth extends Component {
  state: { qrValue?: string } = { }

  constructor(props) {
    super(props)
    const { api, login } = this.props as { api: WhatsAppAPI, login: () => void }
    console.log('here lmao')
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
