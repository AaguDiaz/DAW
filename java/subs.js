var form = document.getElementById("susformulario");
var nombreinput = document.getElementById('nombre');
var emailinput = document.getElementById('email');
var passwordinput = document.getElementById('password');
var edadinput = document.getElementById('edad');
var telefonoinput = document.getElementById('telefono');
var direccioninput = document.getElementById('direccion');
var ciudadinput = document.getElementById('ciudad');
var cpinput = document.getElementById('codpostal');
var dniinput = document.getElementById('DNI');


nombreinput.addEventListener('blur', handleBlur);
function validarnombre(){
    var nombre = nombreinput.value.trim();
    var nomerror = document.getElementById('nomerror');

    if(nombre.length < 6){
        nomerror.textContent = ('El campo nombre y apellido debe ser mayor a 6 caracteres');
        nomerror.style.color = 'red';
        return false;
    }else if(!nombre.includes(' ')){
        nomerror.textContent = ('El campo debe contener nombre y apellido.');
        nomerror.style.color = 'red';
        return false;
    }else{
        nomerror.textContent = ('');
        return true;
    }
}

nombreinput.addEventListener('input', function(e) {
    var nombre = e.target.value; 
    var tituloFormulario = document.getElementById('h2sus'); 

    
    if (nombre.includes(' ')) {
        var nombres = nombre.split(' ')[0]; 
        var apellido = nombre.split(' ')[1]; 


        var titulo = 'Hola ' + nombres.toUpperCase() + ' ' + apellido.toUpperCase();
        tituloFormulario.textContent = titulo; 
    }
});

nombreinput.addEventListener('focus', 
function(){
    document.getElementById('nomerror').textContent = '';

    var tituloFormulario = document.getElementById('h2sus');

    tituloFormulario.textContent = '';
});

emailinput.addEventListener('blur', handleBlur);

function validaremail(){
    var email = emailinput.value.trim();
    var emailerror = document.getElementById('emailerror');

    if(!email.includes('@') || email.length < 0 || !email.includes('.com')){
        emailerror.textContent = ('El campo email debe contener un formato de mail valido.');
        emailerror.style.color = 'red';
        return false;
    }else{
        emailerror.textContent = ('');
        return true;
    }
}

emailinput.addEventListener('focus',
function(){
    document.getElementById('emailerror').textContent = '';
});

passwordinput.addEventListener('blur',handleBlur);
function validarpassword(){
    var password = passwordinput.value.trim();
    var passerror = document.getElementById('passerror');
    var regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

    if(password.length < 8 || !regex.test(password)){
        passerror.textContent = ('El campo password debe ser mayor a 8 caracteres y contener al menos un numero y letra.');
        passerror.style.color = 'red';
        return false;
    }else{
        passerror.textContent = ('');
        return true;
    }
}

passwordinput.addEventListener('focus',
function(){
    document.getElementById('passerror').textContent = '';
});

edadinput.addEventListener('blur',handleBlur );
function validaredad(){
    var edad = edadinput.value.trim();
    var edaderror = document.getElementById('edaderror');

    if(edad <= 18){
        edaderror.textContent = ('Debes ser mayor de 18 años.');
        edaderror.style.color = 'red';
        return false;
    }else{
        edaderror.textContent = ('');
        return true;
    }
}

edadinput.addEventListener('focus',
function(){
    document.getElementById('edaderror').textContent = '';
});

telefonoinput.addEventListener('blur', handleBlur);

function validartelefono(){
    var telefono = telefonoinput.value.trim();
    var telerror = document.getElementById('telerror');
    var regex = /^[0-9]{10}$/;

    if(telefono.length < 7 || !regex.test(telefono) ){
        telerror.textContent = ('El campo telefono debe contener 7 digitos.');
        telerror.style.color = 'red';
        return false;
    }else if(telefono.includes(' ')|| telefono.includes('-') || telefono.includes('(') || telefono.includes(')')){
        telerror.textContent = ('El campo telefono no debe contener espacios, guiones o parentesis.');
        telerror.style.color = 'red';
        return false;
    }else{
        telerror.textContent = ('');
        return true;
    }
}
telefonoinput.addEventListener('focus',
function(){
    document.getElementById('telerror').textContent = '';
});

direccioninput.addEventListener('blur',handleBlur);
function validardireccion(){
    var direccion = direccioninput.value.trim();
    var direerror = document.getElementById('direerror');
    var regex = /^(?=.*\d)[a-zA-Z0-9 ]{5,}$/;

    if(direccion.length < 5 || !regex.test(direccion) || !direccion.includes(' ')){
        direerror.textContent = ('El campo direccion debe ser mayor a 5 caracteres, letras, números y un espacio en el medio.');
        direerror.style.color = 'red';
        return false;
    }
    else{
        direerror.textContent = ('');
        return true;
    }
}

direccioninput.addEventListener('focus',
function(){
    document.getElementById('direerror').textContent = '';
});

ciudadinput.addEventListener('blur', handleBlur );
function validarciudad(){
    var ciudad = ciudadinput.value.trim();
    var ciuerror = document.getElementById('ciudaderror');

    if(ciudad.length < 3 ){
        ciuerror.textContent = ('El campo ciudad debe ser mayor a 3 caracteres.');
        ciuerror.style.color = 'red';
        return false;
    }else{
        ciuerror.textContent = ('');
        return true;
    }
}

ciudadinput.addEventListener('focus',
function(){
    document.getElementById('ciudaderror').textContent = '';
});

cpinput.addEventListener('blur', handleBlur);
function validarcodpostal(){
    var cp = cpinput.value.trim();
    var cperror = document.getElementById('cperror');
    var regex = /^[0-9]{4}$/;

    if(cp.length < 3 || !regex.test(cp)){
        cperror.textContent = ('El campo codigo postal debe contener al menos 3 caracteres.');
        cperror.style.color = 'red';
        return false;
    }else{
        cperror.textContent = ('');
        return  true;
    }
}

cpinput.addEventListener('focus',
function(){
    document.getElementById('cperror').textContent = '';
});

dniinput.addEventListener('blur', handleBlur);
function validardni(){
    var dni = dniinput.value.trim();
    var dnierror = document.getElementById('dnierror');
    var regex = /^[0-9]{8}$/;

    if(dni.length < 8 || !regex.test(dni)){
        dnierror.textContent = ('El campo DNI debe contener 8 digitos.');
        dnierror.style.color = 'red';
        return false;
    }else{
        dnierror.textContent = ('');
        return true;
    }
}

dniinput.addEventListener('focus',
function(){
    document.getElementById('dnierror').textContent = '';
});

function handleBlur(event) {
    var input = event.target;
    switch (input.id) {
        case "nombre":
            validarnombre();
            break;
        case "email":
            validaremail();
            break;
        case "password":
            validarpassword();
            break;
        case "edad":
            validaredad();
            break;
        case "telefono":
            validartelefono();
            break;
        case "direccion":
            validardireccion();
            break;
        case "ciudad":
            validarciudad();
            break;
        case "codpostal":
            validarcodpostal();
            break;
        case "DNI":
            validardni();
            break;
    }
}

form.addEventListener('submit',
function(e){
    e.preventDefault();
   
    var errores = false;
    if(!validarnombre()){
        errores = true;
    }else if(!validaremail()){
        errores = true;
    }else if(!validarpassword()){
        errores = true;
    }else if(!validaredad()){
        errores = true;
    }else if(!validartelefono()){
        errores = true;
    }else if(!validardireccion()){
        errores = true;
    }else if(!validarciudad()){
        errores = true;
    }else if(!validarcodpostal()){
        errores = true;
    }else if(!validardni()){
        errores = true;
    }

    if(!errores){
        var datos = {
            Informacion: 'Datos cargados correctamente',
            nombre: nombreinput.value.trim(),
            email: emailinput.value.trim(),
            edad: edadinput.value.trim(),
            telefono: telefonoinput.value.trim(),
            direccion: direccioninput.value.trim(),
            ciudad: ciudadinput.value.trim(),
            cp: cpinput.value.trim(),
            dni: dniinput.value.trim()
        };
        var mensaje = '';
        for (var key in datos) {
            if (datos.hasOwnProperty(key)) {
                mensaje += key + ': ' + datos[key] + '\n';
            }
        }
        window.alert(mensaje);
    }else{
        window.alert("Datos incorrectos, por favor revisar los campos.");
    }

});
