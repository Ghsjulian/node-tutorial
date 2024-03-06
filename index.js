const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the Express app
module.exports = app;
