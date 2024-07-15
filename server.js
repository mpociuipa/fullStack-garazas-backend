const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Sukurkite express aplikaciją
const app = express();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Prisijungti prie duomenų bazės
connectDB();

// Importuoti maršrutizatorius
const userRouter = require('./routes/userRouter');
const garageRouter = require('./routes/garageRouter');
const mechanicRouter = require('./routes/mechanicRouter');

// Naudoti maršrutizatorius
app.use('/api/users', userRouter);
app.use('/api/garages', garageRouter);
app.use('/api/mechanics', mechanicRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveris veikia per portą ${PORT}`);
});
