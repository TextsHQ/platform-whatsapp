import React, { useEffect, useState } from 'react'
// import QRCode from 'qrcode.react'
import { PlatformAPI } from '@textshq/platform-sdk'

let called = false 
const WhatsAppAuth = ({ api, login }: { api: PlatformAPI, login: Function }) => {
  // const [qrValue, setQRValue] = useState<string>()
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
  return (
    <div className="auth imessage-auth">
      <ol>
        <li>Open WhatsApp app on your phone</li>
        <li>Go to Settings or Menu</li>
        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
        <li>{'Tap on "WhatsApp Web/Desktop", then "Scan QR Code"'}</li>
        <li>Point your phone to this screen:</li>
      </ol>
    </div>
  )
}

export default WhatsAppAuth
