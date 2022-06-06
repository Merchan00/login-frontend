const email = document.getElementById('email');
const pass = document.getElementById('password');
const form = document.getElementById('form');
const warning = document.getElementById('warnings');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    warning.innerHTML = ""; 

    if(!regexEmail.test(email.value)){
        warnings += `Email inválido<br>`;
        entrar = true
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Email inválido',
            showConfirmButton: true,
            timer: 1500

        })
    }
    
    if(pass.value.length < 4) {
        warnings += `Password must be at least 4 characters long <br>`;
        entrar = true

    } else if(pass.value.length > 60) {
        warnings += `Email must be less than 60 characters long <br>`;
        entrar = true   
    }
    if(entrar){
        warning.innerHTML = warnings;
    }
})

if((email = 'pruebacoex@coex.com.co') && (pass == 123456)){
    alert("Bienvenido");
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ingreso satisfactorio',
        showConfirmButton: true,
        timer: 1500
      })

}

