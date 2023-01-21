document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario_contacto").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento){
    evento.preventDefault();
    valor = document.getElementById("nombre").value; 
    if ( valor == null || valor.length == 0) { 
        alert('[ERROR] El Nombre es Incorrecto...');
        return; 
    }
    valor = document.getElementById("pasajeros").value;
    if ( valor == null || valor.length == 0 || isNaN(valor)) { 
        alert('[ERROR] El valor  del campo Pasajeros en Incorrecto...'); 
        return; 
    }
    valor = document.getElementById("email").value;
    if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor))){
          
        alert('[ERROR] La Dirección de Email es Incorrecta...'); 
        return; 
    } 
    this.submit();
    //alert('Su Correo se ha enviado Correctamente!!! a la brevedad estaremos respondiendo, Muchas Gracias!');
    //window.location.href = "https://cabanasecosdelvalle.com.ar/contacto.html";
}
   
   
   /*function form_validation() {
        console.log("hola")
}
 valor = document.getElementById("nombre").value; 
    if ( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) { 
        // Si esta comprobación no se cumple... 
        console.log(valor)
        alert('[ERROR] El campo Nombre del formulario no puede estar vacío...');
        return false; 
    } 
    valor = document.getElementById("pasajeros").value;
    if ( valor == null || valor.length == 0 || /^\s+$/.test(valor) || isNaN(valor)) { 
        // Si esta comprobación no se cumple... 
        alert('[ERROR] El campo Pasajeros debe ser un valor numérico...'); 
        return false; 
    }
    valor = document.getElementById("email").value;
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) { 
        // Si esta comprobación no se cumple... 
        alert('[ERROR] La Dirección de Email es Incorrecta...'); 
        return false; 
    }//etc 
    // Si esta comprobación se encuentra correcta se procederá a ejecutar el envío de formulario al servidor 
    // La validación del formulario es correcta retornamos el valor true 
    return true;}
*/
/*
//Validacion Campo Email
valor = document.getElementById("campo").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
    return false;
}
//Validar un campo Oligatorio
valor = document.getElementById("campo").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    return false;
}
//Validar campos de texto que requiere valores numericos
valor = document.getElementById("campo").value;
if( isNaN(valor) ) { 
    return false;
}
//Este ejemplo fuerza a que el usuario seleccione un elemento de una lista desplegable:
indice = document.getElementById("opc").selectedIndex;
if( indice == null || indice == 0 ) { 
    return false;
}
//Validar una Fecha
valor = document.getElementById("campo").value;
if ( !(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/.test(valor))) {
     return false;
}

//Validar un Numero de Telefono
//Una vez más, la condición de JavaScript se basa en el uso de expresiones regulares (regex), 
//que comprueban si el valor indicado es una sucesión de diez números consecutivos
valor = document.getElementById("campo").value;
if( !(/^\d{10}$/.test(valor)) ) {
    return false;
}
//Validar un CheckBox
elemento = document.getElementById("campo");
if( !elemento.checked ) { 
    return false;
}
//Validar mas de un checkbox
form = document.getElementById("form");
for(var i=0; i<form.elements.length; i++) {
    var elemento = form.elements[i]; 
    if(elemento.type == "checkbox") { 
        if(!elemento.checked) {
            return false; 
        } 
    }
}
*/