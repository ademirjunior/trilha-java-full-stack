const person = {
    firstName: "Zoe",
    lastName: "Almeida",
    age: 4,
    eyeColor: "brown"
}
console.log("_________Person__________");
for (let x in person) {
    console.log(person[x])
}

const car = {
    color: "black",
    type: "sedan",
    year: 2022,
    name: "Civc"
}

console.log("_________CAR__________");
console.log(Object.values(car));

const dog = {
    raca: "Vira-lata",
    name: "Caramelo",
    age: 4
}

console.log("________DOG___________");
console.log(JSON.stringify(dog));

const laptop = {
    marca: "Apple",
    memoriaRam: "18gb",
    processador: "M2",
    ano: new Date(2023,9,13)
}

const caneta = {
    marca: "Bic",
    cor: "azul",
    escreve: true
}

function Endereco (rua, num, bairro, complemento, cep) {
    this.rua = rua;
    this.num = num;
    this.bairro = bairro;
    this.complemento = complemento;
    this.cep = cep;
}

const endereco = new Endereco ("b18", 115, "Santa Maria", "Lot. Paraíuso do Sul", "49.000-000");
console.log("_________ENDERECO__________");
for (let x in endereco) {
    console.log(endereco[x])
}

function Guitarra (marca, cor, origem, ano) {
    this.marca = marca;
    this.cor = cor;
    this.origem = origem;
    this.ano = ano;
}

const guitarra = new Guitarra("Tagima", "Vermelho", "Brazil", 2018);
console.log("________GUITARRA___________");
for (let x in guitarra) {
    console.log(guitarra[x])
}