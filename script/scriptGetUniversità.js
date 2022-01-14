async function getUniversityByCountry(){
    deleteAll()
    let valore = upperCaseCountry(document.querySelector("#country").value)
    let citta = (document.querySelector("#citta").value)
    console.log(citta)
    const body = document.body
    tbl = document.createElement('table');
    tbl.className = "tabella"
    tbl.style.width = '500px';
    tbl.style.border = '1px solid black';
    await fetch(`http://universities.hipolabs.com/search?country=${valore}`)
        .then(response => response.json())
        .then(data => {
            let tr = tbl.insertRow();
            tr.appendChild(document.createTextNode(`Università del paese: ${valore}`))
            tr = tbl.insertRow();
            td = tr.insertCell();
            td.appendChild(document.createTextNode(`Nome`));
            td = tr.insertCell();
            td.appendChild(document.createTextNode(`Sito Internet`));
            for (const product of data) {     
                if (product.name.indexOf(`${upperCaseCountry(citta)}`) >= 0 && citta !=""){
                    console.log(product)
                    creaTabella(tr,tbl,td,product)
                }
                else if(citta == ""){
                    creaTabella(tr,tbl,td,product)
                }
            }
        });
        body.appendChild(tbl);
}
function upperCaseCountry(valore){
    let valueUpper = valore.charAt(0).toUpperCase() + valore.slice(1);
    return valueUpper
}
function creaTabella(tr,tbl,td,product,i){
        tr = tbl.insertRow();
        td = tr.insertCell();
        td.appendChild(document.createTextNode(`${product.name}`));
        td.style.border = '1px solid black';
        td = tr.insertCell();
        var a = document.createElement('a'); 
        a.appendChild(document.createTextNode(`${product.web_pages}`))
        a.href = `${product.web_pages}`;
        td.appendChild(a);
        td.style.border = '1px solid black';
}