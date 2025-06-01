// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist'))); // or 'build' if using CRA

// API example (optional)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html')); // or 'build/index.html'
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
