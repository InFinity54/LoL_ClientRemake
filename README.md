# _League of Legends_ Client Remake

Recréation (et partiellement fictive) la plus fidèle possible du client de League of Legends. Ce dépôt utilise des fichiers stockés avec _Git LFS_.

Il est important de noter que ce client **ne peut pas** être utilisé en remplacement du client officiel, pour diverses raisons :
* Les clients alternatifs ne sont pas supportés par Riot Games, et peut résulter en un bannissement de votre compte en cas d'utilisation.
* En admettant que ce type de client soit officiellement supporté, cette version n'est que facultative. Les données sont récupérées via les outils de développement de Riot, ce qui explique l'absence de certains informations et/ou fonctionnalités dans ce programme (chat vocal, messagerie, liste d'amis, etc...).

## Installation du projet

* Installer [_Git_](https://git-scm.com)
* Vérifier que _Git LFS_ est disponible.
* Installer la dernière version LTS de [_Node.JS_](https://nodejs.org/fr)
* Installer _Yarn_ à l'aide de la commande suivante : `npm install --global yarn`
* Se placer dans le dossier où l'on souhaite enregistrer le code du programme
* Récupérer le dépôt Git du projet en local : `git clone https://github.com/InFinity54/LoL_ClientRemake.git LoL_ClientRemake`
* Se placer dans le dossier créé par la commande précédente
* Installer les dépendances du projet à l'aide de la commande suivante : `yarn install`
* Ouvrir le dossier du projet à l'aide d'un éditeur de code

En ce qui concerne l'éditeur de code, le projet est compatible avec plusieurs d'entre eux, comme [_Visual Studio_](https://visualstudio.microsoft.com/fr), [_Visual Studio Code_](https://code.visualstudio.com) ou encore [_WebStorm_](https://www.jetbrains.com/fr-fr/webstorm). _WebStorm_ est celui qui a été utilisé durant le développement de l'application.

## Démarrage du projet

* Se placer dans le dossier du projet
* Exécutez le programme avec debug à l'aide de la commande suivante : `yarn start`

Il est également possible de configurer l'IDE [_WebStorm_](https://www.jetbrains.com/fr-fr/webstorm) pour exécuter cette commande automatiquement lors du clic sur le bouton "Play" permettant de lancer le debug.

## Compilation et publication

La commande `yarn make` permet de compiler l'application et la commande `yarn publish` permet d'envoyer le résultat de la compilation directement sur GitHub, dans une nouvelle release.

La release sera enregistrée en tant que brouillon, permettant d'y remplir les différents éléments (titre, tag, changelog, etc...) avant sa publication.
