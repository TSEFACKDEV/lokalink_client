#!/usr/bin/env node

/**
 * Script de vérification de l'installation de Lokalink Client
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification de l\'installation de Lokalink Client...\n');

const requiredFiles = [
  'src/App.jsx',
  'src/main.jsx',
  'src/index.css',
  'src/App.css',
  'src/services/api.js',
  'src/store/appStore.js',
  'src/components/Navbar.jsx',
  'src/components/Footer.jsx',
  'src/components/EquipementCard.jsx',
  'src/pages/HomePage.jsx',
  'src/pages/EquipementsPage.jsx',
  'src/pages/ContactPage.jsx',
  'tailwind.config.js',
  'postcss.config.js',
  'vite.config.js',
];

const requiredDependencies = [
  'react',
  'react-dom',
  'react-router-dom',
  'react-icons',
  'axios',
  'zustand',
  'tailwindcss',
];

let allGood = true;

// Vérifier les fichiers
console.log('📄 Vérification des fichiers...');
requiredFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MANQUANT`);
    allGood = false;
  }
});

// Vérifier les dépendances
console.log('\n📦 Vérification des dépendances...');
const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const allDeps = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  requiredDependencies.forEach((dep) => {
    if (allDeps[dep]) {
      console.log(`  ✅ ${dep}: ${allDeps[dep]}`);
    } else {
      console.log(`  ❌ ${dep} - MANQUANT`);
      allGood = false;
    }
  });
} else {
  console.log('  ❌ package.json - MANQUANT');
  allGood = false;
}

// Résumé
console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('✅ Installation OK ! Vous pouvez démarrer avec: npm run dev');
} else {
  console.log('❌ Certains éléments manquent. Veuillez exécuter: npm install');
}
console.log('='.repeat(50) + '\n');

process.exit(allGood ? 0 : 1);
