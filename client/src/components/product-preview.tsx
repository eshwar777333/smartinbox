import { motion } from "framer-motion";
import { Star, Briefcase, BookOpen, Brain } from "lucide-react";

export function ProductPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            See Smart Inbox in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience AI-powered email management that automatically categorizes, prioritizes, and summarizes your emails for maximum productivity.
          </motion.p>
        </div>
        
        {/* Smart Inbox Interface Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Browser Window */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Browser Header */}
            <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm text-gray-600 font-medium">Smart Inbox</span>
              </div>
              <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                <Brain className="w-3 h-3 mr-1" />
                AI Powered
              </div>
            </div>

            {/* Inbox Interface */}
            <div className="p-6 bg-gray-50 min-h-[400px]">
              <div className="space-y-4">
                {/* High Priority Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow"
                  data-testid="email-category-priority"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Star className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="font-semibold text-gray-900">High Priority</span>
                    </div>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      AI Prioritized
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">Meeting invite from CEO</div>
                  <div className="text-xs text-gray-500">Q4 Planning Meeting - Tomorrow 2:00 PM</div>
                </motion.div>

                {/* Work Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow"
                  data-testid="email-category-work"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-semibold text-gray-900">Work</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      Auto-categorized
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">Project updates (3 emails)</div>
                  <div className="text-xs text-gray-500">Latest: Sprint Review Results - 2 hours ago</div>
                </motion.div>

                {/* Newsletter Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow"
                  data-testid="email-category-newsletter"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-semibold text-gray-900">Newsletter</span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Summarized by AI
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">Tech weekly digest</div>
                  <div className="text-xs text-gray-500">Key topics: AI trends, startup funding, new frameworks</div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Floating feature callouts */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute -left-4 top-20 bg-white rounded-lg shadow-lg p-4 max-w-xs hidden lg:block border border-gray-100"
            data-testid="callout-ai-powered"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900">AI Powered</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">Intelligent categorization and prioritization</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute -right-4 bottom-20 bg-white rounded-lg shadow-lg p-4 max-w-xs hidden lg:block border border-gray-100"
            data-testid="callout-auto-categorized"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900">Auto-categorized</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">No manual sorting required</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}