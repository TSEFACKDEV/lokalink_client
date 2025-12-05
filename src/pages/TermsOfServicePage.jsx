import React from 'react';
import { useAppStore } from '../store/appStore';
import { FaFileContract } from 'react-icons/fa';

const TermsOfServicePage = () => {
  const { isDarkMode } = useAppStore();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark' : 'bg-gray-50'} pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-3xl mb-6">
            <FaFileContract />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Conditions d'Utilisation
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Veuillez lire attentivement ces conditions avant d'utiliser nos services.
          </p>
        </div>

        <div className={`p-8 md:p-12 rounded-3xl shadow-xl backdrop-blur-md border ${
          isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-white/50'
        }`}>
          <div className={`space-y-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Accord de Service</h2>
              <p className="leading-relaxed">
                En utilisant Lokalink, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser notre plateforme. Ces conditions s'appliquent à tous les visiteurs, utilisateurs et autres personnes qui accèdent ou utilisent le service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Admissibilité</h2>
              <p className="mb-4">Pour utiliser Lokalink, vous devez:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Être âgé d'au moins 18 ans</li>
                <li>Avoir la capacité juridique de conclure un contrat</li>
                <li>Accepter ces conditions d'utilisation</li>
                <li>Respecter toutes les lois applicables au Cameroun</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Comptes Utilisateur</h2>
              <p className="leading-relaxed">
                Vous êtes responsable du maintien de la confidentialité de votre compte et de votre mot de passe. Vous acceptez d'être responsable de toutes les activités qui se produisent sous votre compte. Vous devez nous informer immédiatement de toute violation de sécurité ou utilisation non autorisée de votre compte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Utilisation Acceptable</h2>
              <p className="mb-4">Vous vous engagez à ne pas:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Utiliser la plateforme à des fins illégales ou non autorisées</li>
                <li>Harceler, abuser ou menacer d'autres utilisateurs</li>
                <li>Soumettre des contenus offensants, discriminatoires ou diffamatoires</li>
                <li>Contourner les mesures de sécurité de la plateforme</li>
                <li>Utiliser des robots ou autres moyens automatisés pour accéder au service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Éléments de Location</h2>
              <p className="leading-relaxed">
                Les propriétaires garantissent que les équipements mis en location sont en bon état de fonctionnement et conformes aux descriptions fournies. Les locataires s'engagent à utiliser les équipements avec soin et conformément aux instructions, et à les restituer dans l'état où ils ont été reçus, l'usure normale exceptée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Responsabilité</h2>
              <p className="leading-relaxed">
                Lokalink agit en tant qu'intermédiaire et ne peut être tenue responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l'utilisation ou de l'incapacité à utiliser la plateforme, ou de tout litige entre locataires et propriétaires.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Résiliation</h2>
              <p className="leading-relaxed">
                Lokalink se réserve le droit de résilier ou de suspendre l'accès à tout moment, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans s'y limiter, si vous violez les conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Droit Applicable</h2>
              <p className="leading-relaxed">
                Ces conditions d'utilisation sont régies et interprétées conformément aux lois de la République du Cameroun, sans égard à ses dispositions en matière de conflit de lois.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Modifications</h2>
              <p className="leading-relaxed">
                Lokalink se réserve le droit, à sa seule discrétion, de modifier ou de remplacer ces conditions à tout moment. Les modifications seront effectives dès qu'elles sont publiées sur cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Nous Contacter</h2>
              <p className="leading-relaxed">
                Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à : <a href="mailto:contact@lokalink.cm" className="text-primary hover:underline">contact@lokalink.cm</a>
              </p>
            </section>

            <div className={`p-6 rounded-2xl border-l-4 border-primary mt-8 ${
              isDarkMode ? 'bg-gray-900/50' : 'bg-blue-50'
            }`}>
              <h3 className="font-bold text-primary mb-2 text-lg">Respect des Lois Camerounaises</h3>
              <p className="text-sm">
                Lokalink opère conformément à la législation du Cameroun et s'engage à respecter les droits de chacun, notamment les droits des consommateurs et les normes de protection des données en vigueur.
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-8 text-center text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
