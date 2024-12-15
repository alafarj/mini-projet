const maladies = {
  "blé_grain": {
      maladie: "Maladie charbonneuse",
      solutions: "Rotation des cultures et traitement des semences"
  },
  "blé_épi": {
      maladie: "Charbon du blé",
      solutions: "Désinfection des semences avec fongicide systémique"
  },
  "orge_épi": {
      maladie: "Charbon nu de l’orge",
      solutions: "Désinfection des semences avec fongicide systémique"
  },
  "avoine_panicule": {
      maladie: "Charbon nu de l’avoine",
      solutions: "Rotation des cultures et traitement des semences"
  },
  "maïs_panicule": {
      maladie: "Les fusarioses",
      solutions: "Rotation des cultures, traitement des semences, bonne préparation du sol, traitements fongicides en végétation"
  }
};

// Fonction pour gérer les résultats
function afficherResultat(cereale, organe) {
  // Générer une clé unique basée sur la combinaison céréale et organe
  const key = `${cereale}_${organe}`;

  // Obtenir les résultats
  const resultat = maladies[key] || {
      maladie: "Aucune donnée disponible",
      solutions: "Veuillez consulter un spécialiste."
  };

  // Stocker les résultats dans localStorage
  localStorage.setItem("maladie", resultat.maladie);
  localStorage.setItem("solutions", resultat.solutions);

  // Redirection vers la page des résultats
  window.location.href = "index3.html";
}