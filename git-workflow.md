# 📄 Git Workflows Documentation

---

## 1. Introduction

A Git workflow defines how a team uses branches to develop features, fix bugs, and release code.  
Choosing the right workflow improves collaboration, code stability, and delivery speed.

---

## ✅ Team decision

For this project, we use **Git Flow** as the official workflow.

---

## 2. Git Flow


::contentReference[oaicite:0]{index=0}


Git Flow was introduced by  
**:contentReference[oaicite:1]{index=1}**.

---

### 🔹 Overview

Git Flow is a structured branching model designed for projects with planned releases.  
It uses multiple long-lived branches to separate development, production, and maintenance work.

---

### 🔹 Main branches

- **main** → production-ready code  
- **develop** → integration branch for features  

Other supporting branches:

- **feature/\*** → new features  
- **release/\*** → release preparation  
- **hotfix/\*** → urgent production fixes  

---

### 🔹 Branch rules

- `feature/*` branches are created from **develop**
- `release/*` branches are created from **develop**
- `hotfix/*` branches are created from **main**

---

### 🔹 Merge rules

- `feature/*` → merge into **develop**
- `release/*` → merge into **main** and **develop**
- `hotfix/*` → merge into **main** and **develop**

---

### 🔹 Diagram

main ────────────────●──────────────●────
\
develop ─────●────●────●────●────●────●───
\ \
feature/a feature/b feature/c


---

## 3. Trunk Based Development (for comparison)

### 🔹 Overview

Trunk Based Development is a lightweight workflow where all developers integrate their changes frequently into a single branch called the trunk (usually main).

Feature branches are very short-lived and merged back quickly.

---

### 🔹 Diagram

   main (trunk)
  /   |    \
feat/a feat/b feat/c
\ | /
─── merge ───

---

## 4. Comparison

| Aspect | Git Flow | Trunk Based Development |
|------|--------|------------------------|
| Main branches | main, develop | main only |
| Release style | Scheduled releases | Continuous delivery |
| Complexity | Higher | Lower |
| Branch lifetime | Long-lived branches | Very short-lived branches |
| Best for | Large teams, versioned products | Small teams, fast-moving products |
| CI/CD fit | Possible | Ideal |

---

## 5. When to use each

### ✅ Use Git Flow when:

- Your project has planned or versioned releases  
- Multiple developers work in parallel  
- You need strong separation between development and production  
- You maintain multiple versions  

### 🚀 Use Trunk Based Development when:

- You deploy frequently  
- You use CI/CD pipelines  
- You want fast feedback and simple workflows  
- Your team is small  

---

## 6. Summary

For this project, **Git Flow** is the selected workflow.

Git Flow provides structure and control through clear separation of development, release, and production branches, while Trunk Based Development focuses on simplicity and speed.  
The right choice depends on team size, release strategy, and project complexity.
