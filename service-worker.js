self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open('my-cache').then(function (cache) {
			return cache.addAll([
				'/',
				'/index.html',
				// добавьте здесь другие ресурсы, которые вы хотите кэшировать
			]);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});
