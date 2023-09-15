class Computador {
    constructor(processador, memoriaRam, hd, placaVideo) {
        this.processador = processador;
        this.memoriaRam = memoriaRam;
        this.hd = hd;
        this.placaVideo = placaVideo;
    }
}

class CartaoDeCredito {
    constructor(emissora, numero, validade, ccv, ehValido) {
        this.emissora = emissora;
        this.numero = numero;
        this.validade = validade;
        this.ccv = ccv;
		this.ehValido = ehValido;
    }
	 static verificacaoDeValidade(){
		if (ehValido){
			return 'Este cartão é válido';
		} else {
			return 'Este cartão é inválido';
		}
    }
}

class Person {
    constructor(firstName, lastName, age, eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, eyeColor, schoolName) {
        super(firstName);
        super(lastName);
        super(age);
        super(eyeColor);
        this.schoolName = schoolName;
    }

    toString(){
        return 'My name is ' + this.firstName + " and I study at " + this.schoolName;
    }
}

class Vehicle {
    constructor(color, year) {
        this.color = color;
        this.year = year;
    }
}

class Car extends Vehicle {
    constructor(color, year, brand, type) {
       super(color);
       super(year);
       this.brand = brand;
       this.type = type;
    }

    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

class Animal {
    constructor(specie, gender) {
        this.specie = specie;
        this.gender = gender;
    }
}

class Dog extends Animal {
    constructor(specie, gender, age, name) {
       super(specie);
       super(gender);
       this.age = age;
       this.name = name;
    }

    toString(){
        return 'I am a dog of specie' + this.specie + ' and my gender is ' + this.gender;
    }

}


