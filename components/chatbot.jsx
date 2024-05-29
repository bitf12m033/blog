'use client'
import Script from 'next/script'

function Chatbot() {
  return (<>
    <Script src="/chatbot.js" strategy="lazyOnload" onLoad={() => initializeChatbot()} />
  </>)
}

export default Chatbot