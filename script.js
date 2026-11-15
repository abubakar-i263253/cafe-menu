// Cafe Corner - simple page interactions
document.addEventListener("DOMContentLoaded", function () {
  // The home page link remains usable without JavaScript; this adds a clear click action.
  document.querySelectorAll('[data-action="go-menu"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "menu.html";
    });
  });

  // Show a useful response when the menu's Order Now button is clicked.
  var orderButton = document.querySelector('[data-action="order"]');
  if (orderButton) {
    orderButton.addEventListener("click", function () {
      var message = document.getElementById("order-message");
      message.textContent = "Thanks for your interest! Please visit one of our branches or contact us for ordering details.";
    });
  }
});
