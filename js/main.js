var btn=document.getElementById("change");
const h1=document.getElementById("head");
btn.addEventListener("click",getjokes)

 async function getjokes() {
     await fetch("https://api.chucknorris.io/jokes/random")
     .then(res => res.json())
     .then(data=>h1.innerHTML=data.value)
 }
    
    

