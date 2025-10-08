const express = require('express');
const path = require('path');
const app = express();

// Sert les fichiers statiques générés par Angular
app.use(express.static(path.join(__dirname, 'dist/refink-app-buyer-v2')));

// Redirige toutes les routes vers index.html pour Angular Router
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/refink-app-buyer-v2', 'index.html'));
});

// Utilise le port fourni par Clever Cloud ou 8080 par défaut
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Angular app running on port ${PORT}`);
});
