/* Se crea la clase postres */

class postres {   /* se crea el constructor de la clase con los atributos para cada postre */
    constructor(Sabor, Tamaño, Vencimiento, Color){  
        this.SaborP = Sabor;
        this.TamañoP = Tamaño;
        this.VencimientoP = Vencimiento;
        this.ColorP = Color;
    }

    /* se crean los metodos para el postre */

    preparacion () {
        console.log("Agregar los ingredientes de acuerdo a las instrucciones de la receta");
    }

    almacenamiento () {
        console.log("De acuerdo a la fecha de vencimiento se almacean dentro o fuera del refrigerador");
    }

    ventas () {
        console.log("se asigna el precio de venta de acuerdo al tamaño y los ingredientes");
    }
}

const pie = new postres ("manzana","personal","5 dias","blanco");
const tiramisu = new postres ("chocolate","mediano","7 dias","cafe");
const brownie = new postres ("chocolate","personal","3 dias","negro");
const natas = new postres ("leche","grande","4 dias","caramelo");
const flan = new postres ("queso","pequeño","10 dias","blanco");

console.log(pie.preparacion());  /* para llamar un metodo se finaliza con () */

console.log(natas.almacenamiento());

console.log(flan.ventas ());

console.log(pie.ColorP); /* para llamar atributos, solo es el objeto y el atributo  */

console.log(tiramisu.SaborP);
