import { Inbox } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6"; // For the X (Twitter) icon
import { FaGithub, FaReddit } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center">
              <Inbox className="text-white text-lg" size={20} />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Smart Inbox</span>
              <p className="text-sm text-gray-500">AI-powered email management</p>
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200" data-testid="link-about">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200" data-testid="link-contact">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200" data-testid="link-privacy">
              Privacy Policy
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
              {/* X (Twitter) */}
  <a href="https://x.com/" 
    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all duration-200" data-testid="link-twitter">
    <FaXTwitter />
  </a>
            <a href="https://www.reddit.com/user/Wonderful-Reality99/submitted/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all duration-200" data-testid="link-linkedin">
              <FaReddit />
            </a>
            <a href="https://github.com/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all duration-200" data-testid="link-github">
              <FaGithub />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Smart Inbox. All rights reserved. Made with ❤️ for productivity enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
}
