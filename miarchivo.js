
// descripcion gerenal del programa //

/* 
Brindará soluciones de atención al público, facilitando presupuestos a medida de cada usuario
según datos brindados sobre sus neumáticos. Este tipo de consulta es básica en el día a día de la empresa.
Sera adaptado a la industria de la reconstrucción del neumático y el caucho.
*/



// declarando PRECIOS DE REFORMAS segun rodado-medida-diseño //

//rodado 13//
precioRodado13Medida165Liso = 1000;
precioRodado13Medida165Taco = 1500;

precioRodado13Medida175Liso = 2000;
precioRodado13Medida175Taco = 2500;

//rodado 14//
precioRodado14Medida165Liso = 3000,
precioRodado14Medida165Taco = 3500;

precioRodado14Medida175Liso = 4000;
precioRodado14Medida175Taco = 4500;

precioRodado14Medida185Liso = 5000;
precioRodado14Medida185Taco = 5500,

precioRodado14Medida195Liso = 6000;
precioRodado14Medida195Taco = 6500;

//rodado 15//
precioRodado15Medida185Liso = 7000;
precioRodado15Medida185Taco = 7500;

precioRodado15Medida195Liso = 8000;
precioRodado15Medida195Taco = 8500;

precioRodado15Medida215Liso = 9000;
precioRodado15Medida215Taco = 9500;

precioRodado15Medida225Liso = 10000;
precioRodado15Medida225Taco = 10500;



// INICIO JS CODE //

// ALERT DE BIENVENIDA //

alert("! BIENVENDIO A CALSIA NEUMÀTICOS !\nA continuaciòn tomaremos tu pedido y cotizaremos tus neumàticos\n \n! Segui las instrucciones ! ");

// INPUT USER //

let nombreUsuario = prompt("Ingresa tu NOMBRE o ALIAS con el que tomaras tu pedido");

if(nombreUsuario != ""){
    
    let rodado = prompt(`!  Genial ${nombreUsuario}  !\nA continuacion deberas ingresar el RODADO de tu neumàtico\n\nSELECCIONA TU OPCIÒN :\nA - si tu rodado es 13\nB - si tu rodado es 14\nC - si tu rodado es 15`);

    if((rodado.toLowerCase()=="a")||(rodado.toLowerCase()=="b")||(rodado.toLowerCase()=="c")){

        switch (rodado){
            case "a":
                let rodado13 = prompt(`! Siguiente paso ${nombreUsuario} !\n\nYa tomamos nota de tu rodado 13\nA continuacion ingresar la MEDIDA acorde a tu rodado\n\nSELECCIONA TU OPCIÒN :\nA - si tu medida es 165\nB - si tu medida es 175`);

                if((rodado13.toLowerCase()=="a")||(rodado13.toLowerCase()=="b")){

                    switch (rodado13){
                        case "a":
                            let rodado13Medida165 = prompt(`! Solo resta UN paso màs ${nombreUsuario} !\n\n¿ Que tipo de DISEÑO prefieres ?\n¿ LISO o de TACOS ?\n\nSELECCIONA TU OPCIÒN :\nA - si tu preferencia es LISA\nB - si tu preferencia es TACO`);

                            if(rodado13Medida165.toLowerCase()=="a"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 13 / medida 165 / diseño LISO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado13Medida165Liso}`);
                            }else if (rodado13Medida165.toLowerCase()=="b"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 13 / medida 165 / diseño TACO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado13Medida165Taco}`);

                            }else{
                                break
                            }
                        break

                        case "b":
                            let rodado13Medida175 = prompt(`! Solo resta UN paso màs ${nombreUsuario} !\n\n¿ Que tipo de DISEÑO prefieres ?\n¿ LISO o de TACOS ?\n\nSELECCIONA TU OPCIÒN :\nA - si tu preferencia es LISA\nB - si tu preferencia es TACO`);

                            if(rodado13Medida175.toLowerCase()=="a"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 13 / medida 175 / diseño LISO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado13Medida175Liso}`);
                            }else if (rodado13Medida175.toLowerCase()=="b"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 13 / medida 175 / diseño TACO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado13Medida175Taco}`);

                            }else{
                                break
                            }
                        break

                        default:
                            alert("! DEBES INGRESAR UNA MEDIDA DE RODADO 13 VALIDA !")
                    }

                }else{
                    console.log(" ! ATENCION !\ningresaste una MEDIDA no VALIDA\n!volve a intentarlo!\ngracias... ");
                }
            break

            case "b":
                let rodado14 = prompt(`! Siguiente paso ${nombreUsuario} !\n\nYa tomamos nota de tu rodado 14\nA continuacion ingresar la MEDIDA acorde a tu rodado\n\nSELECCIONA TU OPCIÒN :\nA - si tu medida es 165\nB - si tu medida es 175\nC - si tu medida es 185\nD - si tu medida es 195`);

                if((rodado14.toLowerCase()=="a")||(rodado14.toLowerCase()=="b")||(rodado14.toLowerCase()=="c")||(rodado14.toLowerCase()=="d")){

                    switch (rodado14){
                        case "a":
                            let rodado14Medida165 = prompt(`! Solo resta UN paso màs ${nombreUsuario} !\n\n¿ Que tipo de DISEÑO prefieres ?\n¿ LISO o de TACOS ?\n\nSELECCIONA TU OPCIÒN :\nA - si tu preferencia es LISA\nB - si tu preferencia es TACO`);

                            if(rodado14Medida165.toLowerCase()=="a"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 14 / medida 165 / diseño LISO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado14Medida165Liso}`);
                            }else if (rodado14Medida165.toLowerCase()=="b"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 14 / medida 165 / diseño TACO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado14Medida165Taco}`);

                            }else{
                                break
                            }
                        break

                        case "b":
                            let rodado14Medida175 = prompt(`! Solo resta UN paso màs ${nombreUsuario} !\n\n¿ Que tipo de DISEÑO prefieres ?\n¿ LISO o de TACOS ?\n\nSELECCIONA TU OPCIÒN :\nA - si tu preferencia es LISA\nB - si tu preferencia es TACO`);

                            if(rodado14Medida175.toLowerCase()=="a"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 14 / medida 175 / diseño LISO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado14Medida175Liso}`);
                            }else if (rodado14Medida175.toLowerCase()=="b"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 14 / medida 175 / diseño TACO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado14Medida175Taco}`);

                            }else{
                                break
                            }
                        break

                        case "c":
                            let rodado14Medida185 = prompt(`! Solo resta UN paso màs ${nombreUsuario} !\n\n¿ Que tipo de DISEÑO prefieres ?\n¿ LISO o de TACOS ?\n\nSELECCIONA TU OPCIÒN :\nA - si tu preferencia es LISA\nB - si tu preferencia es TACO`);

                            if(rodado14Medida185.toLowerCase()=="a"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 14 / medida 185 / diseño LISO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado14Medida185Liso}`);
                            }else if (rodado14Medida185.toLowerCase()=="b"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 14 / medida 185 / diseño TACO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado14Medida185Taco}`);

                            }else{
                                break
                            }
                        break

                        case "d":
                            let rodado14Medida195 = prompt(`! Solo resta UN paso màs ${nombreUsuario} !\n\n¿ Que tipo de DISEÑO prefieres ?\n¿ LISO o de TACOS ?\n\nSELECCIONA TU OPCIÒN :\nA - si tu preferencia es LISA\nB - si tu preferencia es TACO`);

                            if(rodado14Medida195.toLowerCase()=="a"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 14 / medida 195 / diseño LISO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado14Medida195Liso}`);
                            }else if (rodado14Medida195.toLowerCase()=="b"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 14 / medida 195 / diseño TACO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado14Medida195Taco}`);

                            }else{
                                break
                            }
                        break

                        default:
                            alert("! DEBES INGRESAR UNA MEDIDA DE RODADO 14 VALIDA !")
                    }

                }else{
                    console.log(" ! ATENCION !\ningresaste una MEDIDA no VALIDA\n!volve a intentarlo!\ngracias... ");
                }

            break

            case "c":
                let rodado15 = prompt(`! Siguiente paso ${nombreUsuario} !\n\nYa tomamos nota de tu rodado 15\nA continuacion ingresar la MEDIDA acorde a tu rodado\n\nSELECCIONA TU OPCIÒN :\nA - si tu medida es 185\nB - si tu medida es 195\nC - si tu medida es 215\nD - si tu medida es 225`);

                if((rodado15.toLowerCase()=="a")||(rodado15.toLowerCase()=="b")||(rodado15.toLowerCase()=="c")||(rodado15.toLowerCase()=="d")){

                    switch (rodado15){
                        case "a":
                            let rodado15Medida185 = prompt(`! Solo resta UN paso màs ${nombreUsuario} !\n\n¿ Que tipo de DISEÑO prefieres ?\n¿ LISO o de TACOS ?\n\nSELECCIONA TU OPCIÒN :\nA - si tu preferencia es LISA\nB - si tu preferencia es TACO`);

                            if(rodado15Medida185.toLowerCase()=="a"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 15 / medida 185 / diseño LISO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado15Medida185Liso}`);
                            }else if (rodado15Medida185.toLowerCase()=="b"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 15 / medida 185 / diseño TACO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado15Medida185Taco}`);

                            }else{
                                break
                            }
                        break

                        case "b":
                            let rodado15Medida195 = prompt(`! Solo resta UN paso màs ${nombreUsuario} !\n\n¿ Que tipo de DISEÑO prefieres ?\n¿ LISO o de TACOS ?\n\nSELECCIONA TU OPCIÒN :\nA - si tu preferencia es LISA\nB - si tu preferencia es TACO`);

                            if(rodado15Medida195.toLowerCase()=="a"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 15 / medida 195 / diseño LISO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado15Medida195Liso}`);
                            }else if (rodado15Medida195.toLowerCase()=="b"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 15 / medida 195 / diseño TACO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado15Medida195Taco}`);

                            }else{
                                break
                            }
                        break

                        case "c":
                            let rodado15Medida215 = prompt(`! Solo resta UN paso màs ${nombreUsuario} !\n\n¿ Que tipo de DISEÑO prefieres ?\n¿ LISO o de TACOS ?\n\nSELECCIONA TU OPCIÒN :\nA - si tu preferencia es LISA\nB - si tu preferencia es TACO`);

                            if(rodado15Medida215.toLowerCase()=="a"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 15 / medida 215 / diseño LISO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado15Medida215Liso}`);
                            }else if (rodado15Medida215.toLowerCase()=="b"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 15 / medida 215 / diseño TACO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado15Medida215Taco}`);

                            }else{
                                break
                            }
                        break

                        case "d":
                            let rodado15Medida225 = prompt(`! Solo resta UN paso màs ${nombreUsuario} !\n\n¿ Que tipo de DISEÑO prefieres ?\n¿ LISO o de TACOS ?\n\nSELECCIONA TU OPCIÒN :\nA - si tu preferencia es LISA\nB - si tu preferencia es TACO`);

                            if(rodado15Medida225.toLowerCase()=="a"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 15 / medida 225 / diseño LISO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado15Medida225Liso}`);
                            }else if (rodado15Medida225.toLowerCase()=="b"){
                                alert(`LLEGAMOS A TU PRESUPUESTO ${nombreUsuario}\n\nTUS MEDIDAS INGRESADAS: Rodado 15 / medida 225 / diseño TACO\n\nEl VALOR final de c/u de tus Neumàticos es de ${precioRodado15Medida225Taco}`);

                            }else{
                                break
                            }
                        break

                        default:
                            alert("! DEBES INGRESAR UNA MEDIDA DE RODADO 15 VALIDA !")
                    }

                }else{
                    console.log(" ! ATENCION !\ningresaste una MEDIDA no VALIDA\n!volve a intentarlo!\ngracias... ");
                }

            break
            
            default:
                alert("! DEBES INGRESAR UNA OPCION DE RODADO VALIDO !\nSELECCIONA TU OPCIÒN :\nA - si tu rodado es 13\nB - si tu rodado es 14\nC - si tu rodado es 15")
        }

    }else{
        console.log(" ! ATENCION !\ningresaste un RODADO no disponible\n!volve a intentarlo!\ngracias... ");
    }
    
}else{
    console.log(" ! ATENCION !\ningresaste valores incorectos\n!volve a intentarlo!\ngracias... ");
}


// FIN JS CODE //

