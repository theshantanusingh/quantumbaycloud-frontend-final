const express = require('express');
const path = require('path');
const fs = require('fs'); // ADD THIS LINE
const app = express();
const PORT = process.env.PORT || 4001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Blog data - MOVE THIS BEFORE ROUTES
const blogPosts = {
  'organizing-cloud-files': {
    title: '10 Best Practices for Organizing Your Cloud Files',
    excerpt: 'Learn how to structure your cloud storage for maximum productivity and easy file retrieval.',
    category: 'Cloud Storage',
    date: 'October 10, 2025',
    readTime: 8,
    author: 'Sarah Johnson',
    authorRole: 'Cloud Solutions Architect',
    tags: ['Organization', 'Productivity', 'Best Practices'],
    contentFile: 'organizing-cloud-files'
  },
  'zero-knowledge-encryption': {
    title: 'Understanding Zero-Knowledge Encryption',
    excerpt: 'What is zero-knowledge encryption and why it matters for your data security.',
    category: 'Security',
    date: 'October 8, 2025',
    readTime: 6,
    author: 'Michael Chen',
    authorRole: 'Security Engineer',
    tags: ['Security', 'Encryption', 'Privacy'],
    contentFile: 'zero-knowledge-encryption'
  },
  'team-collaboration-workflows': {
    title: 'How to Set Up Team Collaboration Workflows',
    excerpt: 'Step-by-step guide to creating efficient team workspaces and managing permissions.',
    category: 'Collaboration',
    date: 'October 5, 2025',
    readTime: 7,
    author: 'Emma Wilson',
    authorRole: 'Product Manager',
    tags: ['Collaboration', 'Teams', 'Workflow'],
    contentFile: 'team-collaboration-workflows'
  },
  'migrating-email-custom-domain': {
    title: 'Migrating Your Email to a Custom Domain',
    excerpt: 'Complete guide to moving your business email to a professional custom domain.',
    category: 'Email',
    date: 'October 1, 2025',
    readTime: 10,
    author: 'David Kumar',
    authorRole: 'Email Solutions Expert',
    tags: ['Email', 'Migration', 'Custom Domain'],
    contentFile: 'organizing-cloud-files'
  },
  'productivity-file-sync': {
    title: 'Boost Your Productivity with File Sync',
    excerpt: 'Discover how automatic file synchronization can streamline your workflow.',
    category: 'Tips & Tricks',
    date: 'September 28, 2025',
    readTime: 5,
    author: 'Lisa Park',
    authorRole: 'Productivity Consultant',
    tags: ['Productivity', 'File Sync', 'Tips'],
    contentFile: 'organizing-cloud-files'
  },
  'whats-new-quantumbaycloud': {
    title: "What's New in QuantumBayCloud",
    excerpt: 'Latest features and improvements to enhance your cloud storage experience.',
    category: 'Product Updates',
    date: 'September 25, 2025',
    readTime: 4,
    author: 'QuantumBay Team',
    authorRole: 'Product Team',
    tags: ['Updates', 'Features', 'Announcements'],
    contentFile: 'organizing-cloud-files'
  }
};

// Main Pages
app.get('/', (req, res) => {
  res.render('index', { title: 'QuantumBayCloud – Secure Cloud Storage & Email Solutions' });
});

app.get('/features', (req, res) => {
  res.render('features', { title: 'Features – QuantumBayCloud' });
});

app.get('/pricing', (req, res) => {
  res.render('pricing', { title: 'Pricing – QuantumBayCloud' });
});

// Product Pages
app.get('/storage', (req, res) => {
  res.render('storage', { title: 'Secure Cloud Storage – QuantumBayCloud' });
});

app.get('/email', (req, res) => {
  res.render('email', { title: 'Professional Email Hosting – QuantumBayCloud' });
});

// Feature Detail Pages
app.get('/file-sync', (req, res) => {
  res.render('file-sync', { title: 'Automatic File Sync – QuantumBayCloud' });
});

app.get('/collaboration', (req, res) => {
  res.render('collaboration', { title: 'Team Collaboration – QuantumBayCloud' });
});

app.get('/security', (req, res) => {
  res.render('security', { title: 'Advanced Security – QuantumBayCloud' });
});

app.get('/file-transfer', (req, res) => {
  res.render('file-transfer', { title: 'Large File Transfers – QuantumBayCloud' });
});

app.get('/web-access', (req, res) => {
  res.render('web-access', { title: 'Web Access – QuantumBayCloud' });
});

app.get('/smart-search', (req, res) => {
  res.render('smart-search', { title: 'Smart Search – QuantumBayCloud' });
});

app.get('/file-recovery', (req, res) => {
  res.render('file-recovery', { title: 'File Recovery – QuantumBayCloud' });
});

// Blog Routes
app.get('/blog', (req, res) => {
  res.render('blog', { 
    title: 'Blog – QuantumBayCloud',
    blogPosts: blogPosts
  });
});

app.get('/blog/:slug', (req, res) => {
  const slug = req.params.slug;
  const post = blogPosts[slug];
  
  if (!post) {
    return res.status(404).send('Blog post not found');
  }
  
  const contentPath = path.join(__dirname, 'views', 'blogs', `${post.contentFile}.ejs`);
  
  fs.readFile(contentPath, 'utf8', (err, content) => {
    if (err) {
      console.error('Error reading blog file:', err);
      return res.status(500).send('Error loading blog post');
    }
    
    res.render('blog-post', {
      title: `${post.title} – QuantumBayCloud Blog`,
      ...post,
      content: content
    });
  });
});

// Resources Pages
app.get('/support', (req, res) => {
  res.render('support', { title: 'Support Center – QuantumBayCloud' });
});

app.get('/api', (req, res) => {
  res.render('api', { title: 'API Documentation – QuantumBayCloud' });
});

// Contact Page
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us – QuantumBayCloud' });
});

// Auth Pages
app.get('/login', (req, res) => {
  res.render('login', { title: 'Sign In – QuantumBayCloud' });
});

app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up – QuantumBayCloud' });
});

// Legal Pages
app.get('/terms', (req, res) => {
  res.render('terms', { title: 'Terms of Service – QuantumBayCloud' });
});

app.get('/privacy', (req, res) => {
  res.render('privacy', { title: 'Privacy Policy – QuantumBayCloud' });
});

// Company Pages
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us – QuantumBayCloud' });
});

app.get('/careers', (req, res) => {
  res.render('careers', { title: 'Careers – QuantumBayCloud' });
});

app.get('/refund', (req, res) => {
  res.render('refund', { title: 'Refund Policy – QuantumBayCloud' });
});










// Dashboard Routes (all in /dashboard folder)
app.get('/dashboard', (req, res) => {
  res.render('dashboard/index', { 
    title: 'Dashboard – QuantumBayCloud'
  });
});

app.get('/dashboard/files', (req, res) => {
  res.render('dashboard/files', { 
    title: 'My Files – QuantumBayCloud'
  });
});

app.get('/dashboard/shared', (req, res) => {
  res.render('dashboard/shared', { 
    title: 'Shared with Me – QuantumBayCloud'
  });
});

app.get('/dashboard/email', (req, res) => {
  res.render('dashboard/email', { 
    title: 'Email – QuantumBayCloud'
  });
});

app.get('/dashboard/trash', (req, res) => {
  res.render('dashboard/trash', { 
    title: 'Trash – QuantumBayCloud'
  });
});

app.get('/dashboard/settings', (req, res) => {
  res.render('dashboard/settings', { 
    title: 'Settings – QuantumBayCloud'
  });
});

app.get('/dashboard/billing', (req, res) => {
  res.render('dashboard/billing', { 
    title: 'Billing – QuantumBayCloud'
  });
});

app.get('/logout', (req, res) => {
  // Clear session here
  res.redirect('/login');
});


// Service Pages
app.get('/domains', (req, res) => {
  res.render('domains', { title: 'Domain Registration – QuantumBayCloud' });
});

app.get('/hosting', (req, res) => {
  res.render('hosting', { title: 'Web Hosting Services – QuantumBayCloud' });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
