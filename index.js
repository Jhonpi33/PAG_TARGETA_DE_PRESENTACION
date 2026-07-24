document.addEventListener("DOMContentLoaded", async () => {

    let res = await axios.get("https://randomuser.me/api/");
    let user = res.data.results[0];

    document.getElementById("nombre").textContent = user.name.first;
    document.getElementById("apellido").textContent = user.name.last;
    document.getElementById("perfil").src = user.picture.large;
    document.getElementById("correo").textContent = user.email;
    document.getElementById("telefono").textContent = user.cell;
    document.getElementById("pais").textContent = user.location.country;
    document.getElementById("ciudad").textContent = user.location.city;
    document.getElementById("nacionalidad").textContent = user.nat;
    document.getElementById("edad").textContent = user.dob.age;
    document.getElementById("genero").textContent =
        user.gender === "male" ? "Masculino" : "Femenino";
    document.getElementById("estado").textContent = user.location.state;
    document.getElementById("codigopostal").textContent = user.location.postcode;

    let fecha = new Date(user.dob.date);
    let anio = fecha.getFullYear();
    let mes = String(fecha.getMonth() + 1).padStart(2, "0");
    let dia = String(fecha.getDate()).padStart(2, "0");

    document.getElementById("fechaNacimiento").textContent = `${anio}/${mes}/${dia}`;

    document.getElementById("zonahoraria").textContent = user.location.timezone.description;
    document.getElementById("offset").textContent = user.location.timezone.offset;

});