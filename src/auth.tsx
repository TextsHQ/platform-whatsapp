import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react'

import { PlatformAPI } from '../../platform-common/platform-types'

const WhatsAppAuth = ({ api, login }: { api: PlatformAPI, login: Function }) => {
  const [qrValue, setQRValue] = useState<string>()
  useEffect(() => {
    api.onLoginEvent(ev => {
      if (ev.name === 'qr') {
        setQRValue(ev.qr)
      } else if (ev.name === 'ready') {
        login()
      }
    })
  }, [api, login])
  return (
    <div className="auth imessage-auth">
      <ol>
        <li>Open WhatsApp app on your phone</li>
        <li>Go to Settings or Menu</li>
        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
        <li>{'Tap on "WhatsApp Web/Desktop", then "Scan QR Code"'}</li>
        <li>Point your phone to this screen:</li>
      </ol>
      <div className="text-center">
        {qrValue ? <QRCode size={256} includeMargin value={qrValue} /> : 'Loading QR code...'}
      </div>
    </div>
  )
}

export default WhatsAppAuth
