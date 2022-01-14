function goToPage1(){
    var url = window.location.pathname
    console.log(url)
    if(url == "/index.html"){
        window.location.assign("/pagine/calcoloeta.html")
    }
    else if(url == "/pagine/calcoloeta.html" || url == "/pagine/getdog.html" || url == "/pagine/listauniversita.html"){
        window.location.assign("/index.html")
    }
}
function goToPage2(){
    var url = window.location.pathname
    console.log(url)
    if(url == "/index.html"){
        window.location.assign("pagine/quantigiornia.html")
    }
    else if(url == "/pagine/quantigiornia.html"){
        window.location.assign("/index.html")
    }
}
function goToPage3(){
    var url = window.location.pathname
    console.log(url)
    if(url == "/pagine/calcoloeta.html"){
        window.location.assign("/pagine/quantigiornia.html")
    }
    else if(url == "/pagine/quantigiornia.html"){
        window.location.assign("/pagine/calcoloeta.html")
    }
}
function goToPage4(){
    var url = window.location.pathname
    console.log(url)
    if(url == "/index.html"){
        window.location.assign("/pagine/getdog.html")
    }
}
function goToPage5(){
    var url = window.location.pathname
    console.log(url)
    if(url == "/index.html"){
        window.location.assign("/pagine/listauniversita.html")
    }
}