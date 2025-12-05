// Vérifier que toutes les dépendances sont bien importables
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { create } from 'zustand';
import axios from 'axios';
import * as FaIcons from 'react-icons/fa';

console.log('✅ React:', React.version);
console.log('✅ React-DOM: OK');
console.log('✅ React Router: OK');
console.log('✅ Zustand: OK');
console.log('✅ Axios: OK');
console.log('✅ React Icons: OK');

export default true;
