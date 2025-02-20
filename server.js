const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('../routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://lgopikrishna84:lgopikrishna@cluster.btodjyc.mongodb.net/?retryWrites=true&w=majority&appName=cluster', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
