const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/refink-app-buyer-v2')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/refink-app-buyer-v2', 'index.html'));
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Angular app running on port ${PORT}`);
});
