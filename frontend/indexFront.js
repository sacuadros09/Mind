console.log('hola');
const apiUrl = "http://localhost:3000/usuarios"; // Ajusta la URL de la API si es necesario


function renderButton() {
    let inputHolder = document.getElementById('inputHolder');

    let reservationBtn = document.createElement('button');
    reservationBtn.className= "registerbtn"
    reservationBtn.innerText = "Continuar";
    reservationBtn.addEventListener('click', register);
    inputHolder.appendChild(reservationBtn); // Adjunta el botón al elemento inputHolder
}

async function register() {
    // Obtener los valores de los inputs
    let inputName = document.getElementById('inputName').value;
    let inputLast = document.getElementById('inputLast').value;
    let inputPassword = document.getElementById('inputPassword').value;
    let inputEmail = document.getElementById('inputEmail').value;
    let inputCode = document.getElementById('inputCode').value;
    let inputPreferencias = document.getElementById('inputPreferencias').value;


    // Validar que los campos no estén vacíos
    if (inputName == "" || inputLast == "" || inputPassword == "" || inputEmail == "" || inputCode == ""|| inputPreferencias == "") {
        alert("At least one of the inputs is empty");
        return;
    }

    let nuevoUsuario = {
        name: inputName,
        last: inputLast,
        password: inputPassword,
        email: inputEmail,
        code: inputCode,
        preferencias: inputPreferencias
    };

    try {
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoUsuario)
        });
        if (!res.ok) {
            throw new Error(`HTTP error : Status : ${res.status}`);
        }

        const resData = await res.json();
        console.log(resData); // Puedes mostrar la respuesta en la consola si lo deseas
        // Puedes realizar acciones adicionales después de la respuesta exitosa aquí
    } catch (error) {
        console.error('No se pudo postear', error);
        // Puedes manejar el error de manera adecuada aquí
    }
}

renderButton();