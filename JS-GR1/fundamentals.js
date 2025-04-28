//VARIABLES
//Contenedor de información 

// ES6 
//  let - const 
//  no se va a utilizar var por el hoisting 
var CI = 123 //no cambia 
let sueld0 = 500 //cambia 

//Tipos de datos - Primitivos 
let numOrden=127  //INT
let modulo="Mis ordeneres" //string
let status= true //boolean
let tipoPago='E' //char
let precioFinal=155.99 //float
let sueldo  // Undefined 

// Tipos de datos - Compuestos 
let ordenes = ["Balon", "Camiseta", "Zapato"] //Array
let detallerOrden = {  //Objeto 
    id:1,
    estado:true,
    precio:150.99,
    items:["Pc", "Monitos", "Teclado"]
}

//EN JSON LAS CLAVES VIENEN CON COMILLAS DOBLES Y UN OBJETO NO VIENE CON COMILLAS DOBLES EN LAS CLAVES 

console.log(ordenes)

//sniper toca poner log y seleccionar el cuadrado y enter 


//Strigs 
let nombreCompleto = "Sebastian Betancourt"
nombreCompleto.length //propiedad  (Cuenta las letras )
nombreCompleto.toUpperCase() //metodo (convertir a minuculas o mayousculas )
nombreCompleto.toLocaleLowerCase() //metodo (convertir a minuculas o mayousculas )  
nombreCompleto.trim() //remover los espacios en blanco 
nombreCompleto.includes("Sebas") //si esq incluye el valor que se coloca por ejemplo Sebas


//Caracterisitica nueva de ES6 - Template strings
//forma antigua 
console.log("Hola "+ nombreCompleto);
//forma nueva
console.log(`Hola ${nombreCompleto}`);

//Numbers
 let cuotas = "36" //como convertir ese 36 de string a entero (SE PONE EL + ANTES DEL STRING ESO SERIA CASTING)
 //ES6
console.log(+cuotas+1);

//
console.log(4 * 3 ** 2);



//BooLeans
let saldoCuenta = 1000
let saldoTrajeta = "1000"
//Comparacion del valor
console.log(saldoCuenta==saldoTrajeta);

//ES6 - Comparacion dle valor y tipo "comparacion estricta"
console.log(saldoCuenta===saldoTrajeta);


//Condicionales 
let carritoCompras =[]
if (carritoCompras.length ===0){
    console.log("Carrio Vacio");
}
else{
    console.log("Carrito lleno");
    
}

//ES6 - operador ternario
carritoCompras.length === 0 ? console.log("Carrit vacio") : console.log("Carrito lleno");

//Funciones - bloque de codigo reutilizable

//tipo de funcones 
// EXPRESADA O DECLARATIVA

//Función declarada 
function validadUsuario (){
    console.log("Usuario validado")
}

// Función expresada 
const validadRol = function(){
    console.log("Rol validado")
}

//ES6  - función de flecha 
const validarMail = () =>{
    console.log("Main Validado")
}