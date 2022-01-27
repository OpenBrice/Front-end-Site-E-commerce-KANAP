fetch("http://localhost:3000/api/products") /*-- d'abord il fetch des données puis les passes à addkanap*/
.then((res) => res.json())
.then((data) => {
    console.log(data)
    return addKanap(data)
}) /*-- quand tu reçois du data tu le passes à la fonction addkanap; ne pas oublier le return*/ 
 

function addKanap(data){

    for (let i = 0; i < data.length; i++) {
        
        const id = data[i]._id
        const imageUrl = data[i].imageUrl
        const altTxt = data[i].altTxt
        const name = data[i].name
        const description = data[i].description /* dans ces 5 premieres lignes add product viens recupérer les données du premier élément*/

        const anchor = makeAnchor(id);                 /* il va créer un anchor*/
        const article = makeArticle();                 /* il va créer un article*/
        const image = makeImage(imageUrl, altTxt)       /* il va créer une image*/
        const h3 = makeH3(name);                        /* il va créer un h3*/
        const paragraph = makeParagraph(description);   /* il va créer un paragraphe*/


        article.appendChild(image)
        article.appendChild(h3)
        article.appendChild(paragraph)                  /*ici il append les 3 éléments à un article*/
        appendChildren(anchor, article)                /* ensuite il append l'article au anchor*/
    }
}



function makeAnchor(id){
    const anchor = document.createElement("a")
    anchor.href = "./product.html?id=42" + id
    return anchor /* le return ici nous dit que on veut que la fonction nous retourne anchor en sortie*/
}

function appendChildren(anchor, article){
    const items = document.querySelector("#items");
    items.appendChild(anchor);
    anchor.appendChild(article)
}

function makeImage(imageUrl, altTxt){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    return image
}

function makeArticle(){
    const article = document.createElement("article")
    return article
}

function makeH3(name){
    const h3 =  document.createElement("h3")
    h3.textContent = name;
    h3.classList.add("productName")
    return h3 /* ici on oublie pas le return pcq on va en avoir besoin pour appender plus tard*/
}

function makeParagraph(description){
    const paragraph = document.createElement("p")
    paragraph.textContent = description
    paragraph.classList.add("productDescription")
    return paragraph
}
