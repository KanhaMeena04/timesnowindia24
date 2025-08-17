import React, { useState } from 'react'
import { X, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isHindi } = useLanguage()
  
  // Replace this with your actual WhatsApp number (include country code)
  const whatsappNumber = '919876543210' // Example: 919876543210 for +91 98765 43210
  
  const handleWhatsAppClick = () => {
    const message = isHindi 
      ? 'नमस्ते! मैं आपसे बात करना चाहता हूं।' 
      : 'Hello! I would like to chat with you.'
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCallClick = () => {
    window.open(`tel:+${whatsappNumber}`, '_blank')
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative bg-white rounded-full p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:rotate-3 whatsapp-hover"
          aria-label="WhatsApp Chat"
        >
          {/* Pulse Ring Animation */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          
          {/* WhatsApp Image */}
          <div className="relative z-10 w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-green-600 p-1 group-hover:from-green-500 group-hover:to-green-700 transition-all duration-300">
            <img 
              src="./src/components/wtsp.png" 
              alt="WhatsApp" 
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-150 group-hover:scale-100"></div>
          
          {/* Floating Animation */}
          <div className="absolute inset-0 rounded-full bg-green-300 opacity-0 group-hover:opacity-10 animate-float"></div>
        </button>
      </div>

      {/* Chat Options Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-in slide-in-from-bottom-2 duration-300">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 min-w-[250px] backdrop-blur-sm bg-white/95">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1 bounce-in">
                  <img 
                    src="./src/components/wtsp.png" 
                    alt="WhatsApp" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {isHindi ? 'हमसे जुड़ें' : 'Connect with us'}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-all duration-200 hover:scale-110 hover:rotate-90"
              >
                <X size={20} />
              </button>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl mb-4 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group pulse-glow"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 p-1 group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                <img 
                  src="./src/components/wtsp.png" 
                  alt="WhatsApp" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-semibold text-lg">{isHindi ? 'WhatsApp पर चैट करें' : 'Chat on WhatsApp'}</span>
            </button>

            {/* Call Button */}
            <button
              onClick={handleCallClick}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 p-1.5 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <Phone size={20} className="text-white" />
              </div>
              <span className="font-semibold text-lg">{isHindi ? 'कॉल करें' : 'Call us'}</span>
            </button>

            {/* Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 font-medium">
                  {isHindi ? '24x7 उपलब्ध' : 'Available 24x7'}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {isHindi ? 'तुरंत प्रतिक्रिया' : 'Instant Response'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default WhatsAppChat
