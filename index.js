function calcular(){
    var salario = parseFloat(document.querySelector("#wage").value);
    var hora = parseFloat(document.querySelector("#hour").value);
    var soma = salario / 30 / 8 * 2;
    var result = soma * hora;
    document.getElementById("result").innerHTML = result;


document.querySelector("#calculate-button").addEventListener("click", calcular);

var text = ""
text="teste";
document.getElementById("textarea").innerText=text;
}
