function trocar(){
	var msg = document.getElementById('msg')
	var foto = document.getElementById('imagem')

	var data = new Date()
	var horas = data.getHours()

	msg.innerHTML = `Agora são exatamente ${horas} horas`

    if(horas >= 0 && horas <= 12){
    	//Bom dia
    	foto.src = 'img/manha.jpg'
    	document.body.style.backgroundColor = '#e2cd9f'
    }
    else if(horas > 12 && horas < 18){
    	//Boa tarde
    	foto.src = 'img/tarde.jpg'
    	document.body.style.backgroundColor = '#b9846f'
    }
    else{
    	//Boa noite
    	foto.src = 'img/noite.jpg'
    	document.body.style.backgroundColor = '#515154'
    }

}

