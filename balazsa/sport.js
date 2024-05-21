function validateForm() {
    var vezeteknev = document.getElementById("vezeteknev").value;
    var keresztnev = document.getElementById("keresztnev").value;
  

    if (vezeteknev == "" || keresztnev == "" || email == "") {
      alert("Kérjük, töltse ki az összes mezőt!");
      return false;
    }
    alert("Köszönjük, hogy feliratkozott a hírlevelünkre!");
    window.location.href = "sport.html";
    return false;
  }