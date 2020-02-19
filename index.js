var deleteItem = document.querySelectorAll(".delete_item");
var heartItem = document.querySelectorAll(".heart_item");
var alItem = document.querySelectorAll(".al_item");
var itemPlus = document.querySelectorAll(".item_plus");
var itemMinus = document.querySelectorAll(".item_minus");
var itemIte = document.querySelectorAll(".item-ite")
var totPrice = document.querySelector(".tot_price");

// // Delete the Item
Array.from(deleteItem).map(el => {
    el.addEventListener("click", () => {
      let qte=parseInt(el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[3].innerHTML)
        if(el.className==='delete_icon_color' || qte > 0)
            window.alert("impossible de supprimer l'article")  
        else  
             el.parentNode.parentNode.remove()
    })
})
// Change Heart color
Array.from(heartItem).map(el => {
    el.addEventListener("click", () => {
        el.classList.toggle("icon_color_2")
    })
})
//  Add an Item
Array.from(itemPlus).map(el => {
    el.addEventListener('click', () => {
        let num = parseInt(el.nextElementSibling.innerHTML) + 1
        el.nextElementSibling.innerHTML = num
        let price = parseInt(el.parentElement.nextElementSibling.innerHTML)
        totPrice.innerHTML = parseInt(totPrice.innerHTML) + price + "§"
    })
})
// Remove an Item
Array.from(itemMinus).map(el => {
    el.addEventListener('click', () => {
        let num = el.previousElementSibling.innerHTML
        if (parseInt(num) === 0) {
            return false
        } else {
            el.previousElementSibling.innerHTML = num - 1
            let price = parseInt(el.parentElement.nextElementSibling.innerHTML)
            totPrice.innerHTML = parseInt(totPrice.innerHTML) - price + "§"
        }
    })
}) 