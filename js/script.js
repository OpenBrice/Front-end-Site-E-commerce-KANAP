fetch("http://localhost:3000/api/products")
.then((res) => res.json())
.then(data => addProduct(data))

function addProduct(donnees){
    const imageUrl = donnees [0].imageUrl

    const anchor = document.createElement("a")
    anchor.href = "http://localhost:3000/images/kanap01.jpeg"
    anchor.text = "un magnifique canapé"

    const items = document.querySelector("#items")
    items.appendChild(anchor)
}

