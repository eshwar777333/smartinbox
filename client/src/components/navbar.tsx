import { Inbox } from "lucide-react";

export function Navbar() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSignup = () => {
    const signupForm = document.querySelector('[data-testid="waitlist-form"]');
    signupForm?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center">
              <Inbox className="text-white text-lg" size={20} />
            </div>
            <span className="text-xl font-bold text-gray-900">Smart Inbox</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={scrollToFeatures}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              data-testid="link-features"
            >
              Features
            </button>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              About
            </a>
            <button 
              onClick={scrollToSignup}
              className="bg-gradient-to-r from-brand-blue to-brand-purple text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              data-testid="button-join-waitlist-nav"
            >
              Join Waitlist
            </button>
          </div>
          
          <button className="md:hidden text-gray-600 hover:text-gray-900" data-testid="button-mobile-menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
