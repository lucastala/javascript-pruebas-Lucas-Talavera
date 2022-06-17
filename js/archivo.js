// let ingreso = prompt(
//     "Ingresa una opción \n 1-$100 \n 2-$200  \n 3-$300 \n 4-$400 \n 5-$500"
//   );
//   if (ingreso == "salir") alert("Gracias, que tengas un buen día");
  
//   while (ingreso != "SALIR") {
//     switch (ingreso) {
//       case "1":
//         alert("acabas de donar $100, gracias por la colaboracion");
//         break;
//       case "2"
//         alert("acabas de donar $200, gracias por la colaboracion");
//         break;
//       case "3":
//         alert("acabas de donar $300, gracias por la colaboracion");
//         break;
//       case "4":
//         alert("acabas de donar $400, gracias por la colaboracion");
//         break;
//       case "5":
//         alert("acabas de donar $500, gracias por la colaboracion");
//         break;
  
//       default:
//         alert("Opción no válida");
//         break;
//     }
//     ingreso = prompt(
//         "Ingresa una opción \n 1-$100 \n 2-$200  \n 3-$300 \n 4-$400 \n 5-$500"
//     );
//     if (ingreso == "salir") alert("Gracias, que tengas un buen día");
//   }

// function descuento(precio) {
//   if(isNaN(precio)){
//       return "El valor ingresado no es un numero";
//   }else{
//       return((precio*15)/100);
//   }
  
// } 


// function preciototaldelproducto(precio, descuento){
//   return (precio - descuento);
// } 


// let precio= prompt("ingrese el precio del producto"); 
// precio = parseFloat(precio);

// let valorDescuento = descuento(precio);
// let preciofinal = preciototaldelproducto(precio, valorDescuento);
// alert("Felicitaciones, se aplico el descuento. Precio abonar: "+ preciofinal);  

function ingresarproducto() {
    let producto={}
    producto.nombre = prompt("ingrese nombre del producto") 
    producto.precio = Number(prompt("ingrese el precio del producto")) 

    return producto
}  
function carritoToString(carrito) {
    let stringproducto=""
    for (let i = 0; i < carrito.length; i++) {
        stringproducto= stringproducto + carrito[i].nombre+" $"+carrito[i].precio + "\r"
    } 
    return stringproducto
}
let nombreyApellido=prompt("ingrese su nombre y apellido") 
alert("bienvenido al marketplace " + nombreyApellido); 
let ingreso
let carrito=[] 
let preciodelcarrito=0
do  {

    ingreso=Number(prompt(
        nombreyApellido+ `\r
Para ingrersar al sistema ingrese 1\r
Para ver el monto a abonar ingrese 2\r
Si desea salir ingrese 0\r\r
Carrito:
`+ carritoToString(carrito)
    ))
    switch (ingreso) {
        case 1: 
            let producto=ingresarproducto() 
            carrito.push(producto) 
            preciodelcarrito= preciodelcarrito + producto.precio

            break;
        case 2: 
            alert(nombreyApellido+ " debe abonar " +preciodelcarrito)
            break;

        case 0:
            alert(nombreyApellido + " gracias por tu visita!") 
            break;
        
        default:
            alert(nombreyApellido + ", esa opción no esta en el menu")
            break;      
        }
         
    }    while (ingreso !=0) 
    console.log(carrito); 
    console.log(preciodelcarrito);




 
