self.addEventListener('install', function(event){
    console.log('[Service Worker] Installing service worker...', event);
});

self.addEventListener('activate', function(event){
    console.log('[Service Worker] Activating service workers...', event);
    fetch("https://www.shredit.com/en-ca/home");
    return self.clients .claim();
});

self.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});
