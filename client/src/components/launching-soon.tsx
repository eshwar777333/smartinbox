import { Rocket, Mail } from "lucide-react";

export function LaunchingSoon() {
  const scrollToSignup = () => {
    const signupForm = document.querySelector('[data-testid="waitlist-form"]');
    signupForm?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Rocket className="mr-2" size={16} />
          <span data-testid="text-launching-soon">Launching Soon</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Be Among the First to Experience Smart Inbox
        </h2>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Join our exclusive waitlist and get early access to revolutionary email management. 
          Plus, early users get free Pro access for life!
        </p>
        
        {/* Call to Action */}
        <button 
          onClick={scrollToSignup}
          className="bg-gradient-to-r from-brand-blue to-brand-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          data-testid="button-join-waitlist-cta"
        >
          <Mail className="mr-2" size={18} />
          Join the Waitlist Now
        </button>
      </div>
    </section>
  );
}
