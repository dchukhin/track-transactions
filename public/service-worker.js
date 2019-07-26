self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  'https://my-json-server.typicode.com/dchukhin/track-transactions/transactions',
  new workbox.strategies.NetworkFirst()
);
