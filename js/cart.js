/* Récupérer les données de local storage */ 

// déclaration de la variable itemsFromLocalStorage dans laquelle on met la key et les valeur
//Json parse pour convertir les données au format JSON qui sont dans le LS en format javascript//
let itemsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
console.log(itemsFromLocalStorage)

if(itemsFromLocalStorage.length === 0) {
    alert("le Panier est vide, veuillez choisir des Articles")
    window.location.href = './index.html';
    
} else {
    
    for (let items in itemsFromLocalStorage){

        // Création de l'élément Article
        
            const positionElements = document.querySelector("#cart__items")
            const article = document.createElement("article");
            article.classList.add ("cart__item")
            article.dataset.id = itemsFromLocalStorage[items].id
            article.dataset.color = itemsFromLocalStorage[items].color
            positionElements.appendChild(article);
        
        // Création de l'élément DIV contenant l'image
            const divImg = document.createElement("div")
            divImg.classList.add("cart__item__img")
            article.appendChild(divImg)

        // Création de l'élément Image et placement dans la div
            let productImage = document.createElement('img')
            productImage.src = itemsFromLocalStorage[items].imageUrl
            divImg.appendChild(productImage)

        // Création de l'élément DIV contenant La Div Avec Description du produit
            const divContent = document.createElement("div")
            divContent.classList.add("cart__item__content")
            article.appendChild(divContent)

        // Création de l'élément DIV contenant La Description du produit 
            const divDescription = document.createElement("div")
            divDescription.classList.add("cart__item__content__description")
            divContent.appendChild(divDescription)
        
        // Création de la description avec le nom, le prix, et la couleur
            let descriptionItemTitle = document.createElement("h2")
            descriptionItemTitle.innerHTML = itemsFromLocalStorage[items].name
            const descriptionItemColor = document.createElement("p")
            const descriptionItemPrice = document.createElement("p")
            descriptionItemPrice.innerHTML = itemsFromLocalStorage[items].price + "€"
            descriptionItemColor.innerHTML = itemsFromLocalStorage[items].color

         // On place le tout dans la div parent
            divDescription.appendChild(descriptionItemTitle)
            divDescription.appendChild(descriptionItemPrice)
            divDescription.appendChild(descriptionItemColor)
            
        // On Crée la div qui va contenir les paramètres du produit
            const settingsItem = document.createElement("div")
            settingsItem.classList.add("cart__item__content__settings")
            article.appendChild(settingsItem)

        // On Crée la div qui va contenir la quantité de produit   
            const quantitySettingsItem = document.createElement("div")
            quantitySettingsItem.classList.add("cart__item__content__settings__quantity")
            settingsItem.appendChild(quantitySettingsItem)

        // On Crée l'input et le paragraphe contenant la quantité choisie (max 100)  
            const settingsQuantity = document.createElement("p")
            const inputSettings = document.createElement("input")
            inputSettings.classList.add("itemQuantity")
            settingsQuantity.innerHTML = "Qté : ";
            inputSettings.min = "1"
            inputSettings.max = "100"
            inputSettings.addEventListener("change", console.log)

        // On donne comme attribut à linput une valeur ainsi que la quantité choisie par le client qui a été send au Local Storage
            inputSettings.setAttribute("type", "number");
            inputSettings.setAttribute("value", itemsFromLocalStorage[items].quantity);
            
            quantitySettingsItem.appendChild(settingsQuantity)
            quantitySettingsItem.appendChild(inputSettings)

        // On Crée la div qui va contenir le button qui nous permets de supprimer l'element  
            const settingsDelete = document.createElement("div")
            settingsDelete.classList.add("cart__item__content__settings__delete")
            settingsItem.appendChild(settingsDelete)

            const deleteItem = document.createElement("p")
            deleteItem.classList.add = ("deleteItem")
            deleteItem.innerHTML = "Supprimer";
            settingsDelete.appendChild(deleteItem)

            // Lorsque qu'on clique sur le bouton, le panier se vide ainsi que le localStorage

            function deleteItems(){

                deleteItem.addEventListener("click", () => {

                    /*On place un index sur chaque produit dans le local storage pour pouvoir les supprimer*/
                    const itemToDelete = itemsFromLocalStorage.findIndex((product) => product.id === itemsFromLocalStorage[items].id && product.color === itemsFromLocalStorage[items].color)
                    console.log('item to delete: ', itemToDelete)
                    itemsFromLocalStorage.splice(itemToDelete, 1)
                    console.log(itemsFromLocalStorage)
                    
                    localStorage.setItem('products', JSON.stringify(itemsFromLocalStorage));
                    positionElements.removeChild(article)
                    
                    alert("Ce produit a bien été supprimé du panier");
                    location.reload
                    getPriceAndQuantity()
                    });
            }
            deleteItems()
              
           /* On récupère le prix ainsi que la quantité */
            function getPriceAndQuantity(){
                const productQuantity = document.getElementsByClassName("itemQuantity")
                const quantityLength = productQuantity.length
                let quantityTotal = 0
            
                for (let i = 0; i < quantityLength; i++) {
                    quantityTotal += productQuantity[i].valueAsNumber;
                }
            
                let totalProductQuantity = document.getElementById("totalQuantity");
                totalProductQuantity.innerHTML = quantityTotal
                //console.log(quantityTotal)


                let finalPrice = 0
            
                for (let i = 0; i < quantityLength; i++) {
                    finalPrice += (productQuantity[i].valueAsNumber * itemsFromLocalStorage[i].price);
                }
            
                let finalTotalPrice = document.getElementById("totalPrice");
                finalTotalPrice.innerHTML = finalPrice
                //(finalPrice)

            }
            getPriceAndQuantity()
            // On ajoute un event listener sur l'input concernant la quantité des produits pour changer le prix dynamiquement

            inputSettings.addEventListener("input",() => getPriceAndQuantity(itemsFromLocalStorage[items].id))
 
        }
};


const orderButton = document.querySelector("#order")
orderButton.addEventListener("submit", (e) => submitForm(e))

// On récupère toutes les données du formulaire avant de les envoyer au back end
function submitForm(e){
    e.preventDefault()


    const formSelect = document.querySelector(".cart_order_form")
    const firstName = document.querySelector("#firstName")
    const lastName = document.querySelector("#lastName")
    const address = document.querySelector("#address")
    const city = document.querySelector("#city")
    const email = document.querySelector("#email")

    let regex = /^[A-Za-z0-9+_.-]+@(.+)$/

    if (email.value === '' || email.value === null || regex.test(email.value) === false){
        alert("Veuillez saisir un 'email' valide")
    } else if (itemsFromLocalStorage.length === 0){
        alert("Veuillez ajoutez des produits au Panier")
    }

    const products = []
    for (let i = 0; i < itemsFromLocalStorage.length; i++){
        products.push(itemsFromLocalStorage[i].id)
    }
    const order = {
        contact: {
            firstName: firstName.value, 
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        },
    products: products,
    }
    //window.location.href = 'confirmation.html'


    // Maintenant on envoi le form au back end avec la methode POST

    fetch("http://localhost:3000/api/products/order", {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Accept': 'application/json', 
            "Content-Type": "application/json" 
    }
    })
   
    .then((res) => res.json())
    .then((data) => { 
        const orderId = data.orderId
        window.location.href = "confirmation.html" + "?orderId=" + orderId
        return console.log(data)
    })
    .catch((err) => console.log(err))
}
