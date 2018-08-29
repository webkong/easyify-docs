var cacheName = 'v2';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            cache.addAll([
                '_assets',
                '_media',
                'zh-cn',
                'README.md',
                '_navbar.md'
            ]);
        }));

});
self.addEventListener('activate', function(event){
    console.log(event);
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true })
        .then(function (response) {
          if (response) {
            return response;
          }
          var fetchRequest = event.request.clone();
  
          return fetch(fetchRequest).then(
            function (response) {
              if (!response || response.status !== 200) {
                return response;
              }
  
              var responseToCache = response.clone();
              caches.open(cacheName)
                .then(function (cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
    );
  });