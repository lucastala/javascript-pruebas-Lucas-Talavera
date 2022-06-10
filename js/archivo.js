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

function descuento(precio) {
  if(isNaN(precio)){
      return "El valor ingresado no es un numero";
  }else{
      return((precio*15)/100);
  }
  
} 


function preciototaldelproducto(precio, descuento){
  return (precio - descuento);
} 


let precio= prompt("ingrese el precio del producto"); 
precio = parseFloat(precio);

let valorDescuento = descuento(precio);
let preciofinal = preciototaldelproducto(precio, valorDescuento);
alert("Felicitaciones, se aplico el descuento. Precio a abonar: "+ preciofinal);
 
