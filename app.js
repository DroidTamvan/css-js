if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('https://cdn.statically.io/gh/DroidTamvan/css-js/e30c6a61/ServiceWorker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope');
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
