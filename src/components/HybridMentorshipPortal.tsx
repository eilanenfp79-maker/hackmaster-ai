import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Star, Zap, Clock, MapPin, TrendingUp } from 'lucide-react';

interface Mentor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  expertise: string[];
  bio: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  availability: string;
  isAI?: boolean;
}

export const HybridMentorshipPortal = () => {
  const [activeTab, setActiveTab] = useState('ai-mentor');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const aiMentor: Mentor = {
    id: 'ai-1',
    name: 'HackMaster AI Assistant',
    avatar: '🤖',
    title: 'AI Mentor (24/7 Available)',
    expertise: ['Project Strategy', 'MVP Planning', 'Pitch Deck Creation', 'Technical Architecture'],
    bio: 'Advanced AI mentor trained on thousands of winning hackathon projects. Available 24/7 for instant guidance.',
    rating: 4.9,
    reviews: 2847,
    hourlyRate: 0,
    availability: 'Always Available',
    isAI: true
  };

  const humanMentors: Mentor[] = [
    {
      id: 'h-1',
      name: 'Sarah Chen',
      avatar: '👩‍💼',
      title: 'Senior Product Manager',
      expertise: ['Product Strategy', 'Go-to-Market', 'User Research'],
      bio: 'Led 3 successful startups. Passionate about mentoring next-gen founders.',
      rating: 5.0,
      reviews: 156,
      hourlyRate: 150,
      availability: 'Tue, Thu, Sat 6-9pm PST'
    },
    {
      id: 'h-2',
      name: 'Alex Rodriguez',
      avatar: '👨‍💻',
      title: 'Full-Stack Engineer',
      expertise: ['Architecture Design', 'Scalability', 'DevOps', 'Cloud Infrastructure'],
      bio: 'Ex-Google engineer. Specializes in building scalable systems for startups.',
      rating: 4.8,
      reviews: 203,
      hourlyRate: 175,
      availability: 'Mon-Fri 5-10pm EST'
    },
    {
      id: 'h-3',
      name: 'Maya Patel',
      avatar: '👩‍🎨',
      title: 'Design & UX Lead',
      expertise: ['UI/UX Design', 'Product Design', 'User Testing', 'Design Systems'],
      bio: 'Design lead at top SaaS companies. Expert in creating user-centric experiences.',
      rating: 4.9,
      reviews: 178,
      hourlyRate: 140,
      availability: 'Wed, Fri, Sun 3-8pm IST'
    },
    {
      id: 'h-4',
      name: 'James Wilson',
      avatar: '👨‍🏫',
      title: 'Business Development',
      expertise: ['Funding Strategy', 'Partnership Development', 'Negotiation', 'Business Models'],
      bio: 'Helped 20+ startups raise funding. Expert fundraiser and business strategist.',
      rating: 4.7,
      reviews: 142,
      hourlyRate: 160,
      availability: 'Mon, Wed, Fri 9am-1pm GMT'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] to-[#1a1a3e] p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Hybrid Mentorship Portal</h1>
        <p className="text-gray-400">Connect with AI mentors (24/7) or book premium human mentors</p>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex gap-4 border-b border-white/10">
          {[
            { id: 'ai-mentor', label: '🤖 AI Mentor (Free)', icon: Zap },
            { id: 'human-mentors', label: '👥 Human Mentors (Premium)', icon: MessageCircle }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium border-b-2 transition ${
                activeTab === tab.id
                  ? 'text-[#00D9FF] border-[#00D9FF]'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* AI Mentor Section */}
      {activeTab === 'ai-mentor' && (
        <motion.div
          key="ai"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Mentor Card */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="lg:col-span-1 rounded-xl border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] p-6 sticky top-6"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-3 mx-auto w-fit">{aiMentor.avatar}</div>
                <h2 className="text-2xl font-bold text-white">{aiMentor.name}</h2>
                <p className="text-[#00D9FF] text-sm font-medium mt-1">{aiMentor.title}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-lg">
                  <p className="text-sm text-gray-300">{aiMentor.bio}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Rating</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4"
                          fill={i < Math.floor(aiMentor.rating) ? '#FFB81C' : '#ffffff20'}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{aiMentor.rating} ({aiMentor.reviews})</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Price</div>
                    <div className="text-2xl font-bold text-green-400">Free</div>
                  </div>
                </div>
              </div>

              <button className="w-full px-4 py-3 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition mb-3">
                Start Chatting Now
              </button>

              <button className="w-full px-4 py-2 border border-white/20 rounded-lg text-white font-medium hover:bg-white/5 transition">
                Schedule Session
              </button>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="text-sm font-semibold text-white mb-3">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {aiMentor.expertise.map((exp, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* AI Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6 flex flex-col h-96"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Live Chat</h3>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="text-2xl">🤖</div>
                  <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 max-w-xs">
                    <p className="text-sm text-gray-300">Hi! 👋 I'm HackMaster AI, your personal hackathon strategist. What would you like help with today?</p>
                    <span className="text-xs text-gray-500 mt-2 block">Just now</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-end"
                >
                  <div className="bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg px-4 py-2 max-w-xs">
                    <p className="text-sm text-black">I need help validating my AI project idea</p>
                    <span className="text-xs text-black/70 mt-2 block">1 min ago</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-3"
                >
                  <div className="text-2xl">🤖</div>
                  <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 max-w-xs">
                    <p className="text-sm text-gray-300">Perfect! Let me analyze your idea using our 16-point scoring system. Can you describe your project briefly?</p>
                    <span className="text-xs text-gray-500 mt-2 block">Just now</span>
                  </div>
                </motion.div>
              </div>

              {/* Input */}
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Ask anything about your hackathon project..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition text-sm"
                />
                <button className="px-4 py-3 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg text-black font-semibold hover:shadow-lg transition">
                  Send
                </button>
              </div>
            </motion.div>
          </div>

          {/* Quick Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-7xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              'How do I structure my MVP?',
              'What makes a winning pitch?',
              'How do I find a co-founder?',
              'What should I prioritize first?'
            ].map((question, idx) => (
              <button
                key={idx}
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition text-left"
              >
                <p className="text-sm text-gray-300">{question}</p>
              </button>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Human Mentors Section */}
      {activeTab === 'human-mentors' && (
        <motion.div
          key="human"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {humanMentors.map((mentor, idx) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6 hover:bg-white/10 hover:border-white/20 transition"
              >
                <div className="flex gap-4 mb-4">
                  <div className="text-4xl">{mentor.avatar}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
                    <p className="text-sm text-[#00D9FF]">{mentor.title}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-4">{mentor.bio}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Rating</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3"
                          fill={i < Math.floor(mentor.rating) ? '#FFB81C' : '#ffffff20'}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{mentor.reviews} reviews</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Hourly Rate</div>
                    <div className="text-lg font-bold text-[#00D9FF]">${mentor.hourlyRate}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.map((exp, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-white/5 border border-white/10 rounded-lg">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Clock className="w-4 h-4 text-[#00D9FF]" />
                    <span>{mentor.availability}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg text-black text-sm font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Session
                  </button>
                  <button className="flex-1 px-4 py-2 border border-white/20 rounded-lg text-white text-sm font-medium hover:bg-white/5 transition">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Booking Modal Placeholder */}
          {showBooking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="rounded-xl bg-[#0A0E27] border border-white/10 max-w-md w-full p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Book a Session</h2>
                <p className="text-gray-400 mb-6">Select your preferred time slot and duration</p>
                {/* Booking form would go here */}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default HybridMentorshipPortal;
