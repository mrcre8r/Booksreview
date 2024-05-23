var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addbutton=document.getElementById("btn2")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel-popup")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var card=document.querySelector(".card")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookreviewinput=document.getElementById("book-review-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","card-header")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h4>${bookauthorinput.value}</h4>
    <p>${bookreviewinput.value}</p>
    <button onclick="deletebook(event)" id="dltbtn">Delete</button>`
    card.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}