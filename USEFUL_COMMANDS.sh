#!/bin/bash
# Commandes utiles pour le développement de Lokalink

# ============================================
# INSTALLATION ET DÉMARRAGE
# ============================================

# Installation complète
npm install

# Démarrage développement
npm run dev

# Build production
npm run build

# Preview production
npm run preview

# Linting
npm run lint

# ============================================
# VÉRIFICATION
# ============================================

# Vérifier installation
node verify-installation.js

# Vérifier dépendances
npm list --depth=0

# Vérifier version Node
node --version

# Vérifier version npm
npm --version

# ============================================
# NETTOYAGE
# ============================================

# Nettoyer cache
npm cache clean --force

# Supprimer node_modules
rm -rf node_modules

# Supprimer package-lock.json
rm package-lock.json

# Réinstaller complètement
rm -rf node_modules package-lock.json && npm install

# ============================================
# DÉVELOPPEMENT
# ============================================

# Lancer dev server
npm run dev

# Lancer dev server sur un port spécifique
npm run dev -- --port 3000

# Lancer dev server exposé (accessible depuis d'autres machines)
npm run dev -- --host

# Lancer build en watch mode
npm run build -- --watch

# ============================================
# PRODUCTION
# ============================================

# Build optimisé
npm run build

# Preview build production localement
npm run preview

# Build avec sourcemaps
npm run build -- --sourcemap

# ============================================
# GIT WORKFLOW
# ============================================

# Initialiser git (si nécessaire)
git init

# Voir les changes
git status

# Ajouter tous les fichiers
git add .

# Commit avec message
git commit -m "feat: description des changements"

# Push vers remote
git push origin main

# ============================================
# DÉVELOPPEMENT AVANCÉ
# ============================================

# Ouvrir navigateur après démarrage
npm run dev -- --open

# Lancer avec HTTPS
npm run dev -- --https

# Démarrer avec environnement spécifique
NODE_ENV=development npm run dev

# Vérifier les fichiers non utilisés
npm run lint -- --fix

# ============================================
# DIAGNOSTIC
# ============================================

# Vérifier la taille du bundle
npm run build -- --report

# Voir les imports non utilisés
npm run lint -- --max-warnings 0

# Vérifier les dépendances obsolètes
npm outdated

# Vérifier les vulnérabilités
npm audit

# Fixer les vulnérabilités automatiquement
npm audit fix

# ============================================
# DÉPLOIEMENT
# ============================================

# Build pour production
npm run build

# Vérifier que le build fonctionne
npm run preview

# Nettoyer avant déploiement
rm -rf dist node_modules && npm install && npm run build

# ============================================
# UTILITAIRES
# ============================================

# Compter les lignes de code
find src -name "*.jsx" -o -name "*.js" -o -name "*.css" | xargs wc -l

# Lister tous les fichiers du projet
find . -not -path "*/node_modules/*" -not -path "*/.git/*" -type f | head -50

# Chercher un texte dans le code
grep -r "TODO" src/

# Chercher les console.log non supprimés
grep -r "console.log" src/

# ============================================
# NOTES
# ============================================

# Pour modifier le port de développement, ajouter dans vite.config.js:
# export default {
#   server: {
#     port: 3000,
#     host: 'localhost'
#   }
# }

# Pour ajouter une variable d'environnement:
# Créer fichier .env.local
# VITE_API_URL=http://localhost:3000

# Pour utiliser la variable:
# import.meta.env.VITE_API_URL
