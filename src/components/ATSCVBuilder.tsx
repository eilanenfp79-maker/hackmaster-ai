import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, Download, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

interface CVSection {
  title: string;
  content: string;
}

interface ATSScore {
  metric: string;
  score: number;
  suggestion: string;
}

export const ATSCVBuilder = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [atsScore, setATSScore] = useState(78);
  const [previewMode, setPreviewMode] = useState(false);

  const atsMetrics: ATSScore[] = [
    { metric: 'Keyword Density', score: 82, suggestion: 'Add more role-specific keywords' },
    { metric: 'ATS Compatibility', score: 95, suggestion: 'Great formatting for ATS systems' },
    { metric: 'Readability', score: 72, suggestion: 'Improve line spacing and structure' },
    { metric: 'Experience Clarity', score: 81, suggestion: 'Add quantifiable metrics' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] to-[#1a1a3e] p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">ATS-Compliant CV Builder</h1>
        <p className="text-gray-400">Create resumes that pass AI filters with real-time optimization</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#00D9FF]" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-1 sm:col-span-2 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition"
              />
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-4">Professional Summary</h2>
            <textarea
              placeholder="Craft a compelling summary highlighting your key achievements and skills..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full h-28 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-[#00D9FF] transition"
            />
            <div className="mt-2 text-xs text-gray-400">
              💡 Tip: Include industry-specific keywords to improve ATS score
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-4">Work Experience</h2>
            <textarea
              placeholder="Company Name | Job Title | Start Date - End Date&#10;&#10;• Achievement with quantifiable results&#10;• Key responsibility&#10;• Project impact"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full h-40 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-[#00D9FF] transition font-mono text-sm"
            />
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-4">Skills</h2>
            <textarea
              placeholder="React, Node.js, TypeScript, Python, Machine Learning, UI/UX Design..."
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full h-20 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-[#00D9FF] transition"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.split(',').map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#00D9FF]/20 border border-[#00D9FF]/50 rounded-full text-xs text-[#00D9FF]">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-4">Education</h2>
            <textarea
              placeholder="University Name | Degree | Graduation Year"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full h-24 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-[#00D9FF] transition"
            />
          </motion.div>
        </div>

        {/* Sidebar - ATS Score & Preview */}
        <div className="space-y-6">
          {/* ATS Score Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/[0.02] p-6 sticky top-6"
          >
            <h3 className="text-lg font-semibold text-white mb-6">ATS Score</h3>
            
            {/* Score Circle */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  opacity="0.1"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeDasharray={`${atsScore * 3.39} 339`}
                  initial={{ strokeDasharray: '0 339' }}
                  animate={{ strokeDasharray: `${atsScore * 3.39} 339` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D9FF" />
                    <stop offset="100%" stopColor="#9D4EDD" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-white">{atsScore}</div>
                <div className="text-xs text-gray-400">/ 100</div>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              {atsMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-300">{metric.metric}</span>
                    <span className="text-xs font-bold text-[#00D9FF]">{metric.score}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD]"
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 leading-tight">{metric.suggestion}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm font-semibold flex items-center justify-center gap-2 transition"
              >
                <Eye className="w-4 h-4" />
                Preview CV
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-lg text-black text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6"
          >
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#FF006E]" />
              Suggestions
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Good formatting - no tables or complex layouts detected</span>
              </li>
              <li className="flex gap-2 text-xs text-gray-300">
                <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>Add more action verbs to improve impact</span>
              </li>
              <li className="flex gap-2 text-xs text-gray-300">
                <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span>Include metrics and percentages in achievements</span>
              </li>
            </ul>
          </motion.div>

          {/* Job Description Match */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-white/10 backdrop-blur-md bg-white/5 p-6"
          >
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#00D9FF]" />
              Job Match
            </h3>
            <div className="space-y-2 text-xs">
              <p className="text-gray-400">Paste a job description to see keyword matches:</p>
              <textarea
                placeholder="Paste job description here..."
                className="w-full h-24 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-[#00D9FF] transition text-xs"
              />
              <button className="w-full px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-xs font-semibold transition">
                Analyze Match
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ATSCVBuilder;
