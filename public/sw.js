const CACHE_NAME ="version-1"
const urlsToCache=['index.html', 'offline.html']
const self=this;


//install SW
self.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            return cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/index.html",
                "/",
                "/users"
            ])
        })
    )
})


//Listen for Requests
self.addEventListener('fetch', (event)=>{
 if(!navigator.onLine)
    {
    event.respondWith(
        caches.match(event.request)
        .then((resp)=>{
            if(resp){

                return result
            }

        })
    )
}
})


//Activate the SW
self.addEventListener('activate', (event)=>{
    const cachWhitelist=[];
    cachWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheName)=>Promise.all(
            cacheName.map((cacheName)=>{
                if(!cachWhitelist.includes(cacheName)){
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})

