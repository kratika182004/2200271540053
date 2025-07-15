import app from './app.js';

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running`);
  });
}).catch(err => console.error(err));
