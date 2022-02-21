/* ensuite il faut récuperer l'id dans url et ensuite l'envoyer au serveur,
/* j'utilise URLSearchParams afin de récupérer l'url du produit ainsi que son orderID*/
const currentUrl = window.location.search
const urlParams = new URLSearchParams(currentUrl)
const orderId = urlParams.get("orderId");
console.log(orderId)


/* fonction qui permet de se placer sur le document et d'y introduire l'order ID qu'on a récupéré précedemment*/
function finalOrderId(){
    const orderIdOnDocument = document.querySelector("#orderId")
    orderIdOnDocument.innerHTML = orderId
}
finalOrderId()

/* Je supprime ensuite ce qu'il y a dans le localStorage*/
const products = window.localStorage
products.clear()