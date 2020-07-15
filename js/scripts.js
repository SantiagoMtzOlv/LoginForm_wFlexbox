// validar formulario

const inputs = document.querySelectorAll('form .campo input');

//Listener a los inputs
inputs.forEach(input =>{
    input.addEventListener('blur', validarInput);
})
inputs.forEach(input =>{
    input.addEventListener('input', validarInput);
})

function validarInput(e){
    const estados = ['valido', 'no-valido'];

    let clase;
    if(e.target.value.length === 0){
        clase = estados[1];
    }
    else{
        clase = estados[0];
    }
    e.target.classList.remove(...estados);
    e.target.nextElementSibling.classList.remove(...estados);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //inyectar dinamicamente el div de error

    if (clase === 'no-valido') {
        //mostrar mensaje de error
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    }
    else{
        //limpiar mensaje de error si es que existe
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

//Mostrar y Ocultar Password
const showPass = document.querySelector('form .campo span');
showPass.addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');

    if (e.target.classList.contains('mostrar')) {
        //mostar el texto
        e.target.classList.remove('mostrar');

        e.target.textContent = 'Ocultar';

        passwordInput.type = 'text';
    }
    else{
        e.target.classList.add('mostrar');
        //cambiar el texto
        e.target.textContent = 'Mostrar';
        //Cambiamos a password
        passwordInput.type = 'password';
    }
})