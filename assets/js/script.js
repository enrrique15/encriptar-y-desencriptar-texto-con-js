const formato = /[`!@#$%^&*()_+\-=\[\]{}áéíóú;':"\\|,.<>\/?~]/;
function encriptar() {
    let text = document.getElementById("text").value;
    let textlower = text.toLowerCase()
    if (text != "" && text === textlower && !formato.test(text)) {
        let result = text.replace(/a|e|i|o|u/gi, function (parametro) {
            if (parametro == "a") return parametro.replace("a", "ai");
            if (parametro == "e") return parametro.replace("e", "enter");
            if (parametro == "i") return parametro.replace("i", "imes");
            if (parametro == "o") return parametro.replace("o", "ober");
            if (parametro == "u") return parametro.replace("u", "ufat");
        });
        document.getElementById("result").innerHTML = result;
    }
    else {
        document.getElementById("result").innerHTML = "Solo se aceptan letras en minuscula sin caracteres especiales tampoco acentos";
    }



}
function desencriptar() {
    let text = document.getElementById("text").value;
    let textlower = text.toLowerCase()
    if (text != "" && text === textlower && !formato.test(text)) {
        let result = text.replace(/ai|enter|imes|ober|ufat/gi, function (parametro) {
            if (parametro == "ai") return parametro.replace("ai", "a");
            if (parametro == "enter") return parametro.replace("enter", "e");
            if (parametro == "imes") return parametro.replace("imes", "i");
            if (parametro == "ober") return parametro.replace("ober", "o");
            if (parametro == "ufat") return parametro.replace("ufat", "u");
        });
        document.getElementById("result").innerHTML = result;
    }
    else {
        document.getElementById("result").innerHTML = "Solo se aceptan letras en minuscula sin caracteres especiales tampoco acentos";
    }
}
function copiar(params) {

}
