//Crie duas funções com call-back;
alert("Calculadora da Subtração")
let n1 = parseInt(prompt("Digite o primeiro número: "));
let n2 = parseInt(prompt("Digite o segundo número: "));

function displayer(diferenca) {
    document.getElementById("resto").innerHTML = diferenca;
}

function subtracao(x, y, callBack) {
    let resto = x - y;
    callBack(resto);
}
subtracao(n1, n2, displayer);

alert("Calculadora da Soma")
let n3 = parseInt(prompt("Digite o primeiro número: "));
let n4 = parseInt(prompt("Digite o segundo número: "));

function displayer2(total) {
    document.getElementById("total").innerHTML = total;
}

function soma(x, y, callBack) {
    let total = x + y;
    callBack(total);
}
soma(n1, n2, displayer2);

//Crie duas funções com Promises;

function fazRequisicao(){
    return new Promise ((resolve, reject) => {
	setTimeout(function(){
        resolve("Promisse resolvida");
    }, 10000);
});
}

fazRequisicao().then(document.getElementById("pro").innerHTML = "Olá mundo!");

const sucesso = true;

function someAsynFunction() {
   return new Promise((resolve, reject) => {
      if (sucesso) {
         resolve(console.log("Suceso"));     
      } else {
         reject(console.error("Erro"))
      }
   });
}

//Crie duas funções, sendo uma com async e outra com await.

function myFunction(){
    return Promise.resolve("Hello!")
}

async function myFunction(){
    return "Hello!";
}

async function myDisplayer() {
    let myPromise = new Promise(function(myResolve, myReject){
        myResolve("Mensagem!!")
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplayer();