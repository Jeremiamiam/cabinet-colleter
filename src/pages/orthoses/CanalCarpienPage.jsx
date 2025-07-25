import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../../components/common/ImagePlaceholder';
import WarningBanner from '../../components/common/WarningBanner';

const CanalCarpienPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero bg-base-200 py-16 min-h-[40vh]">
        <div className="hero-content container text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Syndrome du Canal Carpien</h1>
            <p className="py-6 text-xl text-base-content/80">
              La compression du nerf médian au niveau du poignet, une pathologie très fréquente qui peut être efficacement soulagée par des orthèses sur-mesure.
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
          message="La prise en charge du syndrome du canal carpien nécessite une prescription médicale. Consultez votre médecin traitant ou un neurologue."
          type="warning"
        />

        {/* Section Qu'est-ce que le canal carpien */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-4">Qu'est-ce que le syndrome du canal carpien ?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-base-content/90 mb-4">
                  Le syndrome du canal carpien est causé par la compression du nerf médian dans le canal carpien, 
                  un tunnel étroit situé au niveau du poignet. Cette compression entraîne des symptômes caractéristiques 
                  dans la main et les doigts.
                </p>
                <p className="text-base-content/90">
                  Le nerf médian contrôle la sensibilité et les mouvements de certains doigts. Sa compression peut 
                  survenir à cause de facteurs anatomiques, hormonaux, ou liés aux activités professionnelles ou sportives.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64">
                  <ImagePlaceholder alt="Anatomie du canal carpien" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Symptômes */}
        <div className="card bg-base-200 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Symptômes du syndrome du canal carpien</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Symptômes sensoriels :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Fourmillements</strong> dans le pouce, l'index, le majeur et la moitié de l'annulaire</li>
                  <li><strong>Engourdissement</strong> de ces mêmes doigts</li>
                  <li><strong>Douleurs</strong> qui remontent parfois vers l'avant-bras</li>
                  <li><strong>Pertes de sensibilité</strong> au niveau des pulpes des doigts</li>
                  <li><strong>Sensations de décharges électriques</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Symptômes moteurs :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Faiblesse de la main</strong> et difficulté à saisir</li>
                  <li><strong>Lâchage d'objets</strong> fréquent</li>
                  <li><strong>Atrophie musculaire</strong> dans les cas avancés</li>
                  <li><strong>Douleurs nocturnes</strong> qui réveillent</li>
                  <li><strong>Aggravation</strong> lors de certaines positions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section Facteurs de risque */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Facteurs de risque et causes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card bg-base-200">
                <div className="card-body">
                  <h3 className="card-title text-lg">Facteurs anatomiques</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Canal carpien étroit</li>
                    <li>Anomalies osseuses</li>
                    <li>Kystes ou tumeurs</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h3 className="card-title text-lg">Facteurs hormonaux</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Grossesse</li>
                    <li>Ménopause</li>
                    <li>Hypothyroïdie</li>
                    <li>Diabète</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h3 className="card-title text-lg">Facteurs mécaniques</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Travail sur ordinateur</li>
                    <li>Mouvements répétitifs</li>
                    <li>Vibrations</li>
                    <li>Positions prolongées</li>
                  </ul>
                </div>
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
                  <h3 className="card-title text-lg text-primary">Orthèse de repos nocturne</h3>
                  <p className="text-sm mb-3">
                    Portée la nuit pour maintenir le poignet en position neutre et éviter les compressions.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Position neutre du poignet</li>
                    <li>Réduction des douleurs nocturnes</li>
                    <li>Matériaux confortables</li>
                    <li>Moulage personnalisé</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-lg text-primary">Orthèse de positionnement diurne</h3>
                  <p className="text-sm mb-3">
                    Permet de continuer les activités tout en protégeant le nerf médian.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Maintien de la mobilité</li>
                    <li>Protection lors des gestes</li>
                    <li>Discrétion au quotidien</li>
                    <li>Adaptation professionnelle</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <ImagePlaceholder alt="Exemples d'orthèses pour canal carpien" />
            </div>
          </div>
        </div>

        {/* Section Quand consulter */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary mb-6">Quand consulter ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-error">Signes d'urgence :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Perte de sensibilité importante</li>
                  <li>Faiblesse musculaire marquée</li>
                  <li>Atrophie des muscles de la main</li>
                  <li>Douleurs intenses et continues</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-success">Consultation recommandée :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fourmillements récurrents</li>
                  <li>Douleurs nocturnes</li>
                  <li>Difficultés dans les gestes quotidiens</li>
                  <li>Symptômes qui s'aggravent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Souffrez-vous du syndrome du canal carpien ?</h2>
          <p className="text-base-content/70 mb-6">
            Nos orthèses sur-mesure peuvent considérablement améliorer vos symptômes et votre qualité de vie.
          </p>
          <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </>
  );
};

export default CanalCarpienPage; 