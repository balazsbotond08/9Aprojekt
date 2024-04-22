function letsgo (){
    alert("jelszó: "+pw.value)
    localStorage.setItem("email", mail.value)
    localStorage.setItem("pass", pw.value)
    localStorage.clear
}