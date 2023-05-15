const altura = "40px";

let cuerpo ;

let fichaSelecionada;
let origen;
let destino;

function crearDiv(){
    let caja = document.createElement("div");
    return caja
}
/* funciones para evento click */
function click1 (){
    cuadro1.elegido = !cuadro1.elegido;
    click(cuadro1);
}
function click2 (){
    cuadro2.elegido = !cuadro2.elegido;
    click(cuadro2);
}
function click3 (){
    cuadro3.elegido = !cuadro3.elegido;
    click(cuadro3);
}

function click(cuadro){
    if(cuadro.elegido){

    }else{

    }
    //(cuadro.elegido)?: 
}

/* este crea el cuadros en los que se juega */
function Cuadro(cIni){
    this.caja = crearDiv();
    this.caja.style.width = "28%";
    this.caja.style.height = altura;
    this.caja.style.height = "200px";
    this.caja.style.marginLeft = "4%";
    this.caja.style.borderWidth = "2%";
    this.caja.style.border = "solid black";
    this.caja.style.float= "left";
    this.elegido = false;
    this.contenido;
    (cIni)?this.contenido = rellenarFichas() : this.contenido = rellenarContenido();
    for(let i =0;i < this.contenido.length; i++){
        this.caja.appendChild(this.contenido[i].caja);
    }
    this.tieneFichas = function (){
        let rellenos = 0;
        for(let i = 0; i < this.contenido.length;i++){
            if(this.contenido[i] instanceof Relleno){
                rellenos++;
            }
        }
        if(rellenos === this.contenido.length){
            return false;
        } else {
            return true;
        }
    };
}

let cuadro1 = new Cuadro(true);
let cuadro2 = new Cuadro(false);
let cuadro3 = new Cuadro(false);



function rellenarContenido(){
    let contenido = new Array();
    for(let i = 0; i < 5; i++) {
        contenido[i] = new Relleno();
    }
    return contenido
}

function rellenarFichas(){
    let contenido = new Array();
    contenido[0] = new Relleno();
    contenido[1] = new FichaS();
    contenido[2] = new FichaM();
    contenido[3] = new FichaL();
    contenido[4] = new FichaXL();

    return contenido;
}

function FichaS(){
    this.caja = crearDiv();
    this.caja.style.width = "10%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#324";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto"
}
function FichaM(){
    this.caja = crearDiv();
    this.caja.style.width = "30%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#6666";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
}
function FichaL(){
    this.caja = crearDiv();
    this.caja.style.width = "50%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#777";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto"
}
function FichaXL(){
    this.caja = crearDiv();
    this.caja.style.width = "70%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#821";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto"
}
function Relleno(){
    this.caja = crearDiv();
    this.caja.style.width = "100%";
    this.caja.style.height = altura;
}


function iniciar(){
    cuerpo = document.getElementsByTagName("body")[0];
    cuerpo.appendChild(cuadro1.caja);
    cuerpo.appendChild(cuadro2.caja);
    cuerpo.appendChild(cuadro3.caja);
}
/* for para poner los aventos a las cajas */

let cuadros = [cuadro1.caja,cuadro2.caja,cuadro3.caja];
for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].addEventListener("mouseenter", ()=>{
        cuadros[i].style.backgroundColor = "beige";
    })
    cuadros[i].addEventListener("mouseleave", ()=>{
        cuadros[i].style.backgroundColor = "white";
    })
}
/* eventos para la seleccion del los divs */

cuadro1.caja.addEventListener("click",click1,false);
cuadro2.caja.addEventListener("click",click2,false);
cuadro3.caja.addEventListener("click",click3,false);


export default{
    iniciar
}