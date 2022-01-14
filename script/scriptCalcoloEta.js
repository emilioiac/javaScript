function calcoloEta(){
    var valore = document.querySelector("#input").value
    console.log(valore)
    deleteAll()
    let date = new Date()
    let actualYear = date.getFullYear()
    let p = document.createElement("p");
    p.className="paragraph"
    p.innerHTML = `La tua età è di ${actualYear - valore} anni`;
    document.body.appendChild(p);
}