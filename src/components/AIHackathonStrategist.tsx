import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader, CheckCircle2, AlertCircle, TrendingUp, Download } from 'lucide-react';

interface IdeaScore {
  dimension: string;
  score: number;
  feedback: string;
}

interface AIStrategyResult {
  overallScore: number;
  winProbability: number;
  scores: IdeaScore[];
  mvpPlan: string;
  pitchStructure: string;
  competitors: string[];
  recommendations: string[];
}

export const AIHackathonStrategist = () => {
  const [idea, setIdea] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AIStrategyResult | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResult({
      overallScore: 82,
      winProbability: 76,
      scores: [
        { dimension: 'Problem Importance', score: 85, feedback: 'Addresses real market pain point' },
        { dimension: 'Innovation', score: 78, feedback: 'Novel approach with existing tech' },
        { dimension: 'Feasibility', score: 88, feedback: 'Can be built within hackathon timeframe' },
        { dimension: 'Market Size', score: 72, feedback: 'Good TAM but competitive landscape' },
        { dimension: 'Team Appeal', score: 81, feedback: 'Good for diverse skill requirements' },
        { dimension: 'Scalability', score: 76, feedback: 'Moderate scaling potential' }
      ],
      mvpPlan: `
## MVP Architecture (48-hour sprint)

### Frontend Stack
- React 18 + TypeScript
- Tailwind CSS for styling
- Framer Motion for animations

### Backend Services
- Node.js Express API
- PostgreSQL for data
- Redis for caching

### AI Integration
- OpenAI API for core intelligence
- LangChain for orchestration

### Deployment
- Vercel for frontend
- Railway for backend
- GitHub for version control
      `,
      pitchStructure: `
1. **Problem** - What problem are you solving?
2. **Solution** - How does your idea solve it?
3. **Market** - Who is your target audience?
4. **Competition** - What existing solutions exist?
5. **Business Model** - How will you monetize?
6. **Team** - Who is behind this?
7. **Traction** - What progress have you made?
8. **Ask** - What do you need to succeed?
9. **Vision** - What's the long-term goal?
10. **Call to Action** - What's next?
      `,
      competitors: [
        'Existing Solution A - Different approach',
        'Existing Solution B - Missing feature X',
        'Existing Solution C - Lower scalability'
      ],
      recommendations: [
        'Focus on unique differentiator in your pitch',
        'Emphasize speed of implementation',
        'Showcase team expertise in demos',
        'Prepare for questions about monetization',
        'Create a compelling visual demo'
      ]
    });
    
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] to-[#1a1a3e] p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">AI Hackathon Strategist</h1>
        <p className="text-gray-400">Transform your raw idea into a winning hackathon submission</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6 sticky top-6"
          >
            <h2 className="text-lg font-semibold text-white mb-4">Your Idea</h2>
            
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Describe your hackathon idea in detail. Include the problem you're solving, your solution approach, and why it matters..."
              className="w-full h-40 bg-white/10 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-[#00D9FF] transition"
            />

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !idea.trim()}
              className="w-full mt-6 py-3 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <TrendingUp className="w-4 h-4" />
                  Analyze with AI
                </>
              )}
            </button>

            {/* Quick Tips */}
            <div className="mt-6 p-4 bg-[#9D4EDD]/20 border border-[#9D4EDD]/30 rounded-lg">
              <h3 className="text-sm font-semibold text-white mb-2">💡 Pro Tips</h3>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Be specific about the problem</li>
                <li>• Explain your unique approach</li>
                <li>• Mention target users</li>
                <li>• Highlight innovation</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-12 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#9D4EDD] p-4">
                  <TrendingUp className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Ready to analyze your idea?</h3>
                <p className="text-gray-400">Describe your hackathon project and let our AI analyze it against winning criteria.</p>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Score Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Overall Score */}
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="rounded-xl border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] p-6"
                  >
                    <div className="text-sm text-gray-400 mb-2">Overall Score</div>
                    <div className="flex items-end justify-between">
                      <div className="text-4xl font-bold text-white">{result.overallScore}</div>
                      <div className="text-sm text-gray-400">/100</div>
                    </div>
                    <div className="mt-4 w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.overallScore}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD]"
                      />
                    </div>
                  </motion.div>

                  {/* Win Probability */}
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-xl border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] p-6"
                  >
                    <div className="text-sm text-gray-400 mb-2">Win Probability</div>
                    <div className="flex items-end justify-between">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#FF006E] to-[#00D9FF] bg-clip-text text-transparent">
                        {result.winProbability}%
                      </div>
                      {result.winProbability > 70 && <CheckCircle2 className="w-6 h-6 text-green-400" />}
                    </div>
                    <div className="mt-4 text-xs text-gray-400">Based on historical winning projects</div>
                  </motion.div>
                </div>

                {/* Tabs */}
                <div className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 overflow-hidden">
                  <div className="flex border-b border-white/10">
                    {['Overview', 'MVP Plan', 'Pitch Deck', 'Competitors', 'Tips'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                        className={`flex-1 px-4 py-3 font-medium text-sm transition ${
                          activeTab === tab.toLowerCase().replace(' ', '-')
                            ? 'text-[#00D9FF] border-b-2 border-[#00D9FF] bg-white/5'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-6">
                    {activeTab === 'overview' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        <h3 className="font-semibold text-white mb-4">Scoring Breakdown</h3>
                        {result.scores.map((score, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-white">{score.dimension}</span>
                              <span className="text-sm font-bold text-[#00D9FF]">{score.score}/100</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${score.score}%` }}
                                transition={{ duration: 0.8, delay: idx * 0.05 }}
                                className="h-full rounded-full bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD]"
                              />
                            </div>
                            <p className="text-xs text-gray-400">{score.feedback}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === 'mvp-plan' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="prose prose-invert prose-sm max-w-none"
                      >
                        <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-xs text-gray-300 whitespace-pre-wrap">
                          {result.mvpPlan}
                        </pre>
                        <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition">
                          <Download className="w-4 h-4" />
                          Download Plan
                        </button>
                      </motion.div>
                    )}

                    {activeTab === 'pitch-deck' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3"
                      >
                        <h3 className="font-semibold text-white mb-4">10-Slide Pitch Deck Structure</h3>
                        <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-xs text-gray-300 whitespace-pre-wrap">
                          {result.pitchStructure}
                        </pre>
                        <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg text-black font-semibold hover:shadow-lg transition">
                          Generate Full Deck
                        </button>
                      </motion.div>
                    )}

                    {activeTab === 'competitors' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3"
                      >
                        <h3 className="font-semibold text-white mb-4">Competitive Analysis</h3>
                        {result.competitors.map((competitor, idx) => (
                          <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded-lg">
                            <p className="text-sm text-gray-300">{competitor}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === 'tips' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3"
                      >
                        <h3 className="font-semibold text-white mb-4">Recommendations to Improve</h3>
                        {result.recommendations.map((rec, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#9D4EDD] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-black">{idx + 1}</span>
                            </div>
                            <p className="text-sm text-gray-300">{rec}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition">
                    Generate Pitch
                  </button>
                  <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition">
                    Find Team
                  </button>
                  <button className="px-4 py-3 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg text-black font-semibold hover:shadow-lg transition">
                    Browse Hackathons
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AIHackathonStrategist;
