# Projet-5-KANAP

Kanap, une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.

# Architecture générale
L’application web est composée de 4 pages :
● Une page d’accueil montrant (de manière dynamique) tous les articles disponibles à la vente.
● Une page “produit” qui affiche (de manière dynamique) les détails du produit sur lequel l'utilisateur a cliqué depuis la page d’accueil. Depuis cette page, l’utilisateur peut sélectionner une quantité, une couleur, et ajouter le produit à son panier.
● Une page “panier”. Celle-ci contient plusieurs parties :
○ Un résumé des produits dans le panier, le prix total et la possibilité de
modifier la quantité d’un produit sélectionné ou bien de supprimer celui-ci.
○ Un formulaire permettant de passer une commande. Les données du
formulaire doivent être correctes et bien formatées avant d'être renvoyées au
back-end. Par exemple, pas de chiffre dans un champ prénom.
● Une page “confirmation” :
○ Un message de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant l'identifiant de commande envoyé par l’API.

# API
L’API n’est actuellement que dans sa première version. La requête post qu’il faudra formuler pour passer une commande ne prend pas encore en considération la quantité ni la couleur des produits achetés.


Tous les produits possèdent les attributs suivants :
                                      Champ
colors
id
name price imageUrl description altTxt
Type
array of string string
string
number
string string string
                                                                                                                                                                                                                                                                                                                                                     Technologies utilisées HTML, CSS, JavaScript.
URL des API
● Catalogue de canapés : http://localhost:3000/api/products
Paramètres des API Chaque API contient 3 paramètres :
       Verbe Paramètre
GET /
GET /{product-ID}
{product-ID} doit être remplacé par l’id d’un produit
POST /order
Corps de la demande prévue
-
-
Requête JSON contenant un objet de contact et un tableau de produits
Réponse
Retourne un tableau de tous les éléments
Renvoie l'élément correspondant à {product-ID}, identifiant d’un produit
Retourne l'objet contact, le tableau produits et orderId (string)