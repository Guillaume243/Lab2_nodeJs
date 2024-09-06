# Lab2_nodeJs
Installation d'un serveur NodeJs sur une machine virtuel amazon EC2 et faire la journalisation


Accéder à la machine virtuelle EC2 avec système Linux via Mobaxtern en ssh
lancer les commandes suivantes:

#Installation de nodejs
sudo yum install nodejs
node -v //Pour verifier si node a été bien installé en vérifiant sa version

#Installation du gestionnaire de dépendance npm
sud yum install npm
npm -v //Pour verifier si npm a été bien installé en vérifiant sa version

Création du répertoire "page"

Copie des élements help.htlm et home.htlm dans page via Mobaextern par FTP

# on install la bibliotechque express
npm install express

# on lance le serveur en background + la journalisation
node server.js >> journal.log & 

# on monitore le journal 
tail -f journal.log 

