function letsgo (){
    alert("jelszó: "+pw.value + "köszike, ez hazsnos lesz :)")
    localStorage.setItem("email", mail.value)
    localStorage.setItem("pass", pw.value)
    localStorage.clear
}