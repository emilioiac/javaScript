function checkValue(value){
  deleteAll()
  if(value == 0 || value == ""){
    var p = document.createElement("p");
    p.className="paragraph"
    if(value == 0){
      p.innerHTML = "Valore non consentito, reinserisci";
    }
    document.body.appendChild(p); 
    return true
  }
  return false
}