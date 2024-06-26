import React from 'react'
import QRCode from '@textshq/platform-sdk/dist/QRCode'
import { texts, AuthProps } from '@textshq/platform-sdk'

const isPhone = globalThis.textsProps?.deviceType === 'phone'

const WALogo = (
  <svg width="64" height="64" viewBox="0 0 64 64">
    <path fill="#FFF" d="M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z" />
    <path fill="#123033" d="M50.801 13.135c-4.739-4.742-11.039-7.354-17.752-7.357-13.837 0-25.094 11.253-25.099 25.085a25.039 25.039 0 0 0 3.349 12.541l-3.56 12.999 13.304-3.488a25.084 25.084 0 0 0 11.996 3.054h.011c13.83 0 25.088-11.256 25.095-25.087.002-6.703-2.607-13.005-7.344-17.747zM33.05 51.733h-.008a20.866 20.866 0 0 1-10.62-2.906l-.762-.452-7.894 2.07 2.108-7.694-.497-.789a20.802 20.802 0 0 1-3.189-11.097c.004-11.496 9.361-20.85 20.87-20.85a20.73 20.73 0 0 1 14.746 6.115 20.733 20.733 0 0 1 6.104 14.752c-.006 11.497-9.363 20.851-20.858 20.851z" />
    <path fill="#123033" d="M25.429 19.26a8.65 8.65 0 0 0-1.028.011 2.352 2.352 0 0 0-.95.255c-.221.114-.427.277-.75.582-.305.288-.481.54-.668.782a6.974 6.974 0 0 0-1.443 4.291l.001.003a8.243 8.243 0 0 0 .844 3.607c1.043 2.307 2.763 4.746 5.035 7.008a24.676 24.676 0 0 0 1.657 1.6 24.145 24.145 0 0 0 9.814 5.229s.751.179 1.391.218c.021.001.04.003.061.003a9.207 9.207 0 0 0 1.422-.033 5.086 5.086 0 0 0 2.129-.59c.423-.225.623-.337.978-.561 0 0 .11-.072.319-.23.345-.257.558-.438.845-.736.211-.22.394-.479.534-.772.2-.417.401-1.213.481-1.874.061-.505.042-.781.036-.952-.011-.275-.238-.558-.487-.678l-1.486-.668s-2.222-.967-3.581-1.587a1.278 1.278 0 0 0-.452-.104c-.341-.021-.723.068-.966.324v-.004c-.013-.001-.182.145-2.031 2.385-.102.122-.341.387-.754.362a1.086 1.086 0 0 1-.185-.029 3.402 3.402 0 0 1-.49-.17c-.316-.134-.427-.185-.643-.278l-.013-.006a15.361 15.361 0 0 1-4.013-2.556 15.88 15.88 0 0 1-.927-.885c-1.074-1.041-1.953-2.148-2.607-3.24-.035-.06-.09-.146-.15-.242-.107-.174-.225-.381-.262-.523-.095-.376.157-.678.157-.678s.622-.68.911-1.05c.278-.356.518-.704.671-.952.301-.484.39-.982.238-1.37a216.767 216.767 0 0 0-2.219-5.215c-.156-.339-.598-.589-1.005-.636a6.284 6.284 0 0 0-.414-.041" />
  </svg>
)

const instructions = (
  <div className="list">
    <div><span>1</span>Open WhatsApp on your phone</div>
    <div><span>2</span>Go to Settings or Menu</div>
    <div><span>3</span>{'Tap on "Linked Devices", then "Link a Device"'}</div>
    <div><span>4</span>Point your phone to this screen</div>
  </div>
)

const phoneInstructions = (
  <div className="list">
    <div><span>1</span>Open Texts desktop app</div>
    <div><span>2</span>Go to Prefs and add a WhatsApp account</div>
    <div><span>3</span>Wait for WhatsApp to finish syncing</div>
    <div><span>4</span>Click Add to iOS</div>
    <div><span>5</span>Go to Texts iOS prefs → Add Account → Move from Desktop</div>
    <div><span>6</span>Scan QR code using the app</div>
  </div>
)

const renderQR = (qrValue: string | undefined) => (
  <div style={{ position: 'relative' }}>
    <QRCode value={qrValue} />
    {qrValue && (
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        minWidth: 256,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        {WALogo}
      </div>
    )}
  </div>
)

export default class WhatsAppAuth extends React.Component<AuthProps, { qrValue?: string, error?: string }> {
  private timeout: ReturnType<typeof setTimeout>

  constructor(props: AuthProps) {
    super(props)
    const initTime = Date.now()
    this.state = {}
    const { api, login } = this.props
    this.timeout = setTimeout(() => {
      texts.error('qr not rendered in >10s')
    }, 10_000)
    api!.onLoginEvent!(({ qr: qrValue, isOpen, error }) => {
      const ms = Date.now() - initTime
      texts.log('qr rendered in', ms, 'ms')
      clearTimeout(this.timeout)
      this.setState(prevState => ({ qrValue, error: error || prevState?.error }))
      if (isOpen) {
        login!()
        api!.onLoginEvent!(() => { })
      }
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { qrValue, error } = this.state
    if (error) return error
    return (
      <div className="auth whatsapp-auth">
        {isPhone ? phoneInstructions : instructions}
        {!isPhone && renderQR(qrValue)}
      </div>
    )
  }
}
