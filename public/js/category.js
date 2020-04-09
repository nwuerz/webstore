document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".fixed-action-btn");
  M.FloatingActionButton.init(elems, {
    toolbarEnabled: true
  });
});
