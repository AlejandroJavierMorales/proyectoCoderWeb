//**************Galeria de Las Cabañas********************** */
let nro=-1;
const boton1 = document.querySelector(".btn_Siguiente");
boton1.addEventListener("click",()=>imagenSiguiente())
const boton2 = document.querySelector(".btn_Anterior");
boton2.addEventListener("click",()=>imagenAnterior())

function imagenSiguiente(){
    nro++;
    if (nro==33){
        nro=0;
    }
    document.querySelector(".imgCabanias").src=`../assets/images/galeria/complejo/cabanias${nro}.jpg`;
    document.querySelector(".imgCabanias").alt=`alt="Imagen de las Cabañas - Ecos del Valle"`
}
function imagenAnterior(){
    nro--;
    if (nro<0){
        nro=32;
    }
    document.querySelector(".imgCabanias").src=`../assets/images/galeria/complejo/cabanias${nro}.jpg`;
    document.querySelector(".imgCabanias").alt=`alt="Imagen de las Cabañas - Ecos del Valle"`

}
  
//********** galeria del Parque */
let nroP=-1;
const boton3 = document.querySelector(".btn_SiguienteP");
boton3.addEventListener("click",()=>imagenSiguienteP())
const boton4 = document.querySelector(".btn_AnteriorP");
boton4.addEventListener("click",()=>imagenAnteriorP())

function imagenSiguienteP(){
    nroP++;
    if (nroP==17){
        nroP=0;
    }
    document.querySelector(".imgParque").src=`../assets/images/galeria/complejo/parque${nroP}.jpg`;
    document.querySelector(".imgParque").alt=`alt="Imagen del Parque y Piscina - Cabañas Ecos del Valle"`
}
function imagenAnteriorP(){
    nroP--;
    if (nroP<0){
        nroP=16;
    }
    document.querySelector(".imgParque").src=`../assets/images/galeria/complejo/parque${nroP}.jpg`;
    document.querySelector(".imgParque").alt=`alt="Imagen del Parque y Piscina - Cabañas Ecos del Valle"`
    
}
//********** galeria del Rio */
let nroR=0;
const boton5 = document.querySelector(".btn_SiguienteR");
boton5.addEventListener("click",()=>imagenSiguienteR())
const boton6 = document.querySelector(".btn_AnteriorR");
boton6.addEventListener("click",()=>imagenAnteriorR())

function imagenSiguienteR(){
    nroR++;
    if (nroR==16){
        nroR=1;
    }
    document.querySelector(".imgRio").src=`../assets/images/galeria/rio/rio${nroR}.jpg`;
    document.querySelector(".imgRio").alt=`alt="Imagen del Rio Los Reartes - Cabañas Ecos del Valle"`
}
function imagenAnteriorR(){
    nroR--;
    if (nroR<=0){
        nroR=15;
    }
    document.querySelector(".imgRio").src=`../assets/images/galeria/rio/rio${nroR}.jpg`;
    document.querySelector(".imgRio").alt=`alt="Imagen del Rio Los Reartes- Cabañas Ecos del Valle"`
    
}
//********** galeria de Imágenes de Invierno */
let nroI=0;
const boton7 = document.querySelector(".btn_SiguienteI");
boton7.addEventListener("click",()=>imagenSiguienteI())
const boton8 = document.querySelector(".btn_AnteriorI");
boton8.addEventListener("click",()=>imagenAnteriorI())

function imagenSiguienteI(){
    nroI++;
    if (nroI==15){
        nroI=1;
    }
    document.querySelector(".imgInvierno").src=`../assets/images/galeria/invierno/inv${nroI}.jpg`;
    document.querySelector(".imgInvierno").alt=`alt="Imagen de Invierno - Cabañas Ecos del Valle"`
}
function imagenAnteriorI(){
    nroI--;
    if (nroI<=0){
        nroI=14;
    }
    document.querySelector(".imgInvierno").src=`../assets/images/galeria/invierno/inv${nroI}.jpg`;
    document.querySelector(".imgInvierno").alt=`alt="Imagen de Invierno - Cabañas Ecos del Valle"`
    
}
  