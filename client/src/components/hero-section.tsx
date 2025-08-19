import { WaitlistForm } from "./waitlist-form";
import { RegistrationCounter } from "./registration-counter";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Early Access Promotion */}
        <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-8 animate-pulse-slow">
          <Star className="mr-2" size={16} />
          <span data-testid="text-early-access">Join now and get free Pro access for early users</span>
        </div>
        
        {/* Main Headlines */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="gradient-text">Smart Inbox</span><br />
          Take Control of Your Email
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          AI-powered email cleanup. Reach Inbox Zero effortlessly.
        </p>
        
        {/* Waitlist Form */}
        <WaitlistForm />
        
        {/* Counter Display */}
        <RegistrationCounter />
      </div>
    </section>
  );
}
