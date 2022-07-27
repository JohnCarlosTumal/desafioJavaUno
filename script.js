



do{
    
alert ("Bienvenido a escuela de deportes")
alert("elije de nuestros ACTIVIDADES")
alert("COMBO 1 : futbol - tennis, COMBO 2: futbol - natacion, COMBO 3: tennis - natacion, COMBO 4: futbol - tennis - natacion")

const futbol = 1000
const tennis = 1200
const natacion = 1500

const suma = (num, num2) => num + num2
const sumaDos = (num, num2, num3) => num + num2 + num3
const descuentoUno = a => a - 200
const descuentoDos = a => a - 500



let combo, mes, comboUno= "", comboDos= "", comboTres="", comboCuatro=""


do{
combo = parseInt(prompt("Ingrese el combo eligido: "))

if (combo >= 1 && combo <= 4){
    if (combo === 1){
        comboUno = suma(futbol,tennis)
        alert(`usted eligio FUTBOL - TENNIS por un valor de $ ${comboUno}`)
    }else if (combo === 2){
        comboDos = suma(futbol,natacion)
        alert(`usted eligio FUTBOL - NATACION por un valor de $ ${suma(futbol,natacion)}`)
    }else if (combo === 3){
        comboTres = suma(natacion,tennis)
        alert(`usted eligio TENNIS - NATACION por un valor de $ ${suma(natacion,tennis)}`)
    }else if (combo === 4){
        comboCuatro = sumaDos(futbol,tennis, natacion)
        alert(`usted eligio FUTBOL - TENNIS - NATACION por un valor de $ ${sumaDos(futbol,tennis,natacion)}`)
    }    
} else{
    alert("combo no disponible")
    continue
}
mes = parseInt(prompt("ingresa los meses por los que quieres el combo"))
if (isNaN(mes)){
    alert("ingrese un valor valido")
}else if (mes < 1 || mes > 12){
    alert("promocion no valida para ese numero de mes")
}

}while((combo < 1 || combo > 4)|| (isNaN(combo) || isNaN(mes)) || (mes < 1 || mes > 12))

if (mes >= 1 && mes <=6){
    if(combo === 1){
        alert(`GRANDIOSO !! tienes un descuento de $200 a tu valor inicial, ahora cancelaras ${descuentoUno(comboUno)}`)
    }else if(combo === 2){
        alert(`GRANDIOSO !! tienes un descuento de $200 a tu valor inicial, ahora cancelaras ${descuentoUno(comboDos)}`)

    }else if(combo === 3){
        alert(`GRANDIOSO !! tienes un descuento de $200 a tu valor inicial, ahora cancelaras ${descuentoUno(comboTres)}`)

    }
    else if(combo === 4){
        alert(`GRANDIOSO !! tienes un descuento de $200 a tu valor inicial, ahora cancelaras ${descuentoUno(comboCuatro)}`)

    }

}else if (mes >= 7 && mes <= 12){
    if(combo === 1){
        alert(`GRANDIOSO !! tienes un descuento de $500 a tu valor inicial, ahora cancelaras ${descuentoDos(comboUno)}`)
    }else if(combo === 2){
        alert(`GRANDIOSO !! tienes un descuento de $500 a tu valor inicial, ahora cancelaras ${descuentoDos(comboDos)}`)

    }else if(combo === 3){
        alert(`GRANDIOSO !! tienes un descuento de $500 a tu valor inicial, ahora cancelaras ${descuentoDos(comboTres)}`)

    }
    else if(combo === 4){
        alert(`GRANDIOSO !! tienes un descuento de $500 a tu valor inicial, ahora cancelaras ${descuentoDos(comboCuatro)}`)

    }
}

do {
    respuesta = prompt("desea adquirir otro combo?").toLowerCase()

} while (respuesta != "si" && respuesta != "no")

}while (respuesta != "no")




