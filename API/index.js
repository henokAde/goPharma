const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    // une fois que le port est sur écoute :
    console.log(`App on http://localhost:${PORT}`);
});