let helyesEmail = 0;
let emailCimData = "";
let box = 0;

function feliratkozas(){
    let emailCim = document.getElementById("emailcim");
    const emailCimInput = emailCim.value;
    const megadottEmailSpan = document.getElementById("megadottemail");
    var checkbox = document.getElementById("myCheckbox");

    if( checkbox.checked ){
        box = 1;
    }
    if( checkbox.checked == false ){
        box = 0;
    }

    if(helyesEmail === 1 && checkbox.checked){
        box = 1;
        emailCim.value = "";
        emailCim.classList.add("helytelen");
        emailCim.placeholder = "Már megadtál egy e-mail címet!";
        setTimeout(() => { emailCim.classList.remove("helytelen") }, 2000);
        setTimeout(() => { emailCim.placeholder = "Köszönjük a feliratkozást!" }, 2000);
    }
    else if(emailCimInput === ""){
        emailCim.classList.add("helytelen");
        emailCim.placeholder = "Előbb írd be az e-mail címed!";
        setTimeout(() => { emailCim.classList.remove("helytelen") }, 2000);
        setTimeout(() => { emailCim.placeholder = "valaki@example.com" }, 2000);
    }
    else if(/[@]/.test(emailCimInput) && checkbox.checked){
        box = 1;
        helyesEmail = 1;
        emailCimData = emailCimInput;
        megadottEmailSpan.textContent = emailCimData;
        emailCim.value = "";
        emailCim.classList.add("siker");
        emailCim.placeholder = "Sikeres feliratkozás a(z) " + emailCimData + " e-mail címmel!";
        setTimeout(() => { emailCim.classList.remove("siker") }, 2000);
        setTimeout(() => { emailCim.placeholder = "Köszönjük a feliratkozást!" }, 2000);
    }
    else if( box == 0 ){
        emailCim.value = "";
        emailCim.classList.add("helytelen");
        emailCim.placeholder = "Nem fogadtad el az Adatvédelmi Tájékoztatót!";
        setTimeout(() => { emailCim.classList.remove("helytelen") }, 2000);
        setTimeout(() => { emailCim.placeholder = "valaki@example.com" }, 2000);   
    }
    else if( box == 0 ){
        emailCim.value = "";
        emailCim.classList.add("helytelen");
        emailCim.placeholder = "Nem fogadtad el az Adatvédelmi Tájékoztatót!";
        setTimeout(() => { emailCim.classList.remove("helytelen") }, 2000);
        setTimeout(() => { emailCim.placeholder = "valaki@example.com" }, 2000);   
    }
    else{
        emailCim.value = "";
        emailCim.classList.add("helytelen");
        emailCim.placeholder = "Hibás e-mail címet adtál meg!";
        setTimeout(() => { emailCim.classList.remove("helytelen") }, 2000);
        setTimeout(() => { emailCim.placeholder = "valaki@example.com" }, 2000);
    }
}  

function elvetes(){
    let emailCim = document.getElementById("emailcim");
    const emailCimInput = emailCim.value;
    const megadottEmailSpan = document.getElementById("megadottemail");

    if(helyesEmail == 1){
        helyesEmail = 0;
        megadottEmailSpan.textContent = "";
        emailCim.placeholder = "Add meg az új e-mail címet!";
        setTimeout(() => { emailCim.placeholder = "valaki@example.com" }, 2000);
    }
    else if(helyesEmail == 0){
        emailCim.classList.add("helytelen");
        emailCim.placeholder = "Még nem adtál meg e-mail címet.";
        setTimeout(() => { emailCim.classList.remove("helytelen") }, 2000);
        setTimeout(() => { emailCim.placeholder = "valaki@example.com" }, 2000);
    }
}