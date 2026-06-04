import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Bell, Heart, MessageSquare, Share2, CheckCircle2 } from 'lucide-react';

interface NewsletterItem {
  id: string;
  title: string;
  category: 'hackathon' | 'winner' | 'trend' | 'tip';
  excerpt: string;
  date: string;
  read: boolean;
}

export const NewsletterHub = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState('weekly');
  const [selectedCategories, setSelectedCategories] = useState(['hackathon', 'winner', 'trend']);
  const [items, setItems] = useState<NewsletterItem[]>([
    {
      id: '1',
      title: '🏆 How HackMaster AI Team Won TechCrunch Disrupt 2026',
      category: 'winner',
      excerpt: 'Learn the strategy and execution tactics that led to victory. Full breakdown of their MVP, pitch, and team coordination...',
      date: '2 days ago',
      read: false
    },
    {
      id: '2',
      title: '📅 Top 10 Hackathons Coming in July 2026',
      category: 'hackathon',
      excerpt: 'From AI-focused events to Web3 hackathons, discover the most promising competitions this month with updated prize pools...',
      date: '3 days ago',
      read: false
    },
    {
      id: '3',
      title: '🚀 The Rise of AI in Hackathon Judging',
      category: 'trend',
      excerpt: 'How AI is changing the way projects are evaluated. Judges are now using ML models to score ideas. What this means for you...',
      date: '1 week ago',
      read: true
    },
    {
      id: '4',
      title: '💡 5 Tips for Creating a Winning Pitch Deck',
      category: 'tip',
      excerpt: 'Common mistakes and how to avoid them. Including real examples from successful hackathon pitches...',
      date: '1 week ago',
      read: true
    }
  ]);

  const categoryColors = {
    hackathon: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    winner: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    trend: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    tip: 'bg-green-500/20 text-green-300 border-green-500/30'
  };

  const handleSubscribe = async () => {
    if (!email) return;
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubscribed(true);
  };

  const toggleRead = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, read: !item.read } : item
    ));
  };

  const unreadCount = items.filter(i => !i.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] to-[#1a1a3e] p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
          <Mail className="w-10 h-10 text-[#00D9FF]" />
          Newsletter Hub
        </h1>
        <p className="text-gray-400">Stay updated on hackathons, winning projects, and industry trends</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subscription Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="rounded-xl border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] p-6 sticky top-6">
            {subscribed ? (
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#9D4EDD] mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">You're Subscribed!</h3>
                <p className="text-sm text-gray-400 mb-6">
                  Check your email to confirm. Your first newsletter arrives soon.
                </p>
                <button className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition">
                  Manage Preferences
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Subscribe Now</h3>
                
                <div className="space-y-4 mb-6">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition"
                  />

                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-2">Frequency</label>
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF] transition appearance-none cursor-pointer"
                    >
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Bi-weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-3">Interests</label>
                    <div className="space-y-2">
                      {[
                        { id: 'hackathon', label: 'Hackathons', icon: '📅' },
                        { id: 'winner', label: 'Winner Stories', icon: '🏆' },
                        { id: 'trend', label: 'Industry Trends', icon: '📈' },
                        { id: 'tip', label: 'Pro Tips', icon: '💡' }
                      ].map(cat => (
                        <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedCategories([...selectedCategories, cat.id]);
                              } else {
                                setSelectedCategories(selectedCategories.filter(c => c !== cat.id));
                              }
                            }}
                            className="w-4 h-4 rounded bg-white/20 border-white/30 text-[#00D9FF] focus:ring-[#00D9FF]"
                          />
                          <span className="text-sm text-gray-300">{cat.icon} {cat.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSubscribe}
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg text-black font-semibold hover:shadow-lg transition"
                >
                  Subscribe Now
                </button>

                <p className="text-xs text-gray-500 mt-3 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Newsletter Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 space-y-4"
        >
          {/* Unread Badge */}
          {unreadCount > 0 && (
            <div className="flex items-center gap-2 text-sm text-[#00D9FF] mb-4">
              <Bell className="w-4 h-4" />
              {unreadCount} unread items
            </div>
          )}

          {/* Newsletter Items */}
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => toggleRead(item.id)}
              className={`rounded-xl border backdrop-blur-md transition cursor-pointer group ${
                item.read
                  ? 'bg-white/5 border-white/10 opacity-75'
                  : 'bg-white/5 border-white/20 hover:bg-white/10'
              }`}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[item.category as keyof typeof categoryColors]}`}>
                        {item.category === 'hackathon' && '📅 Hackathon'}
                        {item.category === 'winner' && '🏆 Winner'}
                        {item.category === 'trend' && '📈 Trend'}
                        {item.category === 'tip' && '💡 Tip'}
                      </span>
                      {!item.read && (
                        <div className="w-2 h-2 rounded-full bg-[#00D9FF]"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#00D9FF] transition mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{item.excerpt}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>

                  {item.read && (
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4 border-t border-white/10 text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition">
                  <button className="flex items-center gap-1 hover:text-[#FF006E] transition">
                    <Heart className="w-4 h-4" />
                    Save
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#00D9FF] transition">
                    <MessageSquare className="w-4 h-4" />
                    Comment
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#9D4EDD] transition">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center py-8"
          >
            <button className="px-8 py-3 border border-white/20 rounded-lg text-white font-medium hover:bg-white/5 transition">
              Load More Stories
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsletterHub;
