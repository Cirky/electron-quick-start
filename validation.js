function preveriPodatke(form){
    var napaka = false;
    var izpis = "Napačno izpolnjena polja: ";
    re = /^[a-zA-ZšŠđĐžŽćĆčČ]{2,}$/;
    if(!re.test(form.ime.value)) {
        if(!napaka) {
            izpis = izpis.concat("ime");
        }
        else {
            izpis = izpis.concat(", ime");
        }
        $("#ime").removeClass('is-valid').addClass("is-invalid");
        form.ime.focus();
        napaka = true;
    }
    else {
        $("#ime").removeClass('is-invalid').addClass("is-valid");
    }
    if(!re.test(form.priimek.value)) {
        if(!napaka) {
            izpis = izpis.concat("priimek");
        }
        else {
            izpis = izpis.concat(", priimek");
        }
        $("#priimek").removeClass('is-valid').addClass("is-invalid");
        form.priimek.focus();
        napaka = true;
    }
    else {
        $("#priimek").removeClass('is-invalid').addClass("is-valid");
    }
    re = /^[a-zA-ZšŠđĐžŽćĆčČ]{2,}[\sa-zA-ZšŠđĐžŽćĆčČ]*$/;
    if(!re.test(form.ulica.value)) {
        if(!napaka) {
            izpis = izpis.concat("Ulica");
        }
        else {
            izpis = izpis.concat(", ulica ");
        }
        $("#ulica").removeClass('is-valid').addClass("is-invalid");
        form.ulica.focus();
        napaka = true;
    }
    else {
        $("#ulica").removeClass('is-invalid').addClass("is-valid");
    }

    if(form.hisna_st.value < 1) {
        if(!napaka) {
            izpis = izpis.concat("Hišna številka");
        }
        else {
            izpis = izpis.concat(", hišna številka");
        }
        $("#hisna_st").removeClass('is-valid').addClass("is-invalid");
        form.ulica.focus();
        napaka = true;
    }
    else {
        $("#hisna_st").removeClass('is-invalid').addClass("is-valid");
    }


    re = /^[a-zA-ZšŠđĐžŽćĆčČ]{2,}[\sa-zA-ZšŠđĐžŽćĆčČ]*$/;
    //if(!re.test(form.mesto.value)) {
    if(!form.mesto.value) {
        if(!napaka) {
            izpis = izpis.concat("mesto");
        }
        else {
            izpis = izpis.concat(", mesto");
        }
        $("#mesto").removeClass('is-valid').addClass("is-invalid");
        form.mesto.focus();
        napaka = true;
    }
    else {
        $("#mesto").removeClass('is-invalid').addClass("is-valid");
    }
    re = /^([1-9])[0-9]{3}/;
    if(!re.test(form.posta.value)) {
        if(!napaka) {
            izpis = izpis.concat("Poštna številka");
        }
        else {
            izpis = izpis.concat(", poštna številka");
        }
        $("#posta").removeClass('is-valid').addClass("is-invalid");
        form.posta.focus();
        napaka = true;
    }
    else {
        $("#posta").removeClass('is-invalid').addClass("is-valid");
    }
    re = /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/;
    if(!re.test(form.telefon.value)) {
        if(!napaka) {
            izpis = izpis.concat("telefon");
        }
        else {
            izpis = izpis.concat(", telefon");
        }
        $("#telefon").removeClass('is-valid').addClass("is-invalid");
        form.telefon.focus();
        napaka = true;
    }
    else {
        $("#telefon").removeClass('is-invalid').addClass("is-valid");
    }
    re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(!re.test(form.email.value)) {
        if(!napaka) {
            izpis = izpis.concat("email");
        }
        else {
            izpis = izpis.concat(", email");
        }
        $("#email").removeClass('is-valid').addClass("is-invalid");
        form.email.focus();
        napaka = true;
    }
    else {
        $("#email").removeClass('is-invalid').addClass("is-valid");
    }
    if (form.starost.value < 18){
        if(!napaka) {
            izpis = izpis.concat("starost");
        }
        else {
            izpis = izpis.concat(", starost");
        }
        $("#starost").removeClass('is-valid').addClass("is-invalid");
        form.starost.focus();
        napaka = true;
    }
    else {
        $("#starost").removeClass('is-invalid').addClass("is-valid");
    }
    if (form.vozniski.value.length === 0 || form.vozniski.value < 0){
        if(!napaka) {
            izpis = izpis.concat("čas trajanja vozniškega izpita");
        }
        else {
            izpis = izpis.concat(", čas trajanja vozniškega izpita");
        }
        $("#vozniski").removeClass('is-valid').addClass("is-invalid");
        form.vozniski.focus();
        napaka = true;
    }
    else {
        $("#vozniski").removeClass('is-invalid').addClass("is-valid");
    }
    if(document.getElementById("kartica").required){
        re = /^(([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4}))$/;
        //re = /^([+][0-9]{1,3}[ .\-])?([(]{1}[0-9]{1,6}[)])?([0-9 .\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/;
        if(!re.test(form.kartica.value)) {
            if(!napaka) {
                izpis = izpis.concat("številka kartice");
            }
            else {
                izpis = izpis.concat(", številka kartice");
            }
            $("#kartica").removeClass('is-valid').addClass("is-invalid");
            form.kartica.focus();
            napaka = true;
        }
        else {
            $("#kartica").removeClass('is-invalid').addClass("is-valid");
        }
    }
    if(document.getElementById("ccv").required){
        re = /^([0-9][0-9][0-9])$/;
        if(!re.test(form.ccv.value)) {
            if(!napaka) {
                izpis = izpis.concat("CCV");
            }
            else {
                izpis = izpis.concat(", CCV");
            }
            $("#ccv").removeClass('is-valid').addClass("is-invalid");
            form.ccv.focus();
            napaka = true;
        }
        else {
            $("#ccv").removeClass('is-invalid').addClass("is-valid");
        }
    }
    if(form.dt_izposoja.value.length === 0){
        $("#dt_izposoja").removeClass('is-valid').addClass("is-invalid");
        if(document.getElementById("dt_vrnitev").value.length !== 0){
            $("#dt_vrnitev").removeClass('is-invalid').addClass("is-valid");
        }
        form.dt_izposoja.focus();
        napaka = true;
    }
    else{
        var izposoja = new Date(form.dt_izposoja.value.replace(/-/g,'/').replace(/T/g, ' '));
        var danes = new Date();
        if (izposoja < danes){
            form.dt_izposoja.focus();
            napaka = true;
            $("#dt_izposoja").removeClass('is-valid').addClass("is-invalid");
        }
        else {
            $("#dt_izposoja").removeClass('is-invalid').addClass("is-valid");
        }
        var vrnitv = document.getElementById("dt_vrnitev").value;
        if(vrnitv.length !== 0){
            var v_value = new Date(vrnitv.replace(/-/g,'/').replace(/T/g, ' '));
            if (v_value < izposoja){
                form.dt_vrnitev.focus();
                napaka = true;
                $("#dt_vrnitev").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#dt_vrnitev").removeClass('is-invalid').addClass("is-valid");
            }
        }
    }
    if(form.dt_vrnitev.value.length === 0){
        $("#dt_vrnitev").removeClass('is-valid').addClass("is-invalid");
        form.dt_vrnitev.focus();
        napaka = true;
    }
    else {
        var vrnitev = new Date(form.dt_vrnitev.value.replace(/-/g,'/').replace(/T/g, ' '));
        var min = document.getElementById("dt_vrnitev").min;
        var min_val = new Date(min.replace(/-/g,'/').replace(/T/g, ' '));
        if (vrnitev < min_val){
            form.dt_vrnitev.focus();
            napaka = true;
            $("#dt_vrnitev").removeClass('is-valid').addClass("is-invalid");
        }
        else {
            $("#dt_vrnitev").removeClass('is-invalid').addClass("is-valid");
        }
    }

    if(napaka){
      //  izpis = izpis.concat(".");
      //  alert(izpis);
        return false;
    }
    else{
        narediNarocilo();
        return true;
    }
}

function preveriPolje(form_name, form_value){
    switch (form_name) {
        case "ime":
            re = /^[a-zA-ZšŠđĐžŽćĆčČ]{2,}$/;
            if(!re.test(form_value)) {
                $("#ime").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#ime").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "priimek":
            re = /^[a-zA-ZšŠđĐžŽćĆčČ]{2,}$/;
            if(!re.test(form_value)) {
                $("#priimek").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#priimek").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "ulica":
            re = /^[a-zA-ZšŠđĐžŽćĆčČ]{2,}[\sa-zA-ZšŠđĐžŽćĆčČ]*$/;
           // re = /^[a-zA-ZšŠđĐžŽćĆčČ]{2,}[\sa-zA-ZšŠđĐžŽćĆčČ]*$/;
            if(!re.test(form_value)) {
                $("#ulica").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#ulica").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "hisna_st":
            if(form_value < 1) {
                $("#hisna_st").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#hisna_st").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "mesto":
            re = /^[a-zA-ZšŠđĐžŽćĆčČ]{2,}[\sa-zA-ZšŠđĐžŽćĆčČ]*$/;
            if(!re.test(form_value)) {
                $("#mesto").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#mesto").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "posta":
            re = /^([1-9])[0-9]{3}/;
            if(!re.test(form_value)) {
                $("#posta").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#posta").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "email":
            re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if(!re.test(form_value)) {
                $("#email").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#email").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "telefon":
            re = /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/;
            if(!re.test(form_value)) {
                $("#telefon").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#telefon").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "starost":
            if (form_value < 18){
                $("#starost").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#starost").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "vozniski":
            if (form_value < 0){
                $("#vozniski").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#vozniski").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "kartica":
            re = /^(([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4}))$/;
            if(!re.test(form_value)){
                $("#kartica").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#kartica").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "ccv":
            re = /^([0-9][0-9][0-9])$/;
            if(!re.test(form_value)){
                $("#ccv").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#ccv").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "dt_izposoja":
            if(form_value.length === 0){
                $("#dt_izposoja").removeClass('is-valid').addClass("is-invalid");
                if(document.getElementById("dt_vrnitev").value.length !== 0){
                    $("#dt_vrnitev").removeClass('is-invalid').addClass("is-valid");
                }
                break;
            }
            var izposoja = new Date(form_value.replace(/-/g,'/').replace(/T/g, ' '));
            var danes = new Date();
            if (izposoja < danes){
                $("#dt_izposoja").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#dt_izposoja").removeClass('is-invalid').addClass("is-valid");
            }
            var vrnitv = document.getElementById("dt_vrnitev").value;
            if(vrnitv.length === 0){
                break;
            }
            var v_value = new Date(vrnitv.replace(/-/g,'/').replace(/T/g, ' '));
            if (v_value < izposoja){
                $("#dt_vrnitev").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#dt_vrnitev").removeClass('is-invalid').addClass("is-valid");
            }
            break;
        case "dt_vrnitev":
            if(form_value.length === 0){
                $("#dt_vrnitev").removeClass('is-valid').addClass("is-invalid");
                break;
            }
            var vrnitev = new Date(form_value.replace(/-/g,'/').replace(/T/g, ' '));
            var min = document.getElementById("dt_vrnitev").min;
            var min_val = new Date(min.replace(/-/g,'/').replace(/T/g, ' '));

            if (vrnitev < min_val){
                $("#dt_vrnitev").removeClass('is-valid').addClass("is-invalid");
            }
            else {
                $("#dt_vrnitev").removeClass('is-invalid').addClass("is-valid");
            }
            break;
    }
}

function narediNarocilo() {
    $('#narocilo').hide();
    $('#prikaz').show();
    document.getElementById("ime_priimek").innerHTML = "Ime in priimek: " + document.getElementById("ime").value + " " + document.getElementById("priimek").value;
    document.getElementById("starost_n").innerHTML = "Starost: " + document.getElementById("starost").value + " let";
    document.getElementById("izpit_n").innerHTML = "Starost izpita v letih: " + document.getElementById("vozniski").value;
    document.getElementById("email_n").innerHTML = "Email: " + document.getElementById("email").value;
    document.getElementById("tel_n").innerHTML = "Telefonska številka: " + document.getElementById("telefon").value;
    document.getElementById("naslov_n").innerHTML = "Naslov: " + document.getElementById("ulica").value + " "
        + document.getElementById("hisna_st").value + ", " + document.getElementById("posta").value + " "
        + document.getElementById("mesto").value;

    document.getElementById("izposoja_n").innerHTML = "Datum izposoje: " + document.getElementById("dt_izposoja").value.replace(/T/g, ' ');
    document.getElementById("vrnitev_n").innerHTML = "Datum vrnitve: " + document.getElementById("dt_vrnitev").value.replace(/T/g, ' ');
    document.getElementById("prevzem_n").innerHTML = "Kraj prevzema: " + document.getElementById("kraj_prevzema").value;
    document.getElementById("oddaja_n").innerHTML = "Kraj oddaje: " + document.getElementById("kraj_oddaje").value;
    document.getElementById("velikost_avta_n").innerHTML = "Velikost avta: " + document.getElementById("velikost_avta").value;
    if(document.getElementById("velikost_avta").value === "Majhen"){
        document.getElementById("izbor_avta_n").innerHTML = "Izbor avta: " + document.getElementById("majhni").value;
    }
    else if (document.getElementById("velikost_avta").value === "Srednji"){
        document.getElementById("izbor_avta_n").innerHTML = "Izbor avta: " + document.getElementById("srednji").value;
    }
    else if (document.getElementById("velikost_avta").value === "Velik"){
        document.getElementById("izbor_avta_n").innerHTML = "Izbor avta: " + document.getElementById("veliki").value;
    }
    document.getElementById("menjalnik_n").innerHTML = "Vrsta menjalnika: " + document.getElementById("vrsta_menjalnika").value;
    document.getElementById("motor_n").innerHTML = "Vrsta motorja: " + document.getElementById("vrsta_motorja").value;
    document.getElementById("zavarovanje_n").innerHTML = "Dodatno avtomobilsko zavarovanje: " + document.getElementById("zavarovanje").value;

    document.getElementById("nacin_placila_n").innerHTML = "Način plačila: " + document.getElementById("nacin_placila").value;
    if(document.getElementById("nacin_placila").value === "Kartica"){
        const st_kartice = document.getElementById("kartica").value.slice(-4);
        document.getElementById("kartica_n").hidden = false;
        document.getElementById("ccv_n").hidden = false;
        document.getElementById("kartica_n").innerHTML = "Številka kartice: xxxx-xxxx-xxxx-" + st_kartice;
        document.getElementById("ccv_n").innerHTML = "CCV: " + document.getElementById("ccv").value;
    }
    else if (document.getElementById("nacin_placila").value === "Gotovina"){
        document.getElementById("kartica_n").hidden = true;
        document.getElementById("ccv_n").hidden = true;
    }
    document.getElementById("strosek_n").innerHTML = "Strošek naročila: " + document.getElementById("znesek").innerHTML.slice(20);


}