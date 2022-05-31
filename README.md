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

# Technologies utilisées
HTML, CSS, JavaScript.
URL des API
● Catalogue de canapés : http://localhost:3000/api/products
