
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Thepandaofnom.github.io/retrorepair/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/retrorepair"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 839, hash: 'a5fa7a7914dc25166c8ad6ce80ad140c4defed09a0bd1d02c6cdf1e2471b0113', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '8f29a0ea0b92c89e96273387f8eda436259f70e2f277a3a72363c09ee867571b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32603, hash: '418423fbfc29bbb2f15ce1664fe6a8b40134042bfc87bb7c546e4e9b74811ed7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UGVYITW5.css': {size: 359603, hash: 'bLGwhljbOe8', text: () => import('./assets-chunks/styles-UGVYITW5_css.mjs').then(m => m.default)}
  },
};
