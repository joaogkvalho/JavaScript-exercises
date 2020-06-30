function soma(){
    var input1 = document.querySelector('#input01')
    var input2 = document.querySelector('#input02')

    var res = document.querySelector('#result')

    var n1 = Number(input1.value)
    var n2 = Number(input2.value)

    var s = n1 + n2
     
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
}

function sub(){
    var input1 = document.querySelector('#input01')
    var input2 = document.querySelector('#input02')

    var res = document.querySelector('#result')

    var n1 = Number(input1.value)
    var n2 = Number(input2.value)

    var s = n1 - n2
     
    res.innerHTML = `A subtração de ${n1} e ${n2} é igual a ${s}`
}

function multi(){
    var input1 = document.querySelector('#input01')
    var input2 = document.querySelector('#input02')

    var res = document.querySelector('#result')

    var n1 = Number(input1.value)
    var n2 = Number(input2.value)

    var s = n1 * n2
     
    res.innerHTML = `A multiplicação de ${n1} e ${n2} é igual a ${s}`
}

function divi(){
    var input1 = document.querySelector('#input01')
    var input2 = document.querySelector('#input02')

    var res = document.querySelector('#result')

    var n1 = Number(input1.value)
    var n2 = Number(input2.value)

    var s = n1 / n2
     
    res.innerHTML = `A divisão entre ${n1} e ${n2} é igual a ${s}`
}