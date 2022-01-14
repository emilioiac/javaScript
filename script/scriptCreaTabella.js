function tableCreate(value, result) {
    deleteAll()
    const body = document.body
    tbl = document.createElement('table');
    tbl.className = "tabella"
    tbl.style.width = '200px';
    tbl.style.border = '1px solid black';
  
    for (let i = 0; i <=11; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < 1; j++) {
          if(i===0){
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(`Tabellina del ${value}`));
          }
          else{
            td = tr.insertCell();
            td.appendChild(document.createTextNode(`${result[i-1]}`));
          }
        }
      }
      body.appendChild(tbl);
}