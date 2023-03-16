# Gestionnaire de Tournoi _League of Legends_ : _Ultimate Bravery_

Application contenant plusieurs outils permettant de gérer plus facilement et plus efficacement les tournois customs _Ultimate Bravery_ sur _League of Legends_.

## Liste des outils

Actuellement, l'application contient les outils suivants :
* Générateur d'une liste de champions aléatoires
* Générateur d'un stuff complet

### Générateur d'une liste de champions aléatoires

Le générateur de liste de champions aléatoires permet de créer une liste de champions, sélectionnés par tirage au sort parmis la liste des champions existants.

* Vous devrez saisir le nombre de champions désirés avant de lancer la génération (20 par défaut).
* Les champions ne pourront pas apparaître plus d'une fois dans la liste générée.

### Générateur d'un stuff complet

Le générateur de stuff complet permet de générer, pour chaque personnage d'une équipe, une liste d'objets à acheter (dans l'ordre d'achat), les sorts d'invocateurs à jouer, ainsi que le spell du champion que vous devrez maxer en premier.

* La liste des objets ne pourra pas contenir deux fois le même objet pour un même joueur.
* La liste des objets ne prend **pas** en compte les objets incompatibles. Il est cependant possible de regénérer un objet spécifique en cliquant dessus.
* La génération prend en compte le poste du joueur (voir plus bas).
* Pour chaque joueur, l'outil génère des bottes, un objet mythique et 4 objets légendaires (dans cet ordre).

Lors de la génération, vous devrez spécifier les différents champions de l'équipe, ainsi que leur poste.
* Pour un joueur jouant support, l'outil lui attribuera l'un des objets de support, avant de lui générer le reste des objets.
* Pour un joueur jouant jungle, l'outil lui attribuera l'un des objets de départ pour le poste de jungle, et lui attribuera automatiquement le sort d'invocateur Châtiment.

## Installation du projet

* Installer [_Git_](https://git-scm.com)
* Installer la dernière version LTS de [_Node.JS_](https://nodejs.org/fr)
* Installer _Yarn_ à l'aide de la commande suivante : `npm install --global yarn`
* Se placer dans le dossier où l'on souhaite enregistrer le code du programme
* Récupérer le dépôt Git du projet en local : `git clone https://github.com/InFinity54/LoL_UltimateBraveryTournament.git LoL_UltimateBraveryTournament`
* Se placer dans le dossier créé par la commande précédente
* Installer les dépendances du projet à l'aide de la commande suivante : `yarn install`
* Ouvrir le dossier du projet à l'aide d'un éditeur de code

En ce qui concerne l'éditeur de code, le projet est compatible avec plusieurs d'entre eux, comme [_Visual Studio_](https://visualstudio.microsoft.com/fr), [_Visual Studio Code_](https://code.visualstudio.com) ou encore [_WebStorm_](https://www.jetbrains.com/fr-fr/webstorm). _WebStorm_ est celui qui a été utilisé durant le développement de l'application.

## Démarrage du projet

* Se placer dans le dossier du projet
* Exécutez le programme avec debug à l'aide de la commande suivante : `yarn start`

Il est également possible de configurer l'IDE [_WebStorm_](https://www.jetbrains.com/fr-fr/webstorm) pour exécuter cette commande automatiquement lors du clic sur le bouton "Play" permettant de lancer le debug.

## Compilation et publication

La commande `yarn make` permet de compiler l'application, et la commande `yarn publish` permet d'envoyer le résultat de la compilation directement sur GitHub, dans une nouvelle release.

La release sera enregistrée en tant que brouillon, permettant d'y remplir les différents éléments (titre, tag, changelog, etc...) avant sa publication.
