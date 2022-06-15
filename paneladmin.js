// programa dedicado al perfil administrador //

/* De uso exclusivo para vendedores. Podran estos ingresar nuevos diseños y medidas */


// clase reforma //
class Reforma{
    constructor(rodado, medida, estilo, diseño, precio){ 
        this._rodado = rodado
        this._medida = medida
        this._estilo = estilo
        this._diseño = diseño
        this._precio = parseFloat(precio)
    }
    mostrar() {
        console.log(`ESTA REFORMA CONTIENE LOS SIG. DATOS:\nRODADO = ${this._rodado}\nMEDIDA = ${this._medida}\nESTILO = ${this._estilo}\nDISEÑO = ${this._diseño}\nPRECIO = $ ${this._precio}`)

    }

}


// ALERT DE BIENVENIDA ADMIN //
alert("! BIENVENDIO AL PANEL DE VENDEDOR !\nIngresa la nueva reforma de neumàtico al sistema \n \n! Segui las instrucciones ! ")

// INPUT NUEVA REFORMA //

let _rodado = prompt (`ingresa el RODADO a reformar\n\nOPCIONES posible :\nrodado 13\nrodado 14\nrodado 15`);

if((_rodado=="13")||(_rodado=="14")||(_rodado=="15")){
    let _medida = prompt (`ingresa la MEDIDA`);
    if(_medida != ""){
        let _estilo = prompt (`ingresa el ESTILO\n\nOPCIONES posible :\nLISO O TACO`);
        if((_estilo.toLowerCase()=="liso")||(_estilo.toLowerCase()=="taco")){
            let _diseño = prompt (`ingresa el DISEÑO`);
            if(_diseño != ""){
                let _precio = prompt(`ingresa el PRECIO $ DE LA REFORMA`);
                if(_precio != NaN){

                    confirm (`! Reforma finalizada !\n\nCORROBORE LOS DATOS INGRESADOS:\n\nRODADO = ${_rodado}\nMEDIDA = ${_medida}\nESTILO = ${_estilo}\nDISEÑO = ${_diseño}\nPRECIO = $${_precio}`)
                    //sending to class
                    const NuevaReforma = new Reforma(_rodado,_medida,_estilo,_diseño,_precio)
                    //print console
                    NuevaReforma.mostrar();

                }else{
                console.log(" ! ATENCION !\ningresaste un VALOR no numerico\n!volve a intentarlo!\ngracias... ");
                }
            }else{
                console.log(" ! ATENCION !\nDato no VALIDO\n!volve a intentarlo!\ngracias... ");
            }
        }else{
        console.log(" ! ATENCION !\ningresaste un ESTILO no VALIDO\n!volve a intentarlo!\ngracias... ");
        }
    }else{
    console.log(" ! ATENCION !\ningresaste un RODADO no VALIDO\n!volve a intentarlo!\ngracias... ");
    }
}else{
    console.log(" ! ATENCION !\ningresaste un RODADO no VALIDO\n!volve a intentarlo!\ngracias... ");
}

//END NUEVA REFORMA //

//MAKEING ARRAY//

const reformas = ["rodado", "medida", "estilo", "diseño", "precio"];

reformas.push(new Reforma("13", "125", "liso", "vp10", "4558"))

console.log(reformas) 
console.log(reformas.length)

//END MAKEING ARRAY//

//FULL END//

