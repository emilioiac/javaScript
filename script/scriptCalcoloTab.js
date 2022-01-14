function calcolaTabellina(){
    var valore = Number(document.querySelector("#input").value)
    console.log(typeof(valore))
    var check = checkValue(valore)
    if(check == true){
        return
    }
    else{
        var result = []
        for(let i=0; i<= 10 ; i++){
            result[i] = valore*i;
            console.log(result[i])
        }
        tableCreate(valore, result)  
    }
}