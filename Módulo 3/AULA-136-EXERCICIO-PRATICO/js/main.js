//Extraia pelo menos cinco conteúdos de cinco tags diferentes;
const h1 = document.getElementsByTagName("h1");
const p = document.getElementsByTagName("p");
const b = document.getElementsByTagName("b");
const i = document.getElementsByTagName("i");
const mark1 = document.getElementsByTagName("mark");

//Aplique pelo menos três conteúdos em tags com o INNER HTML;

document.getElementById("demo1").innerHTML = h1[0].innerHTML;
document.getElementById("demo2").innerHTML = p[0].innerHTML;
document.getElementById("demo3").innerHTML = b[0].innerHTML;
document.getElementById("demo4").innerHTML = i[0].innerHTML;
document.getElementById("demo5").innerHTML = mark1[0].innerHTML;


//Crie um validador de formulários;

function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if(x == "") {
        alert("Campo Nome deve ser preenchido!");
        return false;
    }
    let y = document.forms["myForm"]["fidade"].value;
    if(y == "") {
        alert("Campo Idade deve ser preenchido!");
        return false;
    }else if (parseInt(y) < 18){
        alert("Só para maiores de 18!");
        return false;

    }
}
//Crie dois botões com eventos.

function displayDate() {
    let data = new Date();
    let dia = data.getDay();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    document.getElementById("data").innerHTML = dia + "/" + mes + "/" + ano;
}


function mOver(obj){
    obj.innerHTML = "Texto mudou!"
}
function mOut(obj){
    obj.innerHTML = "Passe o mouse!"
}