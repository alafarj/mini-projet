document.addEventListener("DOMContentLoaded", function() {
  const diagnosticButton = document.querySelector(".button a");
  const selectPlante = document.getElementById("plante");

  diagnosticButton.addEventListener("click", function(event) {
    if (!selectPlante.value) {
      event.preventDefault();
      alert("Veuillez sélectionner une céréale avant de débuter le diagnostic.");
    } else {
      // Redirige vers index2.html avec la plante sélectionnée
      diagnosticButton.href = `index2.html?plante=${encodeURIComponent(selectPlante.value)}`;
    }
  });
});
