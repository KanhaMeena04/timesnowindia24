import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import HeroCarousel from '../components/HeroCarousel'
import TrendingTicker from '../components/TrendingTicker'
import QuickAccessWidgets from '../components/QuickAccessWidgets'
import NewsFeed from '../components/NewsFeed'
import UtilityTools from '../components/UtilityTools'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const { language, isHindi } = useLanguage()
  const navigate = useNavigate()
  
  // Add fallback to prevent crashes
  const t = translations[language] || translations['English']

  // Dummy data with fallbacks
  const breakingNews = [
    {
      id: 1,
      title: isHindi ? 'मोदी सरकार ने नई योजना की घोषणा की' : 'Modi Government Announces New Scheme',
      description: isHindi ? 'केंद्र सरकार ने आज एक नई योजना की घोषणा की जो लाखों लोगों को लाभ पहुंचाएगी।' : 'The central government today announced a new scheme that will benefit millions of people.',
      category: isHindi ? 'राजनीति' : 'Politics',
      image: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Breaking+News',
      views: '15.2K',
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      title: isHindi ? 'बॉलीवुड में बड़ा अपडेट: नई फिल्म की घोषणा' : 'Big Update in Bollywood: New Film Announced',
      description: isHindi ? 'एक प्रमुख बॉलीवुड स्टार ने अपनी नई फिल्म की घोषणा की है।' : 'A major Bollywood star has announced their new film.',
      category: isHindi ? 'मनोरंजन' : 'Entertainment',
      image: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Entertainment',
      views: '12.8K',
      timeAgo: '3 hours ago'
    },
    {
      id: 3,
      title: isHindi ? 'क्रिकेट में भारत की जीत: मैच का पूरा विवरण' : 'India\'s Victory in Cricket: Complete Match Details',
      description: isHindi ? 'भारतीय क्रिकेट टीम ने आज एक महत्वपूर्ण मैच जीता है।' : 'The Indian cricket team won an important match today.',
      category: isHindi ? 'खेल' : 'Sports',
      image: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Sports',
      views: '18.5K',
      timeAgo: '1 hour ago'
    }
  ]

  const featuredStories = [
    {
      id: 1,
      title: isHindi ? 'तकनीकी क्षेत्र में नई सफलता' : 'New Success in Technology Sector',
      description: isHindi ? 'भारतीय स्टार्टअप ने एक नई तकनीक विकसित की है।' : 'An Indian startup has developed a new technology.',
      category: isHindi ? 'तकनीक' : 'Technology',
      image: 'https://via.placeholder.com/300x200/1f2937/ffffff?text=Technology',
      views: '8.9K',
      timeAgo: '4 hours ago'
    },
    {
      id: 2,
      title: isHindi ? 'व्यापार जगत में बड़ा बदलाव' : 'Big Change in Business World',
      description: isHindi ? 'व्यापार क्षेत्र में नई नीतियों की घोषणा की गई है।' : 'New policies have been announced in the business sector.',
      category: isHindi ? 'व्यापार' : 'Business',
      image: 'https://via.placeholder.com/300x200/1f2937/ffffff?text=Business',
      views: '6.7K',
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      title: isHindi ? 'स्वास्थ्य और जीवनशैली के टिप्स' : 'Health and Lifestyle Tips',
      description: isHindi ? 'विशेषज्ञों ने स्वस्थ जीवन के लिए महत्वपूर्ण सुझाव दिए हैं।' : 'Experts have given important suggestions for a healthy life.',
      category: isHindi ? 'जीवनशैली' : 'Lifestyle',
      image: 'https://via.placeholder.com/300x200/1f2937/ffffff?text=Lifestyle',
      views: '9.3K',
      timeAgo: '6 hours ago'
    }
  ]

  const specialCoverage = [
    {
      id: 1,
      title: isHindi ? 'चुनाव 2024: पूर्ण कवरेज' : 'Elections 2024: Complete Coverage',
      description: isHindi ? 'लोकसभा चुनाव 2024 की पूरी जानकारी और अपडेट्स।' : 'Complete information and updates on Lok Sabha Elections 2024.',
      image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Elections+2024',
      link: '#'
    },
    {
      id: 2,
      title: isHindi ? 'बजट 2024: विश्लेषण' : 'Budget 2024: Analysis',
      description: isHindi ? 'केंद्रीय बजट 2024 का विस्तृत विश्लेषण और प्रभाव।' : 'Detailed analysis and impact of Union Budget 2024.',
      image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Budget+2024',
      link: '#'
    }
  ]

  const handleViewMoreNews = (category) => {
    // Navigate to appropriate category page based on the news type
    switch (category) {
      case 'Breaking News':
      case 'ताजा समाचार':
        navigate('/india')
        break
      case 'Featured Stories':
      case 'विशेष कहानियां':
        navigate('/entertainment')
        break
      default:
        navigate('/india')
    }
  }

  const handleFollowCoverage = (coverageType) => {
    // Navigate to appropriate coverage page
    if (coverageType.includes('Elections') || coverageType.includes('चुनाव')) {
      navigate('/india')
    } else if (coverageType.includes('Budget') || coverageType.includes('बजट')) {
      navigate('/business')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Trending Ticker */}
      <TrendingTicker />
      
      {/* Main Content - Mobile Responsive */}
      <div className="mobile-container py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Breaking News */}
            <NewsFeed 
              title={t?.breakingNews || 'Breaking News'}
              articles={breakingNews}
              showViewAll={true}
            />
            
            {/* Quick Access Widgets */}
            <QuickAccessWidgets />
            
            {/* Featured Stories */}
            <NewsFeed 
              title={t?.featuredStories || 'Featured Stories'}
              articles={featuredStories}
              showViewAll={true}
            />
            
            {/* Utility Tools */}
            <UtilityTools />
            
            {/* Special Coverage - Mobile Responsive */}
            <div>
              <h2 className="mobile-text-lg sm:mobile-text-xl md:mobile-text-2xl font-bold text-timesnow-dark mb-4 sm:mb-6">
                {t?.specialCoverage || 'Special Coverage'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {specialCoverage.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover"
                    />
                    <div className="p-3 sm:p-4">
                      <h3 className="mobile-text-sm sm:mobile-text-base md:mobile-text-lg font-semibold text-timesnow-dark mb-2 sm:mb-4">
                        {item.title}
                      </h3>
                      <p className="mobile-text-xs sm:mobile-text-sm text-gray-600 mb-3 sm:mb-4">
                        {item.description}
                      </p>
                      <button 
                        onClick={() => handleFollowCoverage(item.title)}
                        className="inline-flex items-center text-timesnow-red hover:text-red-700 font-medium cursor-pointer text-sm sm:text-base"
                      >
                        {t?.followCoverage || 'Follow Coverage'}
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
