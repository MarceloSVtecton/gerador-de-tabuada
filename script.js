function gerar() {
    let num = document.getElementById('mult')
    let tab = document.getElementById('mostrar')
    if ( num.value.length == 0) {
        alert ('Por favor digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c=1 ; c<=10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)


        }
    }

}
