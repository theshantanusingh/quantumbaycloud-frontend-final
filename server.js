const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

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

// Resources Pages
app.get('/support', (req, res) => {
  res.render('support', { title: 'Support Center – QuantumBayCloud' });
});

app.get('/blog', (req, res) => {
  res.render('blog', { title: 'Blog – QuantumBayCloud' });
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


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});