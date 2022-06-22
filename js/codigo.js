class Famoso {
    constructor(nombre, precio,nivelDeFama,imagen){
        this.nombre= nombre 
        this.precio= precio 
        this.nivelDeFama= nivelDeFama 
        this.imagen= imagen
    }
}

const famosos= [new Famoso("Michael Jackson",70,"99%","michael.jpg"),new Famoso("Ricardo Fort",30,"57%","ricky.jpg"),new Famoso("NOBA",15,"34%","elnoba.jpg"),] 

for (let i = 0; i < famosos.length; i++) {
    const famoso = famosos[i];
    var tmp = document.createElement('div');
    let html = `
        <div class="sinbotones" >
            <img class="imagen" src="../img/${famoso.imagen}" alt=""> 
            <h2 style="text-align: center;" >${famoso.nombre}</h2>
            <div class="cardtext">
                <p class="precio">$${famoso.precio}</p> 
                <p class="porcentaje">Fama:${famoso.nivelDeFama}</p>
            </div>
            
        </div>
        <button class="button-64" >-</button> 
        <button class="button-64" >+</button> 
    `;
    tmp.innerHTML = html;
    tmp.className="gridelement"
    document.getElementById("grid").append(tmp);

}