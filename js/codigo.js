
class Famoso {
    constructor(nombre, precio,nivelDeFama,imagen){
        this.nombre= nombre 
        this.precio= precio 
        this.nivelDeFama= nivelDeFama 
        this.imagen= imagen
    }
}


function crearGridDeFamosos(listaDeFamosos) { 
    document.getElementById("contenedorDeFamosos").innerHTML = ''
    for (let i = 0; i < listaDeFamosos.length; i++) {
        const famoso = listaDeFamosos[i];
        var tmp = document.createElement('div');
        let html = `
        <div class="sinbotones" > 
        <img class="imagen" src="../img/${famoso.imagen}" alt=""> 
        <h2 style="text-align: center;" >${famoso.nombre}</h2>
        <div class="cardtext">
        <p class="precio">$ ${famoso.precio}</p> 
        <p class="porcentaje">Fama: ${famoso.nivelDeFama}</p>
        </div>
        
        </div> 
        <div div>
        <div class= "divbuttoncard">
        <button class="buttoncard" >-</button> 
        <button class="buttoncard" >+</button> 
        </div>
        `;
        tmp.innerHTML = html;
        tmp.className="gridelement"
        document.getElementById("contenedorDeFamosos").append(tmp);
    }
} 

function buscar() {
    let valorInput = document.getElementById("buscador").value
    let famososAceptados =famosos.filter((famoso)=>(famoso.nombre.toLowerCase().includes(valorInput.toLowerCase()))) 
    crearGridDeFamosos(famososAceptados)
}  

let boton = document.getElementById("cargadorDeProductos")
function respuestaclick() { 
    window.open("../paginas/popup.html")
}
boton.addEventListener("click", respuestaclick) 

const famosos= [new Famoso("Michael Jackson",70,"99%","michael.jpg"),new Famoso("Ricardo Fort",30,"57%","ricky.jpg"),new Famoso("NOBA",15,"34%","elnoba.jpg"),] 
crearGridDeFamosos(famosos) 


