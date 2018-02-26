(function() {
  const path = window.location.pathname;
  if (path.startsWith('/authors')) {
    author();
  } else if (path.find('/books')) {
    book();
  }
})();
