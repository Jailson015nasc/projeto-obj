
const tk = document.querySelector(".main")

window.addEventListener('click', () =>{

    showBoxes()
})

function showBoxes(){
    fetch("data.json")
        .then((data)=>{
           return data.json()
       })
       .then((item)=>{
         let displaySummary = item.map((info)=>{
            return `<header class="cabecalho-photosnap">

            <div class="caixa-img-flex">
              <img src=${info.logo} alt="">
            
             <div class="conteudo-p1">
               
              <div class="cont-ps1">
                <p class="photo">${info.company}</p>
                <p class="New">New!</p>
                <p class="Featured">Featured</p>
              </div>
               
                 <div class="caixa-frontend-flex">
                  <h2>${info.position}</h2>
                  <div class="navbar">
                   <button>${info.role}</button>
                   <button>${info.level}</button>
                   <button>${info.languages}</button>
                   <button>${info.languages}</button>
                   <button>${info.languages}</button>
                  </div>
                 </div>
              
               <ul class="cont-ps2">
                  <p>${info.postedAt}</p>
                  <li>${info.contract}</li>
                  <li>${info.location}</li>
              </ul>
            
            </div>
             
            </header> `
        })
           displaySummary = displaySummary.join("")
           console.log(displaySummary)
           tk.innerHTML = displaySummary
       })
        .catch((error) => console.log('Error: '+error))
}
   
















































 