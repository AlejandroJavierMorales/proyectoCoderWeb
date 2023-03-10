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
}

