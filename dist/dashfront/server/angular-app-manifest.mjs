
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25296, hash: 'b85f60bb874cec12ecfeba6ffebd873f42fa6a3a62a88ff0c337e01b594b6a0e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17296, hash: 'ef5ecd3c4b76c8c2399d16cfbffc71a438163f9f93cf7edef98e93851cff542c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35984, hash: 'a7bba23057ca5703e6abf646827d0c19c444a328b89b7403c87d85fe07bf1aaa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GZPITRVN.css': {size: 24149, hash: 'iUeSCyZkTC0', text: () => import('./assets-chunks/styles-GZPITRVN_css.mjs').then(m => m.default)}
  },
};
