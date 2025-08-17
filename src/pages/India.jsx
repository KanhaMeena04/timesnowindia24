import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { MapPin, Clock, Eye, TrendingUp, Building, Car, Leaf, GraduationCap, Heart, Globe } from 'lucide-react'

const India = () => {
  const [activeState, setActiveState] = useState('all')
  const { language, isHindi } = useLanguage()
  const t = translations[language] || translations['English']

  const states = [
    {
      id: 'madhya-pradesh',
      name: isHindi ? 'मध्य प्रदेश' : 'Madhya Pradesh',
      shortName: 'MP',
      capital: isHindi ? 'भोपाल' : 'Bhopal',
      region: isHindi ? 'मध्य भारत' : 'Central India',
      color: 'bg-orange-500',
      icon: Building
    },
    {
      id: 'rajasthan',
      name: isHindi ? 'राजस्थान' : 'Rajasthan',
      shortName: 'RJ',
      capital: isHindi ? 'जयपुर' : 'Jaipur',
      region: isHindi ? 'पश्चिमी भारत' : 'Western India',
      color: 'bg-pink-500',
      icon: Globe
    },
    {
      id: 'maharashtra',
      name: isHindi ? 'महाराष्ट्र' : 'Maharashtra',
      shortName: 'MH',
      capital: isHindi ? 'मुंबई' : 'Mumbai',
      region: isHindi ? 'पश्चिमी भारत' : 'Western India',
      color: 'bg-blue-500',
      icon: Building
    },
    {
      id: 'karnataka',
      name: isHindi ? 'कर्नाटक' : 'Karnataka',
      shortName: 'KA',
      capital: isHindi ? 'बेंगलुरु' : 'Bangalore',
      region: isHindi ? 'दक्षिण भारत' : 'South India',
      color: 'bg-green-500',
      icon: Leaf
    },
    {
      id: 'tamil-nadu',
      name: isHindi ? 'तमिलनाडु' : 'Tamil Nadu',
      shortName: 'TN',
      capital: isHindi ? 'चेन्नई' : 'Chennai',
      region: isHindi ? 'दक्षिण भारत' : 'South India',
      color: 'bg-purple-500',
      icon: GraduationCap
    },
    {
      id: 'uttar-pradesh',
      name: isHindi ? 'उत्तर प्रदेश' : 'Uttar Pradesh',
      shortName: 'UP',
      capital: isHindi ? 'लखनऊ' : 'Lucknow',
      region: isHindi ? 'उत्तरी भारत' : 'North India',
      color: 'bg-red-500',
      icon: Heart
    },
    {
      id: 'gujarat',
      name: isHindi ? 'गुजरात' : 'Gujarat',
      shortName: 'GJ',
      capital: isHindi ? 'गांधीनगर' : 'Gandhinagar',
      region: isHindi ? 'पश्चिमी भारत' : 'Western India',
      color: 'bg-yellow-500',
      icon: Car
    },
    {
      id: 'west-bengal',
      name: isHindi ? 'पश्चिम बंगाल' : 'West Bengal',
      shortName: 'WB',
      capital: isHindi ? 'कोलकाता' : 'Kolkata',
      region: isHindi ? 'पूर्वी भारत' : 'Eastern India',
      color: 'bg-indigo-500',
      icon: Globe
    }
  ]

  const allIndiaNews = [
    {
      id: 1,
      title: isHindi ? 'दिल्ली में राजनीतिक विकास' : 'Political Development in Delhi',
      summary: isHindi ? 'राजधानी में नई राजनीतिक स्थिति और नीतियों का विश्लेषण' : 'Analysis of new political situation and policies in the capital',
      category: isHindi ? 'राजनीति' : 'Politics',
      time: '2 hours ago',
      views: '15.2K',
      image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Delhi+News',
      state: 'delhi'
    },
    {
      id: 2,
      title: isHindi ? 'मुंबई में बुनियादी ढांचा परियोजना' : 'Infrastructure Project in Mumbai',
      summary: isHindi ? 'महाराष्ट्र में नई सड़क और मेट्रो परियोजना का शुभारंभ' : 'Launch of new road and metro project in Maharashtra',
      category: isHindi ? 'बुनियादी ढांचा' : 'Infrastructure',
      time: '4 hours ago',
      views: '12.8K',
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Mumbai+News',
      state: 'maharashtra'
    },
    {
      id: 3,
      title: isHindi ? 'बंगलौर में तकनीकी नवाचार' : 'Tech Innovation in Bangalore',
      summary: isHindi ? 'कर्नाटक में स्टार्टअप और तकनीकी कंपनियों का विकास' : 'Growth of startups and tech companies in Karnataka',
      category: isHindi ? 'तकनीक' : 'Technology',
      time: '1 hour ago',
      views: '18.5K',
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Bangalore+News',
      state: 'karnataka'
    }
  ]

  const stateNews = {
    'madhya-pradesh': [
      {
        id: 1,
        title: isHindi ? 'भोपाल में नई शैक्षिक नीति' : 'New Education Policy in Bhopal',
        summary: isHindi ? 'मध्य प्रदेश सरकार ने राज्य में नई शैक्षिक नीति लागू की' : 'MP government implements new education policy in the state',
        category: isHindi ? 'शिक्षा' : 'Education',
        time: '3 hours ago',
        views: '8.5K',
        image: 'https://via.placeholder.com/400x250/ff6b35/ffffff?text=MP+Education',
        city: 'Bhopal',
        highlights: ['New Policy', 'State Education', 'Bhopal']
      },
      {
        id: 2,
        title: isHindi ? 'इंदौर में औद्योगिक विकास' : 'Industrial Development in Indore',
        summary: isHindi ? 'इंदौर में नए औद्योगिक क्षेत्र का विकास और रोजगार के अवसर' : 'Development of new industrial zone in Indore and employment opportunities',
        category: isHindi ? 'व्यापार' : 'Business',
        time: '5 hours ago',
        views: '6.2K',
        image: 'https://via.placeholder.com/400x250/ff6b35/ffffff?text=MP+Industry',
        city: 'Indore',
        highlights: ['Industrial Zone', 'Employment', 'Indore']
      },
      {
        id: 3,
        title: isHindi ? 'ग्वालियर में पर्यटन विकास' : 'Tourism Development in Gwalior',
        summary: isHindi ? 'ग्वालियर किले के आसपास नए पर्यटन स्थलों का विकास' : 'Development of new tourist attractions around Gwalior Fort',
        category: isHindi ? 'पर्यटन' : 'Tourism',
        time: '7 hours ago',
        views: '4.8K',
        image: 'https://via.placeholder.com/400x250/ff6b35/ffffff?text=MP+Tourism',
        city: 'Gwalior',
        highlights: ['Tourism', 'Gwalior Fort', 'Heritage']
      }
    ],
    'rajasthan': [
      {
        id: 1,
        title: isHindi ? 'जयपुर में हस्तकला मेला' : 'Handicraft Fair in Jaipur',
        summary: isHindi ? 'जयपुर में राजस्थानी हस्तकला और कला का प्रदर्शन' : 'Exhibition of Rajasthani handicrafts and art in Jaipur',
        category: isHindi ? 'संस्कृति' : 'Culture',
        time: '2 hours ago',
        views: '9.1K',
        image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=RJ+Culture',
        city: 'Jaipur',
        highlights: ['Handicrafts', 'Art', 'Jaipur']
      },
      {
        id: 2,
        title: isHindi ? 'जोधपुर में सौर ऊर्जा परियोजना' : 'Solar Energy Project in Jodhpur',
        summary: isHindi ? 'जोधपुर में नई सौर ऊर्जा परियोजना का शुभारंभ' : 'Launch of new solar energy project in Jodhpur',
        category: isHindi ? 'ऊर्जा' : 'Energy',
        time: '4 hours ago',
        views: '7.3K',
        image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=RJ+Energy',
        city: 'Jodhpur',
        highlights: ['Solar Energy', 'Renewable', 'Jodhpur']
      },
      {
        id: 3,
        title: isHindi ? 'उदयपुर में पर्यटन बूम' : 'Tourism Boom in Udaipur',
        summary: isHindi ? 'उदयपुर में पर्यटन क्षेत्र में नई ऊंचाई' : 'New heights in tourism sector in Udaipur',
        category: isHindi ? 'पर्यटन' : 'Tourism',
        time: '6 hours ago',
        views: '5.9K',
        image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=RJ+Tourism',
        city: 'Udaipur',
        highlights: ['Tourism', 'Lakes', 'Udaipur']
      }
    ],
    'maharashtra': [
      {
        id: 1,
        title: isHindi ? 'मुंबई में मेट्रो विस्तार' : 'Metro Expansion in Mumbai',
        summary: isHindi ? 'मुंबई मेट्रो के नए मार्गों का उद्घाटन' : 'Inauguration of new Mumbai Metro routes',
        category: isHindi ? 'बुनियादी ढांचा' : 'Infrastructure',
        time: '1 hour ago',
        views: '11.4K',
        image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=MH+Metro',
        city: 'Mumbai',
        highlights: ['Metro', 'Infrastructure', 'Mumbai']
      },
      {
        id: 2,
        title: isHindi ? 'पुणे में स्टार्टअप इकोसिस्टम' : 'Startup Ecosystem in Pune',
        summary: isHindi ? 'पुणे में नए स्टार्टअप और तकनीकी नवाचार' : 'New startups and tech innovations in Pune',
        category: isHindi ? 'तकनीक' : 'Technology',
        time: '3 hours ago',
        views: '8.7K',
        image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=MH+Tech',
        city: 'Pune',
        highlights: ['Startups', 'Technology', 'Pune']
      }
    ]
  }

  const filteredNews = activeState === 'all' 
    ? allIndiaNews 
    : (stateNews[activeState] || [])

  const currentState = states.find(s => s.id === activeState)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-saffron-500 via-white to-green-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            {isHindi ? 'भारत समाचार' : 'India News'}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {isHindi 
              ? 'भारत के सभी राज्यों से ताजा समाचार, अपडेट्स और विश्लेषण' 
              : 'Latest news, updates, and analysis from all states of India'
            }
          </p>
        </div>
      </div>

      {/* State Navigation */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveState('all')}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                activeState === 'all'
                  ? 'border-orange-500 bg-orange-50 text-orange-700'
                  : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
              }`}
            >
              <span className="font-medium">{isHindi ? 'सभी राज्य' : 'All States'}</span>
            </button>
            
            {states.map((state) => {
              const IconComponent = state.icon
              return (
                <button
                  key={state.id}
                  onClick={() => setActiveState(state.id)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 flex items-center gap-2 ${
                    activeState === state.id
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                >
                  <IconComponent size={16} />
                  <span className="font-medium">{state.shortName}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* State Info Header */}
            {activeState !== 'all' && currentState && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full ${currentState.color} flex items-center justify-center text-white text-2xl font-bold`}>
                    {currentState.shortName}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{currentState.name}</h2>
                    <p className="text-gray-600">
                      {isHindi ? 'राजधानी:' : 'Capital:'} {currentState.capital} • {currentState.region}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* News Grid */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {activeState === 'all' 
                  ? (isHindi ? 'राष्ट्रीय समाचार' : 'National News')
                  : (isHindi ? `${currentState?.name} समाचार` : `${currentState?.name} News`)
                }
              </h2>
              
              {filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {isHindi ? 'इस राज्य के लिए कोई समाचार नहीं मिला' : 'No news found for this state'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredNews.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                          {item.category}
                        </div>
                        {item.city && (
                          <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {item.city}
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                          {item.summary}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {item.time}
                          </div>
                          <div className="flex items-center">
                            <Eye size={14} className="mr-1" />
                            {item.views}
                          </div>
                        </div>
                        
                        {item.highlights && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.highlights.map((highlight, index) => (
                              <span key={index} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <Link
                          to={`/india/${activeState === 'all' ? 'madhya-pradesh' : activeState}`}
                          className="block w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors text-center"
                        >
                          {isHindi ? 'राज्य देखें' : 'View State'}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {isHindi ? 'राज्य नेविगेशन' : 'State Navigation'}
              </h3>
              <div className="space-y-3">
                {states.map((state) => (
                  <Link
                    key={state.id}
                    to={`/india/${state.id}`}
                    className="block p-3 border border-gray-200 rounded-lg hover:bg-orange-50 hover:border-orange-300 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${state.color} flex items-center justify-center text-white text-sm font-bold`}>
                        {state.shortName}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{state.name}</h4>
                        <p className="text-sm text-gray-600">{state.capital}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {isHindi ? 'श्रेणी के अनुसार' : 'By Category'}
              </h3>
              <div className="space-y-2">
                {['Politics', 'Business', 'Technology', 'Sports', 'Entertainment', 'Health'].map((category) => (
                  <div key={category} className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <span className="text-gray-700">{isHindi ? category : category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default India
