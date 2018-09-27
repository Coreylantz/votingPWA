self.addEventListener('install', function(event){
    console.log('[Service Worker] Installing service worker...', event);
});

self.addEventListener('activate', function(event){
    console.log('[Service Worker] Activating service workers...', event);
    return self.clients .claim();
});