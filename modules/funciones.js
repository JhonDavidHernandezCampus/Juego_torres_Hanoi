const altura = "40px";

let cuerpo ;

function crearDiv(){
    let caja = document.createElement("div");
    return caja
}

/* este crea el cuadros en los que se juega */
function Cuadro(){
    this.caja = crearDiv();
    this.caja.style.width = "28%";
    this.caja.style.height = altura;
    this.caja.style.height = "200px";
    this.caja.style.marginLeft = "4%";
    this.caja.style.borderWidth = "2%";
    this.caja.style.border = "solid black";
    this.caja.style.float= "left";
}

function FichaS(){
    this.caja = crearDiv();
    this.caja.style.width = "10%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "red";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto  "
}
function FichaM(){
    this.caja = crearDiv();
    this.caja.style.width = "30%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "blue";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
}
function FichaL(){
    this.caja = crearDiv();
    this.caja.style.width = "50%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "yelow";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto  "
}
function FichaXL(){
    this.caja = crearDiv();
    this.caja.style.width = "70%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "black";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto  "
}

function Relleno(){
    this.caja = crearDiv();
    this.caja.style.width = "100%";
    this.caja.style.height = altura;
}

let cuadro1 = new Cuadro();
let cuadro2 = new Cuadro();
let cuadro3 = new Cuadro();

function iniciar(){
    cuerpo = document.getElementsByTagName("body")[0];
    cuerpo.appendChild(cuadro1.caja);
    cuerpo.appendChild(cuadro2.caja);
    cuerpo.appendChild(cuadro3.caja);
}

export default{
    iniciar
}