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
Fichiers créés

Dockerfile → décrit comment construire et exécuter l'application Next.js.

.dockerignore → liste les fichiers à ignorer lors de la copie dans le container.

docker-compose.yml → orchestre le déploiement de tous les services.

Commandes principales
# Construire l'image Docker
docker build -t skillspoints-app .

# Lancer le container
docker run -d -p 80:80 skillspoints-app

# Lancer tous les services avec Docker Compose
docker-compose up -d

# Arrêter les containers
docker-compose down

# Vérifier les containers en cours d'exécution
docker ps

Résultat attendu

L’application Next.js est accessible sur 👉 http://localhost:8080
 (ou selon la configuration du port).

6️⃣ Architecture technique

L’architecture repose sur une approche client-serveur moderne, combinant Next.js, Node.js/Express, MySQL et Docker pour garantir portabilité, performance et évolutivité.

Structure générale

Frontend (Next.js) : interface utilisateur et consommation des données depuis l’API.

Backend (Node.js / Express) : logique métier, communication avec la base de données et endpoints REST.

Base de données (MySQL) : stockage des utilisateurs, mini-cours, points et récompenses.

Raisons du choix technique
Élément	Technologie choisie	Justification
Frontend	Next.js	Framework moderne basé sur React, SSR & SSG, performant et modulable pour des interfaces réactives.
Backend	Node.js / Express	Simple, flexible et performant pour construire des API REST.
Base de données	MySQL	Système relationnel fiable et adapté à la gestion structurée des données.
Orchestration	Docker	Facilite le déploiement et assure la compatibilité entre environnements.
Choix des patrons d’architecture

Backend : MVC (Model - View - Controller)

Model : gère les données et la communication avec la base de données.

View : non utilisée directement (réponses JSON).

Controller : logique métier et routes API.

Frontend : MVVM (Model - View - ViewModel)

Model : représente les données reçues depuis l’API.

View : composants d’interface utilisateur (Next.js pages & components).

ViewModel : gère les états, la logique de présentation et interactions via les hooks.

➡️ Cette combinaison MVC (backend) + MVVM (frontend/Next.js) assure une architecture claire, maintenable et moderne.

7️⃣ Vérifications supplémentaires

Vérification des utilisateurs et privilèges MySQL :

SELECT User, Host FROM mysql.user;
SHOW GRANTS FOR 'rncpuser'@'localhost';
