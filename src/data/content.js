export const PROFILE = {
  name: 'Muhammad Hafiz',
  role: 'Full Stack Developer',
  rolesShort: ['Full Stack Developer', 'Junior Web Developer', 'AI/ML Engineer'],
  tagline:
    'B.Tech IT graduate building end-to-end products with React, Flask and applied machine learning — looking for my first full-time engineering role.',
  location: 'Chennai, India',
  email: 'hafiz12112003@gmail.com',
  phone: '+91 9363209924',
  github: 'https://github.com/Hafiz12112003',
  githubHandle: 'github.com/Hafiz12112003',
  education: {
    degree: 'B.Tech, Information Technology',
    school: 'Mohamed Sathak AJ College of Engineering, Chennai',
    year: '2025',
    cgpa: '7.00',
  },
}

export const SKILLS = [
  {
    category: 'Frontend',
    slug: 'frontend',
    icon: 'Code2',
    items: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 / CSS3'],
  },
  {
    category: 'Backend',
    slug: 'backend',
    icon: 'Server',
    items: ['Python', 'Flask', 'REST API design', 'JWT & bcrypt auth', 'Java (Full Stack)'],
  },
  {
    category: 'Databases',
    slug: 'databases',
    icon: 'Database',
    items: ['MongoDB / Atlas', 'MySQL', 'Neo4j (graph)'],
  },
  {
    category: 'Cloud & DevOps',
    slug: 'cloud',
    icon: 'CloudCog',
    items: ['AWS (Cloud Practitioner)', 'Git & GitHub', 'Deployment (Render)'],
  },
  {
    category: 'AI / ML',
    slug: 'ai-ml',
    icon: 'BrainCircuit',
    items: ['TensorFlow', 'CNN ensembles (EfficientNet, ResNet, DenseNet)', 'RAG pipelines', 'LLM APIs (Groq, Llama 3.3)'],
  },
]

export const PROJECTS = [
  {
    id: 'shopnest',
    name: 'ShopNest',
    flagship: true,
    tagline: 'E-commerce platform with a RAG-powered shopping assistant',
    description:
      'A Flask backend exposing 15+ REST APIs with JWT/bcrypt authentication and MongoDB Atlas for storage, paired with a React/Vite frontend. The standout piece is a retrieval-augmented generation chatbot pipeline running on Llama 3.3 70B via the Groq API, so shoppers can ask natural-language questions about the catalog. Built end-to-end — setup through deployment — as a take-home for the Auriseg internship, and it carried the application through to a second-round interview.',
    tech: ['React', 'Vite', 'Flask', 'MongoDB Atlas', 'JWT', 'bcrypt', 'Groq API', 'Llama 3.3 70B', 'RAG'],
    links: {
      repo: 'https://github.com/Hafiz12112003/shopnest-chatbot',
    },
    stat: { label: 'REST APIs', value: '15+' },
  },
  {
    id: 'eyesight',
    name: 'EyeSight',
    flagship: false,
    tagline: 'Diabetic retinopathy detection from retinal scans',
    description:
      'An ensemble of EfficientNet, ResNet and DenseNet convolutional networks in TensorFlow, trained to classify diabetic retinopathy from retinal images at 90%+ accuracy. Wrapped in a React frontend talking to a Flask inference API, so a clinician-facing workflow — upload a scan, get a classification — is usable end to end, not just a notebook result.',
    tech: ['TensorFlow', 'EfficientNet', 'ResNet', 'DenseNet', 'React', 'Flask'],
    links: {
      repo: 'https://github.com/Hafiz12112003',
    },
    stat: { label: 'Accuracy', value: '90%+' },
  },
  {
    id: 'scout',
    name: 'Scout',
    flagship: false,
    tagline: 'Football scouting platform on a graph database',
    description:
      'A scouting tool that models players, clubs and relationships as a graph in Neo4j, served through a Flask API and rendered with a d3-force graph visualization in the React 18 + Vite + Tailwind frontend — built so scouting connections are something you can see and explore, not just a filtered table.',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Flask', 'Neo4j', 'd3-force'],
    links: {
      repo: 'https://github.com/Hafiz12112003',
      demo: 'https://scout-frontend-pblr.onrender.com',
    },
    stat: { label: 'Graph engine', value: 'Neo4j' },
  },
]

export const JOURNEY = [
  {
    period: 'During B.Tech',
    title: 'Built a certification foundation alongside coursework',
    description:
      'Completed the Java Full Stack Training with TNS India Foundation, the Advanced MS Office program under Tamil Nadu Government\u2019s Naan Mudhalvan initiative, and the Complete Python Bootcamp on Udemy — the base the later projects were built on.',
  },
  {
    period: '2025',
    title: 'Graduated B.Tech, Information Technology',
    description:
      'Mohamed Sathak AJ College of Engineering, Chennai — CGPA 7.00. Earned the AWS Cloud Practitioner certification around the same period.',
  },
  {
    period: 'Take-home assignment',
    title: 'Built ShopNest for the Auriseg internship process',
    description:
      'Designed and shipped the full stack solo — Flask APIs, auth, MongoDB, a RAG chatbot pipeline on Llama 3.3 70B, React frontend, deployment — for a take-home assignment. It advanced the application to a second-round interview.',
  },
  {
    period: 'Independent project',
    title: 'Trained an ensemble model for EyeSight',
    description:
      'Combined EfficientNet, ResNet and DenseNet into a single ensemble to push diabetic retinopathy classification past 90% accuracy, then wrapped it in a usable React + Flask app.',
  },
  {
    period: 'Independent project',
    title: 'Shipped Scout end to end, including deployment',
    description:
      'Took a graph-modeling idea for football scouting from a Neo4j schema to a deployed React app with live d3-force visualization.',
  },
]

export const CERTIFICATIONS = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    icon: 'CloudCog',
  },
  {
    name: 'Complete Python Bootcamp',
    issuer: 'Udemy',
    icon: 'Terminal',
  },
  {
    name: 'Java Full Stack Training',
    issuer: 'TNS India Foundation',
    icon: 'Layers',
  },
  {
    name: 'Advanced MS Office',
    issuer: 'Naan Mudhalvan, Government of Tamil Nadu',
    icon: 'FileSpreadsheet',
  },
]

export const STRENGTHS = [
  {
    title: 'Ships finished, deployed products',
    description:
      'ShopNest and Scout aren\u2019t local demos — both went from schema and API design through to a deployed frontend a stranger can actually open and use.',
  },
  {
    title: 'Comfortable across the stack',
    description:
      'React on the frontend, Flask and Python on the backend, and storage picked for the problem — MongoDB for ShopNest, MySQL where relational fits, Neo4j for Scout\u2019s graph of relationships.',
  },
  {
    title: 'Applies ML rather than just studying it',
    description:
      'An ensemble CNN pushed past 90% accuracy on retinal scans for EyeSight, and a RAG pipeline on Llama 3.3 70B gives ShopNest a working conversational layer — both integrated into real applications, not standalone notebooks.',
  },
  {
    title: 'Already validated under real evaluation',
    description:
      'ShopNest was a timed take-home for the Auriseg internship process, and it carried the application through to a second-round interview.',
  },
]
