import React, { useEffect, useMemo, useState } from 'react';
import { useAppStore } from '../store/appStore';
import { equipementService, reservationService, categoryService, pmeService, avisService } from '../services/api';
import { Link } from 'react-router-dom';
import { FaBox, FaListUl, FaShoppingCart, FaUsers, FaStar, FaSyncAlt } from 'react-icons/fa';

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <div className="p-6 rounded-2xl border shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{label}</p>
        <p className="mt-2 text-3xl font-extrabold">{value}</p>
      </div>
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-white ${accent}`}>
        <Icon />
      </div>
    </div>
  </div>
);

const SectionCard = ({ title, children }) => (
  <div className="p-6 rounded-2xl border shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
    <h3 className="text-lg font-bold mb-4">{title}</h3>
    {children}
  </div>
);

const DashboardPage = () => {
  const { isDarkMode, setIsLoading, isLoading } = useAppStore();
  const [equipements, setEquipements] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pmes, setPmes] = useState([]);
  const [avis, setAvis] = useState([]);
  const [error, setError] = useState(null);

  const refresh = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const [eq, res, cat, pm, av] = await Promise.all([
        equipementService.getAllEquipements(1, 8),
        reservationService.getAllReservations(),
        categoryService.getAllCategories(),
        pmeService.getAllPMEs(),
        avisService.getAllAvis(),
      ]);

      if (eq.data?.data?.equipements) setEquipements(eq.data.data.equipements);
      if (res.data?.data) setReservations(res.data.data);
      if (cat.data?.data) setCategories(cat.data.data);
      if (pm.data?.data) setPmes(pm.data.data);
      if (av.data?.data) setAvis(av.data.data);
    } catch (e) {
      setError('Impossible de charger les données');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const kpis = useMemo(() => ({
    totalEquipements: equipements.length,
    totalReservations: Array.isArray(reservations) ? reservations.length : 0,
    totalCategories: categories.length,
    totalPME: pmes.length,
    totalAvis: avis.length,
  }), [equipements, reservations, categories, pmes, avis]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark text-white' : 'bg-gray-50 text-gray-900'} pt-24 pb-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">Dashboard</h1>
            <p className={`mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Vue d’ensemble des activités</p>
          </div>
          <button onClick={refresh} className="inline-flex items-center px-4 py-2 rounded-xl bg-primary text-white font-semibold hover:bg-primaryHover">
            <FaSyncAlt className="mr-2" /> Rafraîchir
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 border border-red-200 dark:border-red-800">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatCard icon={FaBox} label="Équipements" value={kpis.totalEquipements} accent="bg-blue-500" />
          <StatCard icon={FaShoppingCart} label="Réservations" value={kpis.totalReservations} accent="bg-emerald-500" />
          <StatCard icon={FaListUl} label="Catégories" value={kpis.totalCategories} accent="bg-indigo-500" />
          <StatCard icon={FaUsers} label="PME" value={kpis.totalPME} accent="bg-purple-500" />
          <StatCard icon={FaStar} label="Avis" value={kpis.totalAvis} accent="bg-yellow-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <SectionCard title="Derniers équipements">
              {equipements.length > 0 ? (
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <table className="min-w-full text-sm">
                    <thead className="text-left text-gray-500 dark:text-gray-400">
                      <tr>
                        <th className="py-2 pr-4 font-semibold">Nom</th>
                        <th className="py-2 pr-4 font-semibold">Catégorie</th>
                        <th className="py-2 pr-4 font-semibold">Prix/jour</th>
                        <th className="py-2 pr-4 font-semibold">Statut</th>
                        <th className="py-2 pr-4 font-semibold"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {equipements.slice(0, 8).map((e) => (
                        <tr key={e._id} className="border-t dark:border-gray-700">
                          <td className="py-3 pr-4 font-medium">{e.nom}</td>
                          <td className="py-3 pr-4">{e.categorie?.nom || '-'}</td>
                          <td className="py-3 pr-4">{(e.prixParJour || 0).toLocaleString()} FCFA</td>
                          <td className="py-3 pr-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${e.disponibilite === 'disponible' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
                              {e.disponibilite === 'disponible' ? 'Disponible' : 'Indispo'}
                            </span>
                          </td>
                          <td className="py-3 pr-4">
                            <Link to={`/equipement/${e._id}`} className="text-primary font-semibold">Voir</Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">Aucun équipement</p>
              )}
            </SectionCard>

            <SectionCard title="Dernières réservations">
              {Array.isArray(reservations) && reservations.length > 0 ? (
                <ul className="divide-y dark:divide-gray-700">
                  {reservations.slice(0, 6).map((r, idx) => (
                    <li key={idx} className="py-3 flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{r?.equipement?.nom || 'Équipement'}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{r?.status || r?.statut || 'En attente'}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{(r?.montant || 0).toLocaleString()} FCFA</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">Aucune réservation</p>
              )}
            </SectionCard>
          </div>

          <div className="space-y-6">
            <SectionCard title="Catégories">
              {categories.length > 0 ? (
                <ul className="space-y-2">
                  {categories.slice(0, 8).map((c) => (
                    <li key={c._id} className="flex items-center justify-between text-sm">
                      <span className="font-medium">{c.nom}</span>
                      <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{c.slug || ''}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">Aucune catégorie</p>
              )}
            </SectionCard>

            <SectionCard title="PME">
              {pmes.length > 0 ? (
                <ul className="space-y-2">
                  {pmes.slice(0, 6).map((p) => (
                    <li key={p._id} className="flex items-center justify-between text-sm">
                      <span className="font-medium">{p.nom || p.name || 'PME'}</span>
                      <span className="text-gray-500 dark:text-gray-400">{p.secteur || p.industry || ''}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">Aucune PME</p>
              )}
            </SectionCard>

            <SectionCard title="Avis récents">
              {avis.length > 0 ? (
                <ul className="space-y-3">
                  {avis.slice(0, 6).map((a, i) => (
                    <li key={i} className="text-sm">
                      <p className="font-semibold flex items-center"><FaStar className="text-yellow-400 mr-2" /> {(a.note || a.rating || 0).toFixed ? (a.note || a.rating || 0).toFixed(1) : a.note || a.rating || 0}</p>
                      <p className="text-gray-500 dark:text-gray-400">{a.commentaire || a.comment || ''}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">Aucun avis</p>
              )}
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
