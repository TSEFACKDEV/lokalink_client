import React from 'react';
import { useAppStore } from '../store/appStore';
import { FaShieldAlt } from 'react-icons/fa';

const PrivacyPolicyPage = () => {
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
            <FaShieldAlt />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Politique de Confidentialité
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Votre vie privée est notre priorité. Voici comment nous protégeons vos données.
          </p>
        </div>

        <div className={`p-8 md:p-12 rounded-3xl shadow-xl backdrop-blur-md border ${
          isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-white/50'
        }`}>
          <div className={`space-y-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Lokalink ("nous", "nos" ou "la Plateforme") s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et sauvegardons vos informations lorsque vous visitez notre site web ou utilisez nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Informations que nous collectons</h2>
              <p className="mb-4">Nous collectons des informations que vous nous fournissez directement, notamment:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nom et informations de contact (email, téléphone)</li>
                <li>Informations de paiement (traitées de manière sécurisée)</li>
                <li>Profil utilisateur et préférences de location</li>
                <li>Communications avec le support client</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Utilisation de vos informations</h2>
              <p className="mb-4">Nous utilisons les informations collectées pour:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fournir, exploiter et améliorer nos services</li>
                <li>Traiter les transactions et gérer les réservations</li>
                <li>Envoyer des communications marketing (avec votre consentement explicite)</li>
                <li>Prévenir la fraude et assurer la sécurité de la plateforme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Partage de vos informations</h2>
              <p className="leading-relaxed">
                Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager des informations génériques agrégées non liées à des informations d'identification personnelle concernant les visiteurs et les utilisateurs avec nos partenaires commerciaux, affiliés de confiance et annonceurs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Sécurité de vos données</h2>
              <p className="leading-relaxed">
                Nous adoptons des pratiques de collecte, de stockage et de traitement des données appropriées et des mesures de sécurité pour protéger contre l'accès non autorisé, l'altération, la divulgation ou la destruction de vos informations personnelles, nom d'utilisateur, mot de passe, informations de transaction et données stockées sur notre site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Vos droits</h2>
              <p className="mb-4">Conformément à la législation en vigueur, vous avez le droit de:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accéder à vos données personnelles</li>
                <li>Corriger les informations inexactes</li>
                <li>Demander la suppression de vos données ("Droit à l'oubli")</li>
                <li>Vous opposer à certains traitements de vos données</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Modifications de cette politique</h2>
              <p className="leading-relaxed">
                Lokalink a la discrétion de mettre à jour cette politique de confidentialité à tout moment. Lorsque nous le ferons, nous réviserons la date de mise à jour au bas de cette page. Nous vous encourageons à consulter fréquemment cette page pour rester informé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Nous contacter</h2>
              <p className="leading-relaxed">
                Si vous avez des questions concernant cette politique de confidentialité, les pratiques de ce site ou vos relations avec ce site, veuillez nous contacter à : <a href="mailto:contact@lokalink.cm" className="text-primary hover:underline">contact@lokalink.cm</a>
              </p>
            </section>
          </div>
        </div>

        <div className={`mt-8 text-center text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
