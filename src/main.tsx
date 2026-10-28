import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CF_ANALYTICS_TOKEN } from './config';

// Подключение Cloudflare Web Analytics, если задан реальный токен
if (
  typeof window !== 'undefined' &&
  CF_ANALYTICS_TOKEN &&
  CF_ANALYTICS_TOKEN !== 'REPLACE_ME' &&
  CF_ANALYTICS_TOKEN.trim() !== ''
) {
  if (!document.querySelector('script[data-cf-beacon]')) {
    const cfScript = document.createElement('script');
    cfScript.defer = true;
    cfScript.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    cfScript.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_ANALYTICS_TOKEN.trim() }));
    document.head.appendChild(cfScript);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
