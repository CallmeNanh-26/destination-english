import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { execSync } from 'node:child_process';

// Windows system proxy (Internet Settings), e.g. set by Clash.
function windowsProxy() {
  if (process.platform !== 'win32') return;
  try {
    const out = execSync('reg query "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings"', { encoding: 'utf8' });
    if (!/ProxyEnable\s+REG_DWORD\s+0x1/.test(out)) return;
    const server = out.match(/ProxyServer\s+REG_SZ\s+(\S+)/)?.[1];
    if (!server) return;
    const https = server.split(';').find((s) => s.startsWith('https='))?.slice(6) || server.replace(/^http=/, '').split(';')[0];
    return https.includes('://') ? https : `http://${https}`;
  } catch {}
}

// If the machine reaches the internet through a local proxy (e.g. Clash), route the dev proxies through it too.
const upstream =
  process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || windowsProxy();
if (upstream) console.log(`[dev proxy] via ${upstream}`);
const agent = upstream ? new HttpsProxyAgent(upstream) : undefined;

const forward = (prefix, target) => ({
  target,
  agent,
  changeOrigin: true,
  rewrite: (p) => p.replace(new RegExp(`^${prefix}`), ''),
});

// base './' so the build works on GitHub Pages under any repo name
export default defineConfig({
  base: './',
  plugins: [react()],
  // Dev only: same-origin proxies so the app also works in embedded browsers that block cross-origin calls.
  server: {
    proxy: {
      '/gemini-api': forward('/gemini-api', 'https://generativelanguage.googleapis.com'),
      '/dict-api': forward('/dict-api', 'https://api.dictionaryapi.dev'),
    },
  },
});
