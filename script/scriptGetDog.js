async function getDogFromApi(){
    deleteAll();
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const myJson = await response.json();
    var p = document.createElement("img");
    p.className="immagine"
    p.src = myJson.message
    console.log(myJson.status)
    document.body.appendChild(p); 
}