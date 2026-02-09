document.getElementById("formLogin").addEventListener("submit", function(e){

    e.preventDefault();

    let user = document.getElementById("usuario").value.trim();
    let password = document.getElementById("contrasena").value.trim();
    let menssage = document.getElementById("mensaje");

    menssage.textContent= "";

    if (user == "admin" && password == "1234") {
        alert("Inicio de Sesión exitoso");
        window.location.href = "PaginaPrincipal.html";
    } else {
        alert("Los datos ingresados son incorrectos");
        menssage.textContent = "Los datos ingresados son incorrectos";
    }



});