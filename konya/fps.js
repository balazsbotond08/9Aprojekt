function validateForm() {
    var privacyPolicyAccepted = document.getElementById("igen").checked;
    if (!privacyPolicyAccepted) {
      alert("Kérjük, fogadja el az adatvédelmi szabályzatot a feliratkozáshoz.");
      return false; 
    }

    alert("Köszönjük a feliratkozást!");
    return true; 
  }