
## 3) Node / Postgresql / Docker

- J'ai d'abord crée une app avec la cli d'express
```
express node-app --pug
```

### Tour de l'app rapide : 
 - **bin** contient tout le server / port etc
 - **database** contient les models, config, migration, seeds
 - **routes** contient les actions réalisées en fonction de la routes (get, post..)
 - **views** contient les fichiers pug qui sont le template front de l'app
 - **dockerignore** permet de ne pas s'occuper des nodes-modules et des logs 
 - **.env** précise notre config de DB
 - **.sequelizerc** contient la config de sequelize
 - **app** est le départ de notre app
 - **server-install.sh** est un fichier permetant, via l'image node (dockerfile), de lancer le serveur, appliquer les migrations et les seeds

### Context : 

*L'app renvoie la liste des todos depuis un postgres avec l'ORM sequelize et node*

### Démarche :

- Je crée un dockerfile qui me sert d'image node. (voir les commentaires)
- Je crée un docker-compose.yml (voir les commentaires) avec :
    - Un node (à partir du dockerfile)
    - Un postgres (à partir du hub)
    - Un volume 

- Côté node j'utilise express et sequelize pour avoir un ORM entre node et postgres.
- L'utilisation de sequelize m'a demandé un peu de config (création des models, migrations des seeds...) -> on retrouve tout ça dans le dossier database 
- J'ai crée un script utilisé au lancement du container node pour lancer le serveur, les migrations etc. Ce qui permet d'avoir directement tout de fonctionnel avec juste un docker-compose up (et ça c'est beau 😎)
- Je crée une route (racine) dans routes/index.js afin de récupérer toutes les todos avec sequelize :

``` javascript 
const todos = await models.Todo.findAll({});
res.render('todos/index', { todos });
```
- J'ai ajouté nodemon pour un hot-reload donc a chaque changement de code je n'ai pas besoin de relancer le container.
- J'ai aussi modifié le package.json pour ajouté les scripts de sequelize (migrate/seed..)


### Commande Sequelize (pour info - pas besoin d'exécuter) : 
```bash
# Init sequelize (create database folder)
$ sequelize init
# On génère un model avec ses attributs
$ sequelize model:generate --name Todo --attributes title:string,is_done:boolean
# On execute la migration après avoir modifier database/config/config.js
$ sequelize db:migrate
````
### Commandes :


``` bash
$ docker-compose build
```

``` bash
$ docker-compose up -d
# Go to localhost:3000/
```


### Debug psql :
```bash
docker exec -it postgres psql DB_NAME USER_NAME
```

```sql
# affiche toutes les tables
\dt 
# vérifie un select all 
select * from "Todos";
```