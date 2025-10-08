
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1111, hash: '41aade88420751a92e1ef87312957b8541eadf2bf6f7685e13916f69437dcaf5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'bcddb483b38809b2436e664735d072aee1afbd329d41a9815b12fc66b20ada2f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 9236, hash: 'b102c8c302845a453b2159f94e1e679fb365321d98ffb0874a422d15eddc048d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4382, hash: '1af1c5db403f2eb9a08614e0a2994b21f063344fbfe4274b4d71927ee9fb54f5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6037, hash: '1fef209f968e51c245ab7e7d5b0ae55317f9e23863612f804a86b47d98bf219f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-K3A7TUK3.css': {size: 503, hash: 'ueO3sPDF40s', text: () => import('./assets-chunks/styles-K3A7TUK3_css.mjs').then(m => m.default)}
  },
};
