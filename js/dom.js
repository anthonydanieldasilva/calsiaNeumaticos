// Modificando saludo inicial //
// watch in the consol //

let titulo = document.getElementById("saludo1");
console.log(titulo.innerText);
titulo.innerText = "Saludos coordiales estimados clientes";
console.log(titulo.innerText);

// modificando html from js //
// watch on Liveserver //

let subitulo = document.getElementById("saludo2");
subitulo.innerHTML = "<h1>Este es nuestro sitio oficial</h1>";

let tituloMod = document.getElementById("saludo1");
tituloMod.innerHTML = "<h1>Saludos clientes</h1>";

// class insert //
// watch on Elements //

let agregoClass = document.getElementById("Cajaintrocuccion");
agregoClass.className = "estiloCajaintrocuccion";
 
// append on html //

let agregolista = document.createElement("ul");
agregolista.innerHTML = "<li>Reconstruccion de Pickup</li> <li>Reconstruccion de Automoviles</li> <li>Reconstruccion de Cuatriciclos</li>";
document.body.append(agregolista);

// get value fron input //
// watch on console //

let nombreusuario = document.getElementById("usuarioNombre").value;
let telefonousuario = document.getElementById("usuarioTel").value;

console.log(nombreusuario);
console.log(telefonousuario);

// modificando input html frm js //

document.getElementById("usuarioNombre").value = "daniel";
document.getElementById("usuarioTel").value = 4268858;

// dom practice white array elements
// watch on console //
let muestrodiseños = document.getElementById("diseñosDisponibles");
let diseñosDisponibles = ["VP400", "VP410", "VJ900", "V159"];

for (const mostrar of diseñosDisponibles){
    console.log(mostrar);
}
   


