## Création d'une Application de Blog

# Description de l'Exercice :
Dans cet exercice, les participants vont créer une application Ionic qui simule un blog. Ils apprendront à naviguer entre une liste d'articles et les détails d'un article, en utilisant des fonctionnalités avancées de navigation telles que les onglets et les paramètres de navigation.
   
   
   # Instructions :

1. Création de l'Application :

   - Utilisez la commande ionic start pour créer une nouvelle application Ionic vide.
   - Nommez votre application "BlogApp".
	
2. Création de Pages :

Créez trois pages dans votre application Ionic : une page d'accueil pour afficher la liste des articles, une page de détails pour afficher un article spécifique, et une page de profil pour afficher les informations de l'utilisateur.
	
	
	
	
Création de Services :

	

		
Créez un service pour gérer les données des articles et un service pour gérer les données de l'utilisateur. Vous pouvez utiliser des données fictives ou, si possible, connectez-vous à une API de blog réelle.
	
	
	
	
Navigation avec des Onglets :

	

		
Configurez une barre d'onglets en bas de l'application avec trois onglets : "Accueil", "Profil" et "Paramètres". Utilisez le module IonTabs pour cela.
	
	
	
	
Affichage de la Liste des Articles :

	

		
Dans la page "Accueil", utilisez une boucle *ngFor pour afficher la liste des articles à partir du service d'articles.
		
Chaque élément de la liste doit être cliquable et rediriger l'utilisateur vers la page de détails de l'article correspondant.
	
	
	
	
Navigation avec des Paramètres :

	

		
Lorsqu'un utilisateur clique sur un article, passez l'ID de l'article en tant que paramètre de navigation. Utilisez NavParams ou ActivatedRoute pour récupérer cet ID dans la page de détails de l'article.
	
	
	
	
Affichage des Détails de l'Article :

	

		
Dans la page de détails de l'article, utilisez l'ID de l'article pour obtenir les détails de l'article à partir du service d'articles.
		
Affichez le titre, le contenu et l'auteur de l'article.
	
	
	
	
Page de Profil et Paramètres :

	

		
Créez une page de profil qui affiche les informations de l'utilisateur. Utilisez des données fictives ou les données du service d'utilisateur.
		
Créez une page de paramètres où l'utilisateur peut personnaliser l'application (par exemple, changer de thème).
	
	


Conseils :


	
Utilisez des onglets pour organiser l'interface de l'application.
	
Assurez-vous que la navigation entre les pages et la récupération des paramètres fonctionnent correctement.
	
Personnalisez l'apparence de votre application en utilisant les thèmes Ionic.


Critères de Réussite :


	
L'application affiche une liste d'articles dans la page "Accueil".
	
Lorsqu'on clique sur un article, l'utilisateur est redirigé vers une page de détails qui affiche le contenu de l'article.
	
Les onglets "Accueil", "Profil" et "Paramètres" fonctionnent correctement.
	
La page de profil affiche les informations de l'utilisateur.
	
La page de paramètres permet de personnaliser l'application.