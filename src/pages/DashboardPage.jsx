import React from 'react';

const DashboardPage = () => {
  return (
    <div className="bg-light min-h-screen pt-0">
      <div className="flex min-h-[calc(100vh-96px)]">
        <aside className="hidden lg:flex w-56 bg-white shadow-lg flex-col">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/locaklinkBlack.png" alt="Lokalink" className="w-28 h-auto" />
            </div>
            <nav className="space-y-1">
              <div className="text-secondary/50 text-xs uppercase mb-2 font-semibold">MENU</div>
              <a href="#" className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <rect x="3" y="3" width="6" height="6" />
                  <rect x="11" y="3" width="6" height="6" />
                  <rect x="3" y="11" width="6" height="6" />
                  <rect x="11" y="11" width="6" height="6" />
                </svg>
                <span className="font-medium">Tableau de bord</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-secondary/80 hover:bg-light rounded-lg text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Statistiques</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-secondary/80 hover:bg-light rounded-lg text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>Équipements</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-secondary/80 hover:bg-light rounded-lg text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Réservations</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-secondary/80 hover:bg-light rounded-lg text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>PME Partenaires</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-secondary/80 hover:bg-light rounded-lg text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Revenus</span>
              </a>
              <div className="pt-3">
                <a href="#" className="flex items-center gap-2 px-3 py-2 text-secondary/80 hover:bg-light rounded-lg text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span>Notifications</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-3 py-2 text-secondary/80 hover:bg-light rounded-lg text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Paramètres</span>
                </a>
              </div>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-3 sm:p-6 overflow-auto">
          <div className="lg:hidden flex items-center justify-between mb-4 pb-3 border-b border-light">
            <img src="/images/locaklinkBlack.png" alt="Lokalink" className="w-28 h-auto" />
            <div className="flex items-center gap-2">
              <button className="relative p-2 hover:bg-light rounded-lg">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
              </button>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" className="w-9 h-9 rounded-full" />
            </div>
          </div>
          <header className="hidden lg:flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-secondary mb-0.5">Tableau de bord</h1>
              <p className="text-secondary/60 text-xs">Gérez vos équipements et suivez vos performances</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input type="text" placeholder="Rechercher un équipement..." className="pl-9 pr-3 py-2 border border-light rounded-lg w-64 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                <svg className="w-4 h-4 text-secondary/50 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="relative p-2 hover:bg-light rounded-lg">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
              </button>
              <div className="flex items-center gap-2.5">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" className="w-9 h-9 rounded-full" />
                <div>
                  <div className="font-semibold text-secondary text-sm">PME TechPro</div>
                  <div className="text-secondary/60 text-xs">techpro@gmail.com</div>
                </div>
              </div>
            </div>
          </header>
          <div className="lg:hidden mb-4">
            <h1 className="text-xl font-bold text-secondary mb-1">Tableau de bord</h1>
            <p className="text-secondary/60 text-xs">Gérez vos équipements et suivez vos performances</p>
          </div>
          <div className="flex gap-4 mb-4 border-b border-light overflow-x-auto">
            <button className="pb-2 px-1 text-primary border-b-2 border-primary font-medium text-sm whitespace-nowrap">Vue d'ensemble</button>
            <button className="pb-2 px-1 text-secondary/60 hover:text-secondary text-sm whitespace-nowrap">Équipements actifs</button>
            <button className="pb-2 px-1 text-secondary/60 hover:text-secondary text-sm whitespace-nowrap">Demandes en attente</button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-secondary/70 text-xs">Équipements disponibles</div>
                <svg className="w-4 h-4 text-secondary/40 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-secondary">24</div>
                  <div className="text-primary text-xs">↑ 12%</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-secondary/70 text-xs">Réservations actives</div>
                <svg className="w-4 h-4 text-secondary/40 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-secondary">18</div>
                  <div className="text-primary text-xs">↑ 8%</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-secondary/70 text-xs">Revenus du mois</div>
                <svg className="w-4 h-4 text-secondary/40 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-secondary">2.4M<span className="text-xs text-secondary/60">XAF</span></div>
                  <div className="text-primary text-xs">↑ 15%</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-secondary/70 text-xs">Taux d'occupation</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#F2F2F2" strokeWidth="3" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#F7931E" strokeWidth="3" strokeDasharray="75 25" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-secondary">75%</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-secondary">18<span className="text-xs text-secondary/60">/24</span></div>
                  <div className="text-secondary/60 text-xs">Équipements loués</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-secondary/70 text-xs">PME partenaires</div>
                <svg className="w-4 h-4 text-secondary/40 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-secondary">42</div>
                  <div className="text-primary text-xs">↑ 5 nouveaux</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-secondary font-semibold mb-3 text-sm">Nouvelles demandes</h3>
              <div className="bg-primary text-white p-3 rounded-lg mb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs">Demandes en attente</div>
                    <div className="text-xs opacity-90">à valider</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-medium text-secondary">Bétonneuse Pro</div>
                      <div className="text-secondary/60">PME Construction+</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button className="bg-primary/10 text-primary p-1.5 rounded hover:bg-primary/20">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="bg-secondary/10 text-secondary p-1.5 rounded hover:bg-secondary/20">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-medium text-secondary">Échafaudage 6m</div>
                      <div className="text-secondary/60">BTP Services</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button className="bg-primary/10 text-primary p-1.5 rounded hover:bg-primary/20">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="bg-secondary/10 text-secondary p-1.5 rounded hover:bg-secondary/20">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <button className="w-full mt-3 text-primary text-xs font-medium hover:underline">Voir toutes les demandes</button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-secondary font-semibold text-sm">Performance</h3>
                <button className="text-secondary/50 hover:text-secondary">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <div className="text-xs text-secondary/70 mb-0.5">Taux de satisfaction</div>
                  <div className="text-2xl font-bold text-secondary">96%</div>
                </div>
                <div>
                  <div className="text-xs text-secondary/70 mb-0.5">Note moyenne</div>
                  <div className="text-2xl font-bold text-secondary">4.8<span className="text-sm text-secondary/60">/5</span></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-secondary/70">Temps de réponse</span>
                  <span className="font-semibold text-secondary">2h</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-secondary/70">Taux de disponibilité</span>
                  <span className="font-semibold text-secondary">94%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-secondary font-semibold mb-3 text-sm">Activité récente</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-secondary">Nouvelle réservation confirmée</div>
                    <div className="text-secondary/60">Grue mobile • BuildCo</div>
                    <div className="text-secondary/50">Il y a 2 heures</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-secondary">Équipement consulté</div>
                    <div className="text-secondary/60">Marteau-piqueur • 5 vues</div>
                    <div className="text-secondary/50">Il y a 4 heures</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-secondary">Paiement reçu</div>
                    <div className="text-secondary/60">450,000 XAF • ConstructPro</div>
                    <div className="text-secondary/50">Hier</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-secondary font-semibold text-sm">Équipements les plus demandés</h3>
              <button className="text-primary text-xs font-medium hover:underline">Voir tout</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: 'Grue mobile', res: '35 réservations', status: 'Disponible', statusClass: 'text-primary', price: '125,000 XAF/jour' },
                { title: 'Bétonneuse', res: '28 réservations', status: 'Loué', statusClass: 'text-secondary', price: '45,000 XAF/jour' },
                { title: 'Échafaudage', res: '22 réservations', status: 'Disponible', statusClass: 'text-primary', price: '15,000 XAF/jour' },
                { title: 'Compacteur', res: '19 réservations', status: 'Disponible', statusClass: 'text-primary', price: '35,000 XAF/jour' },
              ].map((i, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-3 hover:border-primary transition-colors cursor-pointer">
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-2"></div>
                  <h4 className="font-semibold text-secondary text-sm mb-1">{i.title}</h4>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-secondary/60">{i.res}</span>
                    <span className={`${i.statusClass} font-medium`}>{i.status}</span>
                  </div>
                  <div className="text-primary font-bold text-sm">{i.price}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-light px-4 py-2 grid grid-cols-5 gap-2">
            <a href="#" className="flex flex-col items-center gap-1 text-primary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <rect x="3" y="3" width="6" height="6" />
                <rect x="11" y="3" width="6" height="6" />
                <rect x="3" y="11" width="6" height="6" />
                <rect x="11" y="11" width="6" height="6" />
              </svg>
              <span className="text-xs">Accueil</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-secondary/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="text-xs">Équipements</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-secondary/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">Réservations</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-secondary/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs">Revenus</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-secondary/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs">Paramètres</span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
