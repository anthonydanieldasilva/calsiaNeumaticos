/**
 * Primera entrega Proyecto Final
 * JavaScript / coderHouse / 2022
 * 
 * Dicatado academico: Silma Natera
 * Tutoria : Jonathan Romero
 * 
 * Contenido de script:
 * ·Manejo integro de Panel clientes
 * ·conecta con bd datos.js para Mostrar diseños en stock
 * ·Usa funcion Fetch para Informar novedades posibles
 *
 * @version: v1.0.0
 * @author: Anthony da Silva
 *
 * History:
 *- v1.0.0 – 
 *  
 */

//AGREGAR NUEVOS CLIENTES A STORAGE//

document.getElementById("agregar").addEventListener("click",function(){
    let clave = document.getElementById("clave").value;
    let valor = document.getElementById("valor").value;

    if(clave !== ""){
        if(localStorage.getItem(clave)){
            document.getElementById("mensaje").innerText ="CLAVE EDITADA CON EXITO"
        }else{
            document.getElementById("mensaje").innerText ="CLAVE REGISTRADA EN STORAGE"
        }
        localStorage.setItem(clave,valor)
    }else{
        document.getElementById("mensaje").innerText ="NO HA INGRESADO UNA CLAVE"
    }

})

//ELIMINA CLIENTES POR CLAVE//

document.getElementById("eliminar").addEventListener("click",function(){
    let clave = document.getElementById("clave").value;

    if(localStorage.getItem(clave)){
        localStorage.removeItem(clave);
        document.getElementById("mensaje").innerText = "CLIENTE BORRADO CON EXITO";
    }else{
        document.getElementById("mensaje").innerText = "CLAVE NO HALLADA";
    }
    
})

//LIMPIA CLIENTES DE STORAGE//

document.getElementById("limpiar").addEventListener("click",function(){
    localStorage.clear();
    document.getElementById("datos").innerHTML = "";
    document.getElementById("mensaje").innerText = "! STORAGE LIMPIO !";
})

//MOSTRAR CLIENTES DE STORAGE//

document.getElementById("mostrar").addEventListener("click",function(){
    let muestradatos = document.getElementById("datos");
    let tabla = document.createElement("table");

    for(let index = 0; index<localStorage.length; index++){
        let clave = localStorage.key(index);
        let fila = document.createElement("tr");
        fila.innerHTML = `<td> ${clave} </td>
                            <td> ${localStorage.getItem(clave)} </td>`;
        tabla.append(fila);
        muestradatos.append(tabla);

    }
})

// MOSTRANDO DISEÑOS //

let listado = document.getElementById("listado");

const muestra_listadoDiseños = () => {
    let listado_diseños = JSON.parse(localStorage.getItem("diseños"));

    for(index=0; index < listado_diseños.length; index++){
        let div = document.createElement("div");
        div.className = "col-md-4";
        div.innerHTML = `<h2>${listado_diseños[index].diseño}</h2>
                            <p><img src="imagenes/${listado_diseños[index].imagen}"></p>`
        listado.append(div);                    
    }
} 

if(localStorage.getItem("diseños")){
    muestra_listadoDiseños();
}else{
    localStorage.setItem("diseños", JSON.stringify(diseños));
    muestra_listadoDiseños();
}

// END MOSTRANDO DISEÑOS //

// FETCH  //

let listandoFetch = document.getElementById("listadoFetch");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(Response => Response.json())
    .then(data => {
        data.forEach((post) => {
            let li = document.createElement("li");

            li.textContent = post.title;

            listandoFetch.append(li);
        })
    })
    
// END FETCH  //

// SWEET ALERT - bienvenida Animate.css//
window.addEventListener('load', function(){

    Swal.fire({

        title: 'Bienvenido al aplictivo Web\nCALZIA S.A.\n\nApp exclusiva para vendedores',
        width: 800,
        padding: '3em',
        color: '#2e2e30',
        backdrop: `rgba(0, 0, 0, 0.8)`,
        confirmButtonColor: '#2e2e30',
        confirmButtonText: " Ingresar ",

        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
        
    })

})

// SWEET ALERT - boton info//

let botoninformativo = document.getElementById('botoninformativo');

botoninformativo.onclick = () => {
    
    Swal.fire({
        
        title: 'Aquí vas a encontar información importante\n\n·Novedades impositivas\n·Futuros aumentos\n·Informacion de gerencial',
        width: 700,
        padding: '1em',
        color: '#437327',
        backdrop: `rgba(0, 0, 0, 0.8)`,
        confirmButtonColor: '#2e2e30',
        confirmButtonText: "Leer documentaciòn",

        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }

    })
}
// END SWEET ALERT //