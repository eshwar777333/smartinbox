import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { LaunchingSoon } from "@/components/launching-soon";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <title>Smart Inbox - AI-Powered Email Management | Coming Soon</title>
      <meta name="description" content="AI-powered email cleanup. Reach Inbox Zero effortlessly. Join our waitlist for early access and get free Pro access for early users." />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LaunchingSoon />
      <Footer />
    </div>
  );
}
