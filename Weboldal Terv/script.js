function pagefunction(page) {
    page_header = document.getElementById("header")
    page_games = document.getElementById("games")

    if(page == header || page === undefined){
        page_header.style.display = "block";
        page_games.style.display = "none";
    }
    
    else if(page == games) {
        page_header.style.display = "none";
        page_games.style.display = "block";
    }

}

function cardfunction(hover, game) {
    sel_game = document.getElementById(game)
    if(hover == 1) {
        sel_game.style.background = "rgba(0,0,0,1)";
    }
    else if (hover == 2 || hover === undefined) {
        sel_game.style.background = "rgba(0,0,0,0)";
    }
    else if (hover == 3)
    {
        sel_game.modal
    }
}