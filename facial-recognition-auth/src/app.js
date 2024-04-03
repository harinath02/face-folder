const express = require('express');
const axios = require('axios');
const enrollRouter = require('./routes/enroll');
const authenticateRouter = require('./routes/authenticate');

const app = express();

app.use(express.json());

// Mounting routes
app.use('/enroll', enrollRouter);
app.use('/authenticate', authenticateRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
