const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'QuantumBayCloud – Secure Cloud Storage & Email Solutions' });
});

app.get('/features', (req, res) => {
  res.render('index', { title: 'Features – QuantumBayCloud' });
});

app.get('/pricing', (req, res) => {
  res.render('index', { title: 'Pricing – QuantumBayCloud' });
});

app.get('/storage', (req, res) => {
  res.render('index', { title: 'Cloud Storage – QuantumBayCloud' });
});

app.get('/email', (req, res) => {
  res.render('index', { title: 'Email Hosting – QuantumBayCloud' });
});

app.get('/support', (req, res) => {
  res.render('index', { title: 'Support – QuantumBayCloud' });
});

app.get('/contact', (req, res) => {
  res.render('index', { title: 'Contact Us – QuantumBayCloud' });
});

app.get('/login', (req, res) => {
  res.render('index', { title: 'Sign In – QuantumBayCloud' });
});

app.get('/signup', (req, res) => {
  res.render('index', { title: 'Sign Up – QuantumBayCloud' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
