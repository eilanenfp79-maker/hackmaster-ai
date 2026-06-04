import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

if (!ADMIN_PASSWORD || !JWT_SECRET) {
  throw new Error('Missing ADMIN_PASSWORD or JWT_SECRET in .env');
}

app.use(cors());
app.use(express.json());

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Password required' });
  }

  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
    return res.json({
      success: true,
      token,
      message: 'Admin login successful',
    });
  }

  return res.status(401).json({ error: 'Invalid password' });
});

// Verify Token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// AI Strategist
app.post('/api/ideas/analyze', verifyToken, (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description required' });
  }

  res.json({
    totalScore: 7.8,
    verdict: 'keep',
    criteria: [
      { name: 'Problem Importance', score: 8 },
      { name: 'Urgency', score: 7 },
      { name: 'Market Size', score: 8 },
      { name: 'Uniqueness', score: 8 },
      { name: 'Feasibility', score: 8 },
      { name: 'Technical Impressiveness', score: 8 },
      { name: 'AI Relevance', score: 9 },
      { name: 'Business Potential', score: 7 },
      { name: 'Revenue Clarity', score: 7 },
      { name: 'Scalability', score: 8 },
      { name: 'Defensibility', score: 7 },
      { name: 'Adoption Likelihood', score: 8 },
      { name: 'Judge Appeal', score: 8 },
      { name: 'Investor Appeal', score: 7 },
      { name: 'MVP Demo Potential', score: 8 },
      { name: 'Theme Alignment', score: 8 },
    ],
    strengths: [
      'Clear problem identification',
      'Strong market validation',
      'Scalable architecture',
      'Good team composition',
      'Solid go-to-market strategy',
    ],
    weaknesses: [
      'Revenue model needs detail',
      'Limited competitive analysis',
      'Data privacy not fully addressed',
    ],
    recommendations: [
      'Strengthen business model with unit economics',
      'Add detailed competitor comparisons',
      'Address data privacy requirements',
      'Prepare for scaling challenges',
    ],
  });
});

// Hackathons
app.get('/api/hackathons', (req, res) => {
  const { search, format, status } = req.query;

  const hackathons = [
    {
      id: 1,
      name: 'NASA Space Apps Challenge',
      description: 'Global hackathon for space technology',
      format: 'hybrid',
      status: 'upcoming',
      deadline: '2026-10-15',
      prizePool: 50000,
      location: 'Global',
      winProbability: 12,
      registrationUrl: 'https://www.spaceappschallenge.org',
    },
    {
      id: 2,
      name: 'Google Cloud Hackathon',
      description: 'Build with Google Cloud technologies',
      format: 'online',
      status: 'upcoming',
      deadline: '2026-08-30',
      prizePool: 100000,
      location: 'Online',
      winProbability: 8,
      registrationUrl: 'https://cloud.google.com/hackathon',
    },
    {
      id: 3,
      name: 'AI for Good Hackathon',
      description: 'Create AI solutions for social impact',
      format: 'in-person',
      status: 'ongoing',
      deadline: '2026-06-20',
      prizePool: 75000,
      location: 'San Francisco, USA',
      winProbability: 15,
      registrationUrl: 'https://aiforgood.hackathon.com',
    },
  ];

  let filtered = hackathons;

  if (search) {
    filtered = filtered.filter((h) =>
      h.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (format) {
    filtered = filtered.filter((h) => h.format === format);
  }

  if (status) {
    filtered = filtered.filter((h) => h.status === status);
  }

  res.json(filtered);
});

app.get('/api/hackathons/:id', (req, res) => {
  res.json({
    id: Number(req.params.id),
    name: 'NASA Space Apps Challenge',
    description: 'Global hackathon for space technology',
    fullDescription:
      'Join thousands of innovators worldwide to create solutions for real-world challenges facing our planet and beyond.',
    format: 'hybrid',
    status: 'upcoming',
    deadline: '2026-10-15',
    prizePool: 50000,
    location: 'Global',
    winProbability: 12,
    registrationUrl: 'https://www.spaceappschallenge.org',
    previousWinners: [
      { year: 2025, title: 'Climate Monitoring AI', team: 'EcoTech Squad' },
      { year: 2024, title: 'Satellite Data Analysis', team: 'Space Innovators' },
    ],
    judgingCriteria: [
      'Innovation (25%)',
      'Impact (25%)',
      'Feasibility (20%)',
      'Technical Approach (15%)',
      'Presentation (15%)',
    ],
  });
});

// ATS CV
app.post('/api/cv/analyze', verifyToken, (req, res) => {
  const { cvContent } = req.body;

  if (!cvContent) {
    return res.status(400).json({ error: 'CV content required' });
  }

  res.json({
    atsScore: 85,
    keywordMatches: ['Python', 'React', 'AWS', 'Machine Learning'],
    missingKeywords: ['Kubernetes', 'GraphQL', 'Docker'],
    suggestions: [
      'Add more technical keywords from job description',
      'Improve formatting for ATS compatibility',
      'Highlight relevant projects',
      'Use action verbs in descriptions',
    ],
    verdict: 'Good ATS compatibility. Minor improvements recommended.',
  });
});

// Marketplace
app.get('/api/talents', (req, res) => {
  const { role } = req.query;

  const talents = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'developer',
      expertise: ['React', 'Node.js', 'AI/ML', 'Python'],
      bio: 'Full-stack developer with 5+ years experience',
      rating: 4.9,
      isAvailable: true,
      projects: 12,
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      role: 'designer',
      expertise: ['UI/UX', 'Figma', 'Branding'],
      bio: 'Award-winning designer',
      rating: 4.8,
      isAvailable: true,
      projects: 18,
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'mentor',
      expertise: ['Startup Strategy', 'Pitching', 'Business Model'],
      bio: 'Serial entrepreneur',
      rating: 5.0,
      isAvailable: true,
      projects: 45,
    },
  ];

  if (role) {
    return res.json(talents.filter((t) => t.role === role));
  }

  res.json(talents);
});

// AI Judge
app.post('/api/judge/evaluate', verifyToken, (req, res) => {
  const { projectDescription } = req.body;

  if (!projectDescription) {
    return res.status(400).json({ error: 'Project description required' });
  }

  res.json({
    overallScore: 8.2,
    verdict: 'Strong project with high potential',
    criteria: [
      { name: 'Innovation', score: 9, weight: 15 },
      { name: 'Impact', score: 8, weight: 20 },
      { name: 'Feasibility', score: 8, weight: 20 },
      { name: 'Technical Approach', score: 8, weight: 15 },
      { name: 'Business Model', score: 7, weight: 15 },
      { name: 'Presentation', score: 8, weight: 15 },
    ],
    strengths: [
      'Clear problem identification',
      'Strong technical approach',
      'Scalable architecture',
    ],
    weaknesses: [
      'Revenue model needs detail',
      'Limited competitive analysis',
    ],
    recommendations: [
      'Strengthen business model',
      'Add competitor comparisons',
      'Address data privacy',
    ],
  });
});

// Pricing
app.get('/api/pricing', (req, res) => {
  res.json([
    {
      id: 'free',
      name: 'Free',
      price: 0,
      features: [
        '1 AI analysis/month',
        'Hackathon directory access',
        'Basic CV builder',
        'Community support',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 29,
      features: [
        'Unlimited AI analysis',
        'Full hackathon directory',
        'Advanced CV builder',
        'AI Judge (5/month)',
        'Priority support',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 99,
      features: [
        'Everything in Pro',
        'Unlimited AI Judge',
        'Human mentors',
        'Team collaboration',
        'Dedicated support',
      ],
    },
  ]);
});

// Newsletter
app.post('/api/newsletter/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }

  res.json({ success: true, message: 'Subscribed successfully' });
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'HackMaster AI is running' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 HackMaster AI Server running on http://localhost:${PORT}`);
});
