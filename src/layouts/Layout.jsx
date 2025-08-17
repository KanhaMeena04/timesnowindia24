import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppChat from '../components/WhatsAppChat'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}

export default Layout
