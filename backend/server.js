require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// Routes
app.use('/api/listings', require('./routes/listings'));

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'StayNest API',
    mongo: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to StayNest API', version: '1.0.0', docs: '/api/listings' });
});

app.listen(PORT, () => {
  console.log(`🚀 StayNest backend running on port ${PORT}`);
});
