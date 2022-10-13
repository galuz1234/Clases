/* Crear una clase */

class usuario {
    constructor(UserName, password, age, email) {
        this.User = UserName;
        this.passSave = password;
        this.userAge = age;
        this.userEmail = email;
    }

    /* Crear un método */

    saludar () {
        console.log('¡Bienvenido!')
    }
}

/* un metodo es una funcion que esta dentro de la clase al obervar el metodo saludar, 
tiene una estructura parecida a la creacion de una funcion: */
/* 
saludar () {
        console.log('¡Bienvenido!')
    }
} */

/* Instanciar una clase o crear un objeto */

const Hector = new usuario ('Hecen1980', 'qwerty@123.', '27', 'HectorBalleAzul@gmail.com');

const Natalia = new usuario ('Hecen1980', 'qwerty@123.', '27', 'HectorBalleAzul@gmail.com');

const Ofelia = new usuario ('Hecen1980', 'qwerty@123.', '27', 'HectorBalleAzul@gmail.com');



/* otra manera de crear objetos pero sobre todo para trabajar en json */
/* 
const personas =[
     Hector = {
        User: 'Hecen1980',
        passSave: 'qwerty@123.',
        userAge: '27',
        userEmail : 'HectorBalleAzul@gmail.com'
    },
Natalia ={
        User: 'Natalia',
        passSave: 'poiuy098,',
        userAge: '26',
        userEmail : 'Natali_1996@gmail.com'
    },

Ofelia ={
        User: 'Ofelia',
        passSave: 'ñljkñljsda',
        userAge: '29',
        userEmail : 'ofelia_mosquera@outlook.com'
    }
]; */

console.log(Hector.saludar());
console.log(Natalia.saludar());
console.log(Ofelia.saludar());


