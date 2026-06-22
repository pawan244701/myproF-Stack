require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const authRoute = require('./routes/authRoute');

app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/email.html'));
});

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use(express.static('../frontend'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
