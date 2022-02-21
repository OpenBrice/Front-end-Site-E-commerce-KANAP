/* ensuite il faut récuperer l'id dans url et l'envoyer au serveur, c'est une web api donc une fonction que chrome nous donne*/
// va sur toutes les entrées dans searh params et tu me les affiche*/
 
const currentUrl = window.location.search
const urlParams = new URLSearchParams(currentUrl)
const productId = urlParams.get("id");
let imgUrl
let altText
let productName

fetch(`http://localhost:3000/api/products/${productId}`)
.then (response => response.json())
.then (res => allKanap(res))


/* mtn quand on clique sur un produit il doit nous loguer tt ce qu'il recoit de l'api*/

function allKanap(kanap){

    /* 5 premieres lignes viennent recupérer les données du premier élément*/

    const _id = kanap._id
    const imageUrl = kanap.imageUrl
    const altTxt = kanap.altTxt
    const name = kanap.name
    const description = kanap.description
    const colors = kanap.colors
    const price = kanap.price

    makeImage(imageUrl, altTxt)
    makeTitle(name)
    makeDescription(description)
    makePrice(price)
    makeColors(colors)
    onClick()

    imgUrl = imageUrl
    altText = altTxt
    productName = name
}

function makeImage(imageUrl, altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    const parent = document.querySelector(".item__img")
    parent.appendChild(image)
}

function makeTitle(name){
    const title = document.querySelector("#title")
    title.textContent = name
}

function makeDescription(description){
    const p = document.querySelector("#description")
    p.textContent = description
}

function makePrice(price){
    const kanapPrice = document.querySelector("#price")
    kanapPrice.textContent = price
}

// Créer une fonction qui permet d'introduire des couleurs
function makeColors(colors){

    const select = document.querySelector("#colors")

    colors.forEach((color) => {
        const option = document.createElement("option")
        option.value = color
        option.textContent = color
        select.appendChild(option)
    });

    /*pour chaque valeur qu'on a il faut créer une option avec une value et du text */

}

/*---------------------------------Le local storage ---------------------------------*/
/*---------------------------------Stocker la récupération des valeurs du formulaire dans le  local storage ---------------------------------*/

function onClick() {

    //Au click sur le boutton, on récupère du contenu et des valeurs : le prix la couleur et la quantité
    
    const button = document.querySelector("#addToCart")
    button.addEventListener("click", (e) => {
        const color = document.querySelector("#colors").value
        const quantity = document.querySelector("#quantity").value
        const price = document.querySelector("#price").textContent
    
        if (color === null || quantity == 0){
            alert ("Veuillez choisir une couleur ainsi qu'une quantité à transmettre au panier")
            return
        } 

        const data = {
            id: productId,
            color: color,
            quantity: quantity,
            price: price,
            imageUrl: imgUrl,
            altTxt: altText,
            name: productName,
        }

        let dataStorage = [];
      
      // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau , puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
      if (localStorage.getItem("products") !== null) {
        dataStorage = JSON.parse(localStorage.getItem("products"));
        
        
        // Si le LS est vide, on le crée avec le produit ajouté
      } 
        dataStorage.push(data);
        localStorage.setItem("products", JSON.stringify(dataStorage));
      
        window.location.href = 'cart.html';
    })
    

}

