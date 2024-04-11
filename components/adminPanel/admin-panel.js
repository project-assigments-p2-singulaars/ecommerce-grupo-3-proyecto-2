document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    // Envía los datos de inicio de sesión al servidor
    enviarDatos(usuario, contraseña);
});

function enviarDatos(usuario, contraseña) {
    // Aquí podrías realizar una solicitud AJAX al servidor para manejar la autenticación
    // Por simplicidad, mostraremos un mensaje de éxito directamente en la página
    if (usuario === "admin" && contraseña === "admin123") {
        document.getElementById("mensaje").innerHTML = "Inicio de sesión exitoso. Redirigiendo al panel de administrador...";
        setTimeout(function() {
            window.location.href = "panel_admin.html";
        }, 2000); // Redirige al usuario al panel de administrador después de 2 segundos
    } else {
        document.getElementById("mensaje").innerHTML = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
    }
}


