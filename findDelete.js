// js dedicado a busquedas y admin de BaseDatos clientes //


const clientes = [
    {id: 0, nombre: 'juan',apellido: 'perez',telefono: 15638402},
    {id: 1, nombre: 'marcelo',apellido: 'ortt',telefono: 15445522},
    {id: 2, nombre: 'marisa',apellido: 'lut',telefono: 15885566},
    {id: 3, nombre: 'valeria',apellido: 'fasbender',telefono: 15626232},
]


// ALERT DE BIENVENIDA ADMIN //
alert("! BIENVENDIO AL PANEL DE CLIENTES !\nPodras aqui manipular la base de datos de los clientes \n \n! Segui las instrucciones ! ");

let opcionDebusqueda = prompt (`¿ QUE DATOS DISPONES PARA TU BUSQUEDA ?\n\nA: si tenes ID de cliente\nB: si tenes NOMBRE de cliente`);

if(opcionDebusqueda != ""){

    if((opcionDebusqueda.toLowerCase()=="a")||(opcionDebusqueda.toLowerCase()=="b")){

        switch(opcionDebusqueda){

            case "a":
                let idingresado = prompt (`ingresa el ID\nTe daremos los datos que buscas`);
                if(idingresado != ""){

                    let resultado = clientes.find((idingresado) => idingresado.id === "idingresado");
                    console.log(resultado);
                }
                alert("! ID NO HALLADO EN BASE DE DATOS !");
            break
            case "b":
                let nombreingresado = prompt (`ingresa el NOMBRE\nTe daremos los datos que buscas`);
                if(nombreingresado != ""){

                    let resultado = clientes.find((nombreingresado) => nombreingresado.nombre === "nombreingresado");
                    console.log(resultado);
                }
                alert("! NOMBRE NO HALLADO EN BASE DE DATOS !");
            break
            default:
            alert("! DEBES INGRESAR UNA MEDIDA DE RODADO 13 VALIDA !")
        }

    }else {
        console.log(" ! ATENCION !\ningresaste una OPCION no VALIDA\n!volve a intentarlo!\ngracias... ");
    }
}
console.log(" ! ATENCION !\ningresaste una OPCION no VALIDA\n!volve a intentarlo!\ngracias... ");






//const resultado = clientes.find((datoIngresado) => datoIngresado.nombre === "valeria")
//const resultado2 = clientes.find((datoIngresado) => datoIngresado.nombre === "joaquin")


//console.log(resultado)
//console.log(resultado2)