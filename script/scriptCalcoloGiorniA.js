function calcolaGiorni(){
    deleteAll()
    let arrayDate = []
    var collection = document.querySelectorAll('input[type="date"]')
    for(const value of collection){
        arrayDate.push(new Date(value.value))
    }
    var result = arrayDate[1] - arrayDate[0]
    console.log(Math.ceil(result * [1.1574074*(1/100000000)]))
    let p = document.createElement("p");
    p.className="paragraph"
    p.innerHTML 
    = `Fra giorno  
 ${arrayDate[0].getDate()}-${arrayDate[0].getMonth()+1}-${arrayDate[0].getFullYear()} 
 e giorno 
 ${arrayDate[1].getDate()}-${arrayDate[1].getMonth()+1}-${arrayDate[1].getFullYear()}
 intercorrono ${Math.ceil(result*[1.1574074*(1/100000000)])} giorni`;
    document.body.appendChild(p);
}