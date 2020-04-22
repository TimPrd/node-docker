#!/bin/sh
# Ce script me permet de lancer la migration , les seed puis de lancer le serveur
# Il appel des npm commande décrite dans le package.json 
npm run migrate
npm run seed-all
npm start