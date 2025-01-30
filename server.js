const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    email:"innovativepotencial@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url:"https://github.com/Korious/API.git",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});