

function pagefunction(page)
{
    page_header = document.getElementById("header")
    page_games = document.getElementById("games")
    page_funny = document.getElementById("funny")

    if(page == header)
    {
        page_header.style.display = "block";
        page_games.style.display = "none";
        page_funny.style.display = "none";
    }
    
    else if(page == games) 
    {
        page_header.style.display = "none";
        page_games.style.display = "block";
        page_funny.style.display = "none";
    }

    else if (page === undefined) 
    {
        page_header.style.display = "none";
        page_games.style.display = "none";
        page_funny.style.display = "block";
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
        sel_game.style.background = "rgba(0,0,0,0)";
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
        }
    }
}