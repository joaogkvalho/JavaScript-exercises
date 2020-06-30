function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')


    if(fano.value.length == 0  || fano.value > ano){
        alert('[ERRO] Preencha os dados novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //CRIANÇA
                img.setAttribute('src', 'img/foto_bebe_m.png')
            }
            else if(idade <= 18){
                //JOVEM
                img.setAttribute('src', 'img/foto_jovem_m.jpg')
            }
            else if(idade <= 50){
                //ADULTO
                img.setAttribute('src', 'img/foto_adulto_m.jpg')
            }
            else{
                //IDOSO
                img.setAttribute('src', 'img/foto_idoso_m.jpg')
            }
        }
        else{
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //CRIANÇA
                img.setAttribute('src', 'img/foto_bebe_f.png')
            }
            else if(idade <= 18){
                //JOVEM
                img.setAttribute('src', 'img/foto_jovem_f.jpg')
            }
            else if(idade <= 50){
                //ADULTO
                img.setAttribute('src', 'img/foto_adulto_f.jpg')
            }
            else{
                //IDOSO
                img.setAttribute('src', 'img/foto_idoso_f.jpg')
            }
        }
    }

    res.style.textAlign = 'center'
    img.style.borderRadius = '20px'
    res.innerHTML = `Detectamos ${genero} com idade ${idade}`
    res.appendChild(img)
}