if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('http://droidtamvan.gitlab.io/ServiceWorker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope');
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
