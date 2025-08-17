import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Footer = () => {
  const { toggleLanguage, isHindi } = useLanguage()
  
  // Add fallback to prevent crashes
  const t = translations[isHindi ? 'Hindi' : 'English'] || translations['English']

  // Social media links with redirects
  const socialMediaLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/timesnowindia',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/timesnowindia',
      color: 'hover:text-blue-300'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/timesnowindia',
      color: 'hover:text-pink-400'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/timesnowindia',
      color: 'hover:text-red-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/timesnowindia',
      color: 'hover:text-blue-500'
    }
  ]

  const handleSocialMediaClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="bg-timesnow-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t?.aboutUs || 'About Us'}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {t?.companyDescription || 'Times Now India 27*7 is India\'s most trusted news channel, providing the latest breaking news, live updates, and in-depth analysis of current events.'}
            </p>
            
            {/* Social Media Links */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-400 mb-3">{isHindi ? 'सोशल मीडिया पर हमें फॉलो करें' : 'Follow us on Social Media'}</h4>
              <div className="flex space-x-4">
                {socialMediaLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleSocialMediaClick(social.url)}
                    className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-gray-700`}
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t?.quickLinks || 'Quick Links'}</h3>
            <ul className="space-y-2">
              <li><Link to="/india" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.india || 'India'}</span>
              </Link></li>
              <li><Link to="/world" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.world || 'World'}</span>
              </Link></li>
              <li><Link to="/entertainment" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.entertainment || 'Entertainment'}</span>
              </Link></li>
              <li><Link to="/sports" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.sports || 'Sports'}</span>
              </Link></li>
              <li><Link to="/business" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.business || 'Business'}</span>
              </Link></li>
              <li><Link to="/technology" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.technology || 'Technology'}</span>
              </Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t?.companyDescription || 'Company'}</h3>
            <ul className="space-y-2">
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.contactUs || 'Contact Us'}</span>
              </Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.careers || 'Careers'}</span>
              </Link></li>
              <li><Link to="/advertise-with-us" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.advertiseWithUs || 'Advertise with Us'}</span>
              </Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.privacyPolicy || 'Privacy Policy'}</span>
              </Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                <span className="ml-2">{t?.termsConditions || 'Terms & Conditions'}</span>
              </Link></li>
            </ul>
          </div>

          {/* Newsletter & Language */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t?.newsletterLabel || 'Newsletter'}</h3>
            <p className="text-gray-300 text-sm mb-4">{t?.stayUpdated || 'Stay Updated'}</p>
            
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t?.emailPlaceholder || 'Enter your email'}
                  className="flex-1 px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-timesnow-red"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-timesnow-red text-white rounded-r-md hover:bg-red-700 transition-colors"
                >
                  {t?.subscribe || 'Subscribe'}
                </button>
              </div>
            </form>

            <div className="mb-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors p-2 rounded hover:bg-gray-700"
              >
                <span>🌐</span>
                <span>{isHindi ? 'हिंदी' : 'English'}</span>
              </button>
            </div>

            <div className="text-sm text-gray-400">
              <p>{t?.copyright || '© 2024 Times Now India 27*7. All rights reserved.'}</p>
            </div>
          </div>
        </div>

        {/* News Reporter Information */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-timesnow-red">
                {isHindi ? 'समाचार संवाददाता' : 'News Reporter'}
              </h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-timesnow-red p-2 rounded-full">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Mr. Shubham Meena</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-timesnow-red" />
                        <span>Harangaon Tehsil, Khategaon</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-timesnow-red" />
                        <span>District Dewas, Madhya Pradesh - 455336</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-timesnow-red" />
                        <a 
                          href="tel:+919926890112" 
                          className="hover:text-white transition-colors"
                        >
                          +91 9926890112
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-timesnow-red">
                {isHindi ? 'हमसे जुड़ें' : 'Connect With Us'}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Mail size={16} className="text-timesnow-red" />
                  <a href="mailto:info@timesnowindia.com" className="hover:underline">
                    info@timesnowindia.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Phone size={16} className="text-timesnow-red" />
                  <a href="tel:+919926890112" className="hover:underline">
                    +91 9926890112
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={16} className="text-timesnow-red" />
                  <span>Madhya Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Social Media & External Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-timesnow-red">
              {isHindi ? 'अतिरिक्त प्लेटफॉर्म' : 'Additional Platforms'}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <a 
                href="https://www.snapchat.com/add/timesnowindia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-yellow-300 transition-colors p-2 rounded hover:bg-gray-700"
              >
                <span className="text-2xl">📱</span>
                <span>Snapchat</span>
                <ExternalLink size={14} />
              </a>
              <a 
                href="https://t.me/timesnowindia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors p-2 rounded hover:bg-gray-700"
              >
                <span className="text-2xl">📬</span>
                <span>Telegram</span>
                <ExternalLink size={14} />
              </a>
              <a 
                href="https://www.tiktok.com/@timesnowindia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors p-2 rounded hover:bg-gray-700"
              >
                <span className="text-2xl">🎵</span>
                <span>TikTok</span>
                <ExternalLink size={14} />
              </a>
              <a 
                href="https://www.reddit.com/r/timesnowindia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors p-2 rounded hover:bg-gray-700"
              >
                <span className="text-2xl">🤖</span>
                <span>Reddit</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
