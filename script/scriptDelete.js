function deleteAll(){
    var lista = document.body.childNodes
    /*var response = prompt("Sto cancellando tutto")
    if(response != null){
        var lista = document.body.childNodes;*/
    for(var i = lista.length - 1; i >= 0 ;i--){
        if(lista[i].className == "tabella" || lista[i].className == "paragraph" || lista[i].className == "immagine"){
            document.body.removeChild(lista[i])
        }
    }
}