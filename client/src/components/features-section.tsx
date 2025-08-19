import { Brain, MousePointer, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI Categorization",
    description: "Intelligent sorting automatically organizes your emails into meaningful categories, making it easy to focus on what matters most.",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    icon: MousePointer,
    title: "One-Click Unsubscribe",
    description: "Instantly unsubscribe from unwanted emails with a single click. No more hunting for hidden unsubscribe links.",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    icon: Clock,
    title: "Smart Reminders & Snooze",
    description: "Intelligent reminders ensure important emails never get forgotten, with smart snooze options that work with your schedule.",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Gain insights into your email patterns, response times, and productivity metrics with beautiful, actionable analytics.",
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">Smart Inbox</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful AI features designed to transform your email experience and help you achieve the elusive Inbox Zero.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group p-8 bg-gradient-to-br ${feature.bgGradient} rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              data-testid={`feature-card-${index}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white text-2xl" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
