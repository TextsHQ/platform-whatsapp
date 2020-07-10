import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import * as QR from 'qrcode-terminal'
import { PlatformAPI } from '@textshq/platform-sdk'

let called = false 
const WhatsAppAuth = ({ api, login }: { api: PlatformAPI, login: Function }) => {
  
  if (!called) {
    console.log('called')
    api.onLoginEvent(ev => {
      console.log(ev)
      if (ev.name === 'qr') {
        console.log('qr', ev.qr)
      } else if (ev.name === 'ready') {
        login()
      }
    })
    called = true
  }
  
}

export default class WAAuth extends Component {
  constructor (props) {
    super (props)
    this.state = {qrValue: null as string}
    const api = (this.props as any).api
    api.onLoginEvent (ev => {
      console.log(ev)
      if (ev.name === 'qr') {
        QR.generate (ev.qr, {small: true})
        this.setState ({qrValue: ev.qr})
      } else if (ev.name === 'ready') {
        (this.props as any).login()
      }
    })
  }
  render () {
    const qrValue = (this.state as any).qrValue
    return (
      <div className="auth imessage-auth">
        <ol>
          <li>Open WhatsApp app on your phone</li>
          <li>Go to Settings or Menu</li>
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          <li>{'Tap on "WhatsApp Web/Desktop", then "Scan QR Code"'}</li>
          <li>Point your phone to this screen:</li>
        </ol>
        <div className="text-center" style={{margin: '50px'}}>
          {qrValue ? <QRCode size={256} value={qrValue} /> : 'Loading QR code...'}
        </div>
      </div>
    )
  }
}
