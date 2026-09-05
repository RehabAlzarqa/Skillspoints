# SkillsPoints Project Documentation

## 1️⃣ Project Initialization
- Creation of the Next.js project with all required configuration files:
  - `package.json`
  - `next.config.mjs`
  - `src/`
  - `public/`
- Installation of Prisma dependencies:
```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

## 2️⃣ MySQL Database Setup

Installing MySQL via Homebrew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install mysql
brew services start mysql
```

Database & User Creation:
```sql
CREATE DATABASE rncpdb;
CREATE USER 'rncpuser'@'localhost' IDENTIFIED BY 'RncpPass2025!';
GRANT ALL PRIVILEGES ON rncpdb.* TO 'rncpuser'@'localhost';
FLUSH PRIVILEGES;
```

Verify MySQL Connection:
```bash
mysql -u rncpuser -p
```

## 3️⃣ Prisma Configuration

Update `.env` file:
```env
DATABASE_URL="mysql://rncpuser:RncpPass2025!@localhost:3306/rncpdb"
```

Sync Prisma with Database:
```bash
npx prisma db pull
npx prisma migrate dev --name init
```

## 4️⃣ Version Control with Git & GitHub

Add remote repository:
```bash
git remote add origin https://github.com/RehabAlzarqa/skillspoints.git
```

Commit & Push:
```bash
git add .
git commit -m "Initial commit with local project files"
git push -u origin main
```

## 5️⃣ Dockerization

Created Files:
- `Dockerfile` → Describes how to build and execute the Next.js application.
- `.dockerignore` → Lists files to exclude when building container context.
- `docker-compose.yml` → Orchestrates multi-container deployment.

Main Commands:
```bash
# Build Docker image
docker build -t skillspoints-app .

# Run container
docker run -d -p 80:80 skillspoints-app

# Start all services with Docker Compose
docker-compose up -d

# Stop containers
docker-compose down

# Check running containers
docker ps
```

Expected Result:
Access the Next.js application on 👉 `http://localhost:8080` (or configured port).

## 6️⃣ Technical Architecture

The architecture is built on a modern client-server model, combining Next.js, Node.js API routes, MySQL, and Docker for portability, speed, and scalability.

General Structure:
- **Frontend (Next.js)**: User interface and data rendering from API.
- **Backend (Next.js API Routes / Node.js)**: Business logic, database communications, and REST endpoints.
- **Database (MySQL / Prisma)**: Persistent storage for users, micro-courses, points, and rewards.

Technical Rationale:
- **Frontend (Next.js)**: React-based framework supporting SSR/SSG and high performance.
- **Backend (Node.js API)**: Lightweight and flexible for REST endpoints.
- **Database (MySQL)**: Reliable relational engine ideal for structured user and reward data.
- **Orchestration (Docker)**: Guarantees consistency across dev and production environments.

Software Design Pattern: MVC (Model-View-Controller)
- **Model**: Manages data structures and operations (via Prisma and MySQL).
- **View**: Renders UI components using React and Tailwind CSS.
- **Controller**: Manages application logic and API route handlers.

```
         ┌─────────────┐
         │  Frontend   │
         │ (React/Next)│
         └─────┬───────┘
               │  fetch / API
               ▼
         ┌─────────────┐
         │   Backend   │
         │ Next.js API │
         └─────┬───────┘
               │
   ┌───────────┴───────────┐
   │           │           │
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌────────────┐
│ /users  │ │ /courses│ │ /auth   │ │ /MicroCourse│
│ route.ts│ │ route.ts│ │ route.ts│ │ route.ts   │
└─────────┘ └─────────┘ └─────────┘ └────────────┘
               │
               ▼
         ┌─────────────┐
         │ Database    │
         │ (MySQL/DB)  │
         └─────────────┘
```

