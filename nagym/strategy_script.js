function pagefunction(page) {
    const header = document.getElementById("header");
    const games = document.getElementById("games");

    if (page === header) {
        header.style.display = "block";
        games.style.display = "none";
    } else if (page === games) {
        header.style.display = "none";
        games.style.display = "block";
    } else {
        header.style.display = "block";
        games.style.display = "none";
    }
}

function cardfunction(hover, game) {
    sel_game = document.getElementById(game)
    var modal = document.getElementById(game + "_modal")
    if(hover == 1) 
    {
        sel_game.style.background = "rgba(0,0,0,0.3)";
    }
    else if (hover == 2 || hover === undefined) 
    {
        sel_game.style.background = "rgba(255,255,255,1)";
    }
    else if (hover == 3)
    {
        if(modal.style.display == "block") 
        {
            modal.style.display = "none"
        }
        else
        {
            modal.style.display = "block"
            modal.style.background = "rgba(0, 0, 0, 0.6)"
        }
    }
}

function hirlevelFunction() {
    var vezeteknev = document.getElementById("vezeteknev").value;
    var keresztnev = document.getElementById("keresztnev").value;
  

    if (vezeteknev == "" || keresztnev == "" || email == "") {
      alert("Kérjük, töltse ki az összes mezőt!");
      return false;
    }
    alert("Köszönjük, hogy feliratkozott a hírlevelünkre!");
    return false;
  }