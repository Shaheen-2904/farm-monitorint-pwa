/* Minimal service worker registration using workbox-window for create-react-app builds */
import { Workbox } from 'workbox-window';

export function register() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js');
    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        console.log('New content is available; please refresh.');
      } else {
        console.log('Content is cached for offline use.');
      }
    });
    wb.register().catch(err => console.error('ServiceWorker registration failed:', err));
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => registration.unregister());
  }
}
