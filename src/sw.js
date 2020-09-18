importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.core.skipWaiting();
    workbox.core.clientsClaim();

    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    // Using Network first Strategy for questions
    workbox.routing.registerRoute(
        ({request}) => request.url.startsWith('https://opentdb.com/api.php'),
        new workbox.strategies.NetworkFirst()
    );

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}