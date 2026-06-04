import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Users, TrendingUp, Code } from 'lucide-react';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1a3e] to-[#0A0E27] overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9D4EDD] blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D9FF] blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF006E] blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-[#00D9FF]" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] bg-clip-text text-transparent">
              HackMaster AI
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition">Pricing</a>
            <button className="px-6 py-2 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg font-medium text-black hover:shadow-lg hover:shadow-cyan-500/50 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            From <span className="bg-gradient-to-r from-[#00D9FF] via-[#9D4EDD] to-[#FF006E] bg-clip-text text-transparent">Idea to Victory</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            The world's most advanced AI-powered platform for hackathon domination, career acceleration, and startup success.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg font-semibold text-black flex items-center gap-2 hover:shadow-2xl hover:shadow-cyan-500/50 transition">
              Launch Platform <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-lg font-semibold text-white hover:bg-white/5 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Live Demo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md bg-white/5 p-8 shadow-2xl"
        >
          <div className="bg-gradient-to-br from-[#1a1a3e] to-[#0F1419] rounded-lg p-8 min-h-96 flex flex-col justify-center items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mb-6"
            >
              <Zap className="w-16 h-16 text-[#00D9FF]" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">AI Hackathon Strategist</h3>
            <p className="text-gray-300 text-center max-w-md">
              Transform your raw idea into a winning project in minutes with our AI-powered vetting system.
            </p>
            <div className="mt-8 w-full max-w-md">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Describe your hackathon idea..." 
                  className="w-full bg-transparent text-white placeholder-gray-500 outline-none"
                />
              </div>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/50 transition">
                Analyze with AI
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          The Complete Ecosystem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "AI Hackathon Strategist",
              desc: "Vet ideas, generate MVPs, create pitch decks, and predict win probability",
              color: "from-[#9D4EDD] to-[#FF006E]"
            },
            {
              icon: TrendingUp,
              title: "ATS-Compliant CV Builder",
              desc: "Build resumes that pass AI filters with real-time keyword optimization",
              color: "from-[#00D9FF] to-[#9D4EDD]"
            },
            {
              icon: Users,
              title: "Collaboration Hub",
              desc: "Connect with mentors, find team members, and access 24/7 AI guidance",
              color: "from-[#FF006E] to-[#00D9FF]"
            },
            {
              icon: Code,
              title: "Live Demo Sandbox",
              desc: "Code, preview, and showcase your MVP in an integrated environment",
              color: "from-[#9D4EDD] to-[#FF006E]"
            },
            {
              icon: Zap,
              title: "Hackathon Aggregator",
              desc: "Discover global hackathons with AI-powered win probability scores",
              color: "from-[#00D9FF] to-[#FF006E]"
            },
            {
              icon: TrendingUp,
              title: "Career Acceleration",
              desc: "Match your skills with opportunities and track market demand in real-time",
              color: "from-[#FF006E] to-[#9D4EDD]"
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-xl p-6 border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2 mb-4 group-hover:scale-110 transition`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Simple, Transparent Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Free",
              price: "$0",
              features: ["Basic AI advice", "Public hackathon list", "Community access", "Limited CV templates"],
              cta: "Start Free"
            },
            {
              name: "Pro",
              price: "$29",
              period: "/month",
              features: ["ATS CV optimization", "AI Judge simulation", "Win probability scores", "3 hackathon analyses/month", "Priority support"],
              cta: "Start Pro",
              featured: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: ["Hackathon organizer tools", "Custom integration", "Team management", "Advanced analytics", "Dedicated support"],
              cta: "Contact Sales"
            },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className={`rounded-xl border p-8 backdrop-blur-md transition ${
                plan.featured 
                  ? 'bg-gradient-to-br from-[#00D9FF]/20 to-[#9D4EDD]/20 border-[#00D9FF]/50 ring-2 ring-[#00D9FF]/30 scale-105'
                  : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-400">{plan.period}</span>}
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${
                plan.featured
                  ? 'bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] text-black hover:shadow-lg hover:shadow-cyan-500/50'
                  : 'border border-white/20 text-white hover:bg-white/10'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Win?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators using HackMaster AI to transform ideas into reality.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg font-semibold text-black hover:shadow-2xl hover:shadow-cyan-500/50 transition">
            Get Started Now
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Social</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 HackMaster AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
