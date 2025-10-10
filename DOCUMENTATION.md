# Documentation du projet Skillspoints RNCP

## 1️⃣ Initialisation du projet
- Création du projet Next.js avec tous les fichiers nécessaires :
  - `package.json`
  - `next.config.mjs`
  - `src/`
  - `public/`
  - etc.
- Installation des dépendances Prisma :
```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
2️⃣ Configuration de la base de données MySQL

Installation de MySQL via Homebrew :

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install mysql
brew services start mysql


Création de la base de données et de l’utilisateur :

CREATE DATABASE rncpdb;
CREATE USER 'rncpuser'@'localhost' IDENTIFIED BY 'RncpPass2025!';
GRANT ALL PRIVILEGES ON rncpdb.* TO 'rncpuser'@'localhost';
FLUSH PRIVILEGES;


Vérification de la connexion MySQL :

mysql -u rncpuser -p

3️⃣ Configuration de Prisma

Mise à jour du fichier .env :

DATABASE_URL="mysql://rncpuser:RncpPass2025!@localhost:3306/rncpdb"


Synchronisation de Prisma avec la base de données :

npx prisma db pull
npx prisma migrate dev --name init

4️⃣ Gestion du projet avec GitHub

Création d’un nouveau dépôt GitHub.

Ajout du dépôt distant :

git remote add origin https://github.com/RehabAlzarqa/skillspoints.git


Commit initial et push :

git add .
git commit -m "Initial commit with local project files"
git push -u origin main

5️⃣ Dockerisation du projet

Création des fichiers :

Dockerfile

docker-compose.yml

Construction et lancement des containers :

docker-compose up --build

6️⃣ Vérifications supplémentaires

Vérification des utilisateurs et privilèges MySQL :

SELECT User, Host FROM mysql.user;
SHOW GRANTS FOR 'rncpuser'@'localhost';


Vérification de l’état des services et des containers Docker.