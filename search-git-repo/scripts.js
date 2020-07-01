function searchUser(){
    var inputElement = document.querySelector("#user")
    var user = inputElement.value
    var listElement = document.querySelector(".app ul")
    var container = document.querySelector(".app")
    
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function(response){
            

            response.data.map(function(item){
                var listItem = document.createElement('li')
                listItem.setAttribute('class', 'list-item')
                var itemText = document.createTextNode(item.name)

                listItem.appendChild(itemText)
                listElement.appendChild(listItem)
            })
            container.appendChild(listElement)
        })
        .catch(function(error){
            container.innerHTML = '<h3 style="color: white;">User not found<h3>'
        })

        listElement.innerHTML = ''
}