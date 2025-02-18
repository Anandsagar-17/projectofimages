
let input = document.getElementById("input")
let MsgReq = document.getElementById("searchRequestMessage")
async function searchImages(){
    let responseData = await fetch(`https://pixabay.com/api/?key=48900646-b33b7907a25dd06f689e01c19&q=${input.value}&image_type=photo`)
    input.value = " ";
    let resultData = await responseData.json()
    let cardsContainer = document.getElementById("cardsContainer")
    cardsContainer.innerHTML = " "
    document.getElementById('msg').setAttribute('style','display:none;')
    resultData.hits.map((item)=>{
        let div = document.createElement("div")
        div.setAttribute("class","text-center")
        let imgDiv = `<img src="${item.largeImageURL}" class="rounded" alt="...">`
         div.innerHTML = imgDiv
         cardsContainer.appendChild(div)
    })
}