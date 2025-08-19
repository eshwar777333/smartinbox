import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

export function RegistrationCounter() {
  const { data: signupData, isLoading } = useQuery({
    queryKey: ["/api/signup-count"],
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const count = signupData?.count || 2847;

  return (
    <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-lg" data-testid="registration-counter">
      <div className="flex items-center space-x-3">
        <div className="flex -space-x-2">
          {/* Social proof avatars */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-red-400 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-400 border-2 border-white"></div>
        </div>
        <span className="text-gray-700 font-medium">
          <motion.span
            key={count}
            initial={{ scale: 1.2, color: "#3B82F6" }}
            animate={{ scale: 1, color: "#3B82F6" }}
            transition={{ duration: 0.3 }}
            className="font-bold text-brand-blue"
            data-testid="text-signup-count"
          >
            {isLoading ? "..." : count.toLocaleString()}
          </motion.span>{" "}
          people already registered for early access
        </span>
      </div>
    </div>
  );
}
