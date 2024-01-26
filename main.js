function strikeThru(){
    document.querySelector("ul>li").style.textDecoration = "line-through"
}
strikeThru()



function setSource(id, url){
    document.querySelector(`#${id}`).src = url
}
setSource("image-1","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png")
setSource("image-2","https://img2.embroiderydesigns.com/printart/xlarge/gifutto/pggif1551.webp")
setSource("image-3","https://st.depositphotos.com/1001911/1222/v/450/depositphotos_12221489-stock-illustration-big-smile-emoticon.jpg")



function removefirst(){
    let unorderedList = document.querySelector("ul")
    let unorderedListItems = document.querySelectorAll("ul>li")
    unorderedList.removeChild(unorderedListItems[0])
}
removefirst()
removefirst()



function changefont(size, element){
    document.querySelector(element).style.fontSize = `${size}`
}
changefont("20px","p")



function addingItems(element){
    let unorderedList = document.querySelector("#arguments")
    unorderedList.appendChild(element)
}
let newImage = document.createElement("img")
addingItems(newImage)



function imageHeight(image){
   document.querySelector(`${image}`).style.height = "30px"
}
imageHeight("#image-1")



function makeInvisible(id){
   let element = document.querySelector(`${id}`)
   element.classList.add("invisible")
}
makeInvisible("#copy")



function makingElements(text){
   let newListItem = document.createElement("li")
   newListItem.innerText = `${text}`
   return newListItem
}
let newText = makingElements("This is the end.")
addingItems(newText)



function changeHeader(size, text){
    let newHeading = document.createElement(`h${size}`)
    newHeading.innerText = `${text}`
    return newHeading
}
let newHeader = changeHeader(3,"New Header")
addingItems(newHeader)