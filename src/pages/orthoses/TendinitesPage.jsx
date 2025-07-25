import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../../components/common/ImagePlaceholder';
import WarningBanner from '../../components/common/WarningBanner';

const TendinitesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero bg-base-200 py-16 min-h-[40vh]">
        <div className="hero-content container text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Tendinites de la Main & Poignet</h1>
            <p className="py-6 text-xl text-base-content/80">
              Tendinite de De Quervain, épicondylite et autres inflammations tendineuses : nos orthèses sur-mesure pour un soulagement efficace.
            </p>
            <Link to="/ortheses-main" className="btn btn-secondary">
              ← Retour aux orthèses de main
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <WarningBanner 
          title="Ordonnance médicale obligatoire"
          message="La prise en charge des tendinites nécessite une prescription médicale. Consultez votre médecin traitant ou un rhumatologue."
          type="warning"
        />

        {/* Section Qu'est-ce qu'une tendinite */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-4">Qu'est-ce qu'une tendinite ?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-base-content/90 mb-4">
                  Une tendinite est une inflammation d'un tendon, la structure qui relie le muscle à l'os. 
                  Dans la main et le poignet, les tendinites les plus fréquentes sont la tendinite de De Quervain 
                  (pouce) et l'épicondylite (coude).
                </p>
                <p className="text-base-content/90">
                  Ces inflammations surviennent souvent à cause de mouvements répétitifs, de surcharges mécaniques 
                  ou de positions prolongées. Elles peuvent être très douloureuses et limiter considérablement 
                  les activités quotidiennes.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64">
                  <ImagePlaceholder alt="Anatomie des tendons de la main" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Types de tendinites */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Principales tendinites de la main</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Tendinite de De Quervain</h3>
                  <p className="text-sm mb-3">
                    Inflammation des tendons du pouce (long abducteur et court extenseur du pouce).
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Douleur à la base du pouce</li>
                    <li>Douleur lors des mouvements de pince</li>
                    <li>Gonflement localisé</li>
                    <li>Difficulté à saisir des objets</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Épicondylite (Tennis Elbow)</h3>
                  <p className="text-sm mb-3">
                    Inflammation des tendons des muscles extenseurs du poignet et des doigts.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Douleur sur la face externe du coude</li>
                    <li>Douleur lors de la fermeture du poing</li>
                    <li>Faiblesse de la prise</li>
                    <li>Douleur à la palpation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Symptômes */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Symptômes des tendinites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Symptômes principaux :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Douleur localisée</strong> sur le trajet du tendon</li>
                  <li><strong>Douleur à la palpation</strong> du tendon</li>
                  <li><strong>Douleur lors des mouvements</strong> sollicitant le tendon</li>
                  <li><strong>Gonflement</strong> parfois visible</li>
                  <li><strong>Raideur</strong> matinale</li>
                  <li><strong>Faiblesse musculaire</strong> associée</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Facteurs favorisants :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mouvements répétitifs</li>
                  <li>Professions manuelles</li>
                  <li>Sports (tennis, golf, etc.)</li>
                  <li>Utilisation intensive du clavier/souris</li>
                  <li>Positions prolongées</li>
                  <li>Surmenage mécanique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section Nos Solutions */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Nos solutions orthétiques sur-mesure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Orthèse de repos</h3>
                  <p className="text-sm mb-3">
                    Immobilisation relative pour permettre la cicatrisation du tendon.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Mise au repos du tendon</li>
                    <li>Réduction de l'inflammation</li>
                    <li>Position de cicatrisation optimale</li>
                    <li>Confort maximal</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Orthèse fonctionnelle</h3>
                  <p className="text-sm mb-3">
                    Permet de continuer les activités tout en protégeant le tendon.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Maintien de la mobilité</li>
                    <li>Protection lors des gestes</li>
                    <li>Guidage des mouvements</li>
                    <li>Adaptation progressive</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <ImagePlaceholder alt="Exemples d'orthèses pour tendinites" />
            </div>
          </div>
        </div>

        {/* Section Traitement */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Approche thérapeutique complète</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Repos relatif</h3>
                <p className="text-sm">Orthèse pour mettre au repos le tendon inflammé</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Rééducation</h3>
                <p className="text-sm">Exercices progressifs pour renforcer et étirer</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-secondary-content rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Prévention</h3>
                <p className="text-sm">Orthèse fonctionnelle pour éviter les récidives</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Prévention */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Conseils de prévention</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Au quotidien :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Éviter les mouvements répétitifs prolongés</li>
                  <li>Faire des pauses régulières</li>
                  <li>Étirer les muscles avant et après l'activité</li>
                  <li>Maintenir une bonne posture</li>
                  <li>Utiliser des outils ergonomiques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">En cas de douleur :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Arrêter l'activité douloureuse</li>
                  <li>Appliquer du froid (glace)</li>
                  <li>Consulter rapidement</li>
                  <li>Ne pas forcer sur la douleur</li>
                  <li>Adapter son poste de travail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Souffrez-vous d'une tendinite ?</h2>
          <p className="text-base-content/70 mb-6">
            Nos orthèses sur-mesure peuvent accélérer votre guérison et prévenir les récidives.
          </p>
          <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </>
  );
};

export default TendinitesPage; 