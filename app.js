let salida= "";
let str = "";
let content="";
var mune=document.getElementById("muneco");
var mensa1=document.getElementById("mens1");
var mensa2=document.getElementById("mens2");

function encriptar() {
    salida="";
    str = document.querySelector('#textoent').value;
    let largo=str.length;

    if  (largo==0) {
        swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "DEBES INGRESAR ALGUN TEXTO PARA ENCRIPTAR!"
        });

        document.getElementById('mensaje').value = "";
        mune.style.zIndex=1;
        mensa1.style.zIndex=1;
        mensa2.style.zIndex=1;
        return;
    }

    mune.style.zIndex=0;
    mensa1.style.zIndex=0;
    mensa2.style.zIndex=0;

    for (let i = 0; i < largo; i++) {
        
        let cambio = "";

        sale=str[i];

        if (sale == "a") {
            cambio = "ai";
            salida = salida+cambio;
        } else if (sale =="e"){
            cambio ="enter";
            salida = salida+cambio;
        } else if (sale =="i"){
            cambio ="imes";
            salida = salida+cambio;
        } else if (sale == "o"){
            cambio = "ober";
            salida = salida+cambio;
        } else if (sale == "u"){
            cambio = "ufat";
            salida = salida+cambio;
        }else {
            salida = salida+sale;
        }
    }
    
    document.getElementById('mensaje').value = salida;
return;
}

function desencriptar() {
    
    salida="";
    str = document.querySelector('#textoent').value;
    let largo=str.length;

    console.log(largo);

    if  (largo==0) {
        swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "DEBES PONER UN TEXTO PARA SER DESENCRIPTADO!"
        });
        document.getElementById('mensaje').value = "";
        mune.style.zIndex=1;
        mensa1.style.zIndex=1;
        mensa2.style.zIndex=1;
        return
    }

    mune.style.zIndex=0;
    mensa1.style.zIndex=0;
    mensa2.style.zIndex=0;

    for (let i = 0; i < largo; i++) {

        let cambio = "";

        sale=str[i];

        if (sale == "a") {

            i++;
            sale=sale + str[i];

            if (sale=="ai"){
                sale="a";

                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "e"){
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];

            if (sale=="enter"){
                sale="e";

                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "i"){
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];

            if (sale=="imes"){
                sale="i";

                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "o"){
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];

            if (sale=="ober"){
                sale="o";

                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "u"){
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];

            if (sale=="ufat"){
                sale="u";

                salida=salida+sale;
            }
            salida=salida+cambio;

        }else{
            salida=salida+sale;
        }
    }

    document.getElementById('mensaje').value = salida;
    return;
}

function copiando(){
    var content = document.getElementById('mensaje');
    content.select();
    document.execCommand('copy');
    swal.fire({
        title: "Bien hecho!",
        text: "Texto Copiado!",
        icon: "success"
    });
    document.getElementById("mensaje").value ="";
    document.getElementById("textoent").value="";
    mune.style.zIndex=1;
    mensa1.style.zIndex=1;
    mensa2.style.zIndex=1;
    return; 
}

function limpiando(){
    document.getElementById("mensaje").value ="";
    document.getElementById("textoent").value="";
    mune.style.zIndex=1;
    mensa1.style.zIndex=1;
    mensa2.style.zIndex=1;
    return;
}