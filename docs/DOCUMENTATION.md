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


🎯 Architecture logicielle choisie : MVC pour le backend et le frontend

L’ensemble du projet repose sur le modèle MVC (Model – View – Controller), appliqué à la fois au backend et au frontend, afin de garantir une structure claire, maintenable et cohérente entre les deux couches.

Backend (Node.js / Express)

Model : gère la structure et la manipulation des données (via Prisma et MySQL).

View : non utilisée directement, les réponses sont renvoyées en JSON.

Controller : contient la logique métier et gère les routes de l’API.

Frontend (Next.js / React)

Model : représente les données reçues depuis l’API.

View : affiche les données via les composants React et les pages Next.js.

Controller : gère les interactions et la logique via les hooks React.

💡 Ce choix d’architecture MVC unifiée facilite la compréhension du code, renforce la cohérence entre les couches et simplifie la maintenance du projet.
7️⃣ Vérifications supplémentaires

Vérification des utilisateurs et privilèges MySQL :

SELECT User, Host FROM mysql.user;
SHOW GRANTS FOR 'rncpuser'@'localhost';

         ┌─────────────┐
         │  Frontend   │
         │ (React/Next)│
         └─────┬───────┘
               │  fetch / axios
               ▼
         ┌─────────────┐
         │   Backend   │
         │ Next.js API │
         └─────┬───────┘
               │
   ┌───────────┴───────────┐
   │           │           │
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌────────────┐
│ /users  │ │ /courses│ │ /sessions│ │ /microcours│
│ route.js│ │ route.js│ │ route.js │ │ creation   │
│         │ │         │ │          │ │ route.js   │
│         │ │         │ │          │ │ apprentissage│
│         │ │         │ │          │ │ route.js   │
└─────────┘ └─────────┘ └─────────┘ └────────────┘
               │
               ▼
         ┌─────────────┐
         │ Database    │
         │ (MySQL/DB) │
         └─────────────┘
