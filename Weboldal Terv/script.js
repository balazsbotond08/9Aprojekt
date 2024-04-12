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

function card_function(hover) {
    if(hover == 1) {
        document.getElementById("kártya").style.background = "rgba(0,0,0,0.5)";
    }
    else if (hover == 2 || hover === undefined) {
        document.getElementById("kártya").style.background = "rgba(0,0,0,0)"
    }
}