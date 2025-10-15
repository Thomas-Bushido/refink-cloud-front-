const fs = require('fs');
const path = require('path');

const apiUrl = process.env.CLEVER_API_URL || process.env.CLEVER_API || 'http://localhost:8080/api/refink/buyer';

// Target path inside dist after ng build -- configuration may put browser files in dist/<project>/browser
const outPath = path.join(__dirname, '..', 'dist', 'refink-app-buyer-v2', 'browser', 'runtime-config.json');

// ensure dir exists
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify({ API_URL: apiUrl }, null, 2));
console.log('Wrote runtime-config.json to', outPath, 'with API_URL =', apiUrl);
