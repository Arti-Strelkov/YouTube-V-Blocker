window.addEventListener('keydown', function(event) {
  if (event.code === 'KeyV' || event.code === 'KeyM') {
    event.stopPropagation();
  }
}, true);