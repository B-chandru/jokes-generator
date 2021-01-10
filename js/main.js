var btn=document.getElementById("change");
const h2=document.getElementById("head");
btn.addEventListener("click",getjokes)

 async function getjokes() {
     await fetch("https://api.chucknorris.io/jokes/random")
     .then(res => res.json())
     .then(data=>h2.innerHTML=data.value)
 }
    
    

