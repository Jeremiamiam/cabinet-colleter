import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/common/ImagePlaceholder';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Cabinet Colléter: L'Alliance de l'Expertise</h1>
            <p className="py-6">
              Spécialistes en posturologie et orthèses de la main. Nous combinons 25 ans d'expérience et les dernières innovations pour vous offrir des solutions sur-mesure et un suivi d'excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#expertises" className="btn btn-primary">Découvrir nos expertises</a>
              <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Prendre Rendez-vous</a>
            </div>
          </div>
        </div>
      </div>

      {/* Aiguillage Section */}
      <div id="expertises" className="container mx-auto p-8 scroll-mt-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Comment pouvons-nous vous aider ?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Bloc Posturologie */}
          <div className="card bg-base-100 shadow-xl image-full">
            <figure><ImagePlaceholder /></figure>
            <div className="card-body items-center text-center justify-center">
              <h2 className="card-title text-3xl">Un problème de posture, dos, pieds ?</h2>
              <p>Découvrez comment notre analyse de la marche et nos semelles sur-mesure peuvent soulager vos douleurs chroniques et améliorer votre quotidien.</p>
              <div className="card-actions">
                <Link to="/posturologie-semelles" className="btn btn-primary">
                  Expertise Posturologie
                </Link>
              </div>
            </div>
          </div>

          {/* Bloc Orthèses Main */}
          <div className="card bg-base-100 shadow-xl image-full">
            <figure><ImagePlaceholder /></figure>
            <div className="card-body items-center text-center justify-center">
              <h2 className="card-title text-3xl">Une douleur à la main ou au poignet ?</h2>
              <p>Nous concevons des orthèses de main thermoformées sur-mesure pour traiter des pathologies comme la rhizarthrose, le canal carpien ou pour une récupération post-opératoire optimale.</p>
              <div className="card-actions">
                <Link to="/ortheses-main" className="btn btn-secondary">
                  Solutions pour la Main
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Notre Approche */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Notre Approche en 4 Étapes</h2>
          <ul className="steps steps-vertical lg:steps-horizontal w-full">
            <li className="step step-primary">
              <div className="text-left p-4">
                <h3 className="text-lg font-bold">Diagnostic Précis</h3>
                <p>Nous commençons par un échange approfondi pour comprendre l'origine de vos douleurs.</p>
              </div>
            </li>
            <li className="step step-primary">
              <div className="text-left p-4">
                <h3 className="text-lg font-bold">Analyse du Mouvement</h3>
                <p>Grâce à des outils de pointe, nous analysons votre posture en statique et en dynamique.</p>
              </div>
            </li>
            <li className="step step-primary">
              <div className="text-left p-4">
                <h3 className="text-lg font-bold">Fabrication Sur-Mesure</h3>
                <p>Chaque semelle, votre future botte secrète, est conçue artisanalement dans notre atelier.</p>
              </div>
            </li>
            <li className="step">
              <div className="text-left p-4">
                <h3 className="text-lg font-bold">Suivi Garanti</h3>
                <p>Nous assurons un suivi rigoureux pour garantir l'efficacité du traitement et votre satisfaction.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Section "Raisons de venir" */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Quelle que soit votre situation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">Avec Ordonnance</h3>
                <p>Envoyé par votre médecin ? Nous assurons la continuité de votre parcours de soin.</p>
              </div>
            </div>
             <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">Préparation Sportive</h3>
                <p>Optimisez vos performances et prévenez les blessures avant une épreuve.</p>
              </div>
            </div>
             <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">Suivi de Croissance</h3>
                <p>Nous accompagnons vos enfants pour corriger les déséquilibres dès le plus jeune âge.</p>
              </div>
            </div>
             <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">Recommandation</h3>
                <p>Le bouche-à-oreille est notre meilleure publicité. Découvrez pourquoi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Études de Cas */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Nos Dernières Réussites</h2>
            <p className="text-lg mt-2">Du cas complexe à l'amélioration du quotidien, découvrez des exemples concrets de notre travail.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cas d'étude 1 - Placeholder */}
            <div className="card bg-base-100 shadow-xl">
              <figure><ImagePlaceholder /></figure>
              <div className="card-body">
                <h2 className="card-title">Soulager une douleur chronique au genou</h2>
                <p>Comment des semelles adaptées ont permis à un coureur de reprendre la compétition sans douleur.</p>
                <div className="card-actions justify-end">
                  <Link to="/etudes-de-cas/1" className="btn btn-secondary">Lire la suite</Link>
                </div>
              </div>
            </div>
            {/* Cas d'étude 2 - Placeholder */}
            <div className="card bg-base-100 shadow-xl">
              <figure><ImagePlaceholder /></figure>
              <div className="card-body">
                <h2 className="card-title">Récupération post-opératoire d'un canal carpien</h2>
                <p>L'orthèse sur-mesure qui a changé la vie d'une musicienne professionnelle.</p>
                <div className="card-actions justify-end">
                  <Link to="/etudes-de-cas/2" className="btn btn-secondary">Lire la suite</Link>
                </div>
              </div>
            </div>
            {/* Cas d'étude 3 - Placeholder */}
            <div className="card bg-base-100 shadow-xl">
              <figure><ImagePlaceholder /></figure>
              <div className="card-body">
                <h2 className="card-title">Corriger la posture d'un adolescent</h2>
                <p>Un suivi sur 18 mois pour éviter l'aggravation d'une scoliose et redonner confiance.</p>
                <div className="card-actions justify-end">
                  <Link to="/etudes-de-cas/3" className="btn btn-secondary">Lire la suite</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/etudes-de-cas" className="btn btn-primary">Voir toutes nos études de cas</Link>
          </div>
        </div>
      </div>


      {/* Section Équipe */}
      <div className="py-16">
        <div className="container mx-auto p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Notre Équipe d'Experts</h2>
            <p className="text-lg mt-2">L'alliance de l'expérience et de l'innovation au service de votre bien-être.</p>
            <p className="mt-4 text-base-content/70">Nous travaillons en étroite collaboration avec votre médecin et les autres professionnels de santé pour un suivi complet.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-lg">
              <figure className="lg:w-1/3"><ImagePlaceholder /></figure>
              <div className="card-body lg:w-2/3">
                <h2 className="card-title">Julie Colléter</h2>
                <p className="font-bold text-secondary">L'Expérience & la Posture</p>
                <p>Avec plus de 25 ans d'expérience, Julie accompagne des générations de patients vers un meilleur équilibre postural.</p>
                <div className="card-actions justify-end mt-4">
                  <Link to="/cabinet" className="btn btn-ghost">En savoir plus</Link>
                </div>
              </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-lg">
              <figure className="lg:w-1/3"><ImagePlaceholder /></figure>
              <div className="card-body lg:w-2/3">
                <h2 className="card-title">Louis Chaudet</h2>
                <p className="font-bold text-secondary">L'Innovation & la Main</p>
                <p>Spécialiste des orthèses de la main, Louis apporte les techniques les plus récentes pour un traitement optimal.</p>
                <div className="card-actions justify-end mt-4">
                  <Link to="/cabinet" className="btn btn-ghost">En savoir plus</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Première Visite Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">C'est votre première visite ?</h2>
          <p className="py-4 max-w-2xl mx-auto">Nous savons qu'une première consultation peut être source de questions. Découvrez exactement comment se déroule un rendez-vous au cabinet, de votre arrivée à votre suivi.</p>
          <Link to="/consultation" className="btn btn-accent">Déroulement d'une consultation</Link>
        </div>
      </div>

    </div>
  );
};

export default HomePage; 