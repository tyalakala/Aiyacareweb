export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              aiya.care
            </div>
            <div className="flex gap-4 sm:gap-6">
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm sm:text-base">
                Services
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm sm:text-base">
                About
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm sm:text-base">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience compassionate care with innovative healthcare solutions designed for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 font-semibold px-8 py-3 rounded-lg transition-colors border-2 border-indigo-600 dark:border-indigo-400">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Service Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Primary Care
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive primary healthcare services for all ages with experienced professionals.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Telemedicine
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with healthcare providers from the comfort of your home, anytime, anywhere.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Round-the-clock medical assistance and emergency support when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About aiya.care
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-base sm:text-lg">
                We are dedicated to providing exceptional healthcare services with a focus on patient-centered care. Our team of experienced professionals is committed to your wellbeing.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                With cutting-edge technology and compassionate care, we make healthcare accessible, affordable, and convenient for everyone.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2">10K+</div>
                  <div className="text-indigo-100 text-sm sm:text-base">Happy Patients</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
                  <div className="text-indigo-100 text-sm sm:text-base">Healthcare Professionals</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
                  <div className="text-indigo-100 text-sm sm:text-base">Available Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Have questions? We're here to help you every step of the way.
          </p>
        </div>
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white outline-none transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              aiya.care
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center md:text-left">
              © 2025 aiya.care. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
