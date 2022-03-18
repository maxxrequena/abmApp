const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;

require('dotenv').config();

app.use(
  cors({
    origin: "*",
    credentials: false,
  })
);
app.use(express.json());

const router = require('./routes/index')
app.use("/", router);


app.listen(PORT, () => console.log(`Server Running Port ${PORT}`))

module.exports = app;