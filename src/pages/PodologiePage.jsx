import React from 'react';
import ImagePlaceholder from '../components/common/ImagePlaceholder';

const PodologiePage = () => (
  <>
    {/* Hero Section */}
    <div className="hero bg-base-200 py-16 min-h-[50vh]">
      <div className="hero-content container flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <ImagePlaceholder />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">Podologie : Soins des Pieds & Prévention</h1>
          <p className="py-6 text-xl text-base-content/80">Le pôle podologie du cabinet Colléter, pour des soins de pieds professionnels, la prévention des pathologies et le bien-être au quotidien.</p>
          <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Prendre rendez-vous pour un soin</a>
        </div>
      </div>
    </div>
    
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section Pour Qui ? */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-primary">Pour qui s'adresse la podologie ?</h2>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Personnes souffrant de douleurs ou de gênes aux pieds</li>
              <li>Diabétiques nécessitant un suivi régulier</li>
              <li>Enfants et adolescents en croissance</li>
              <li>Sportifs sujets aux ampoules, mycoses, ongles incarnés</li>
              <li>Seniors pour la prévention des chutes et le confort de marche</li>
            </ul>
          </div>
        </div>

        {/* Section Soins Proposés */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-primary">Soins podologiques proposés</h2>
             <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Traitement des cors, durillons, callosités</li>
              <li>Prise en charge des ongles incarnés</li>
              <li>Soins des mycoses, verrues plantaires</li>
              <li>Entretien et coupe des ongles</li>
              <li>Conseils d'hygiène et prévention</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Consultation Podologique */}
      <div className="mt-12">
        <div className="card bg-base-200 shadow-xl w-full">
          <div className="card-body">
            <h2 className="card-title text-3xl text-center text-primary mb-4">La Consultation Podologique</h2>
            <p className="text-base-content/90 mb-4">
              Une consultation complète inclut un examen clinique approfondi, un diagnostic précis et des soins adaptés à votre situation. Nous prenons le temps d'expliquer chaque étape et de vous donner des conseils personnalisés.
            </p>
            <div className="flex justify-center">
               <div className="w-[800px] h-[400px] max-w-full">
                  <ImagePlaceholder />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Prévention & Conseils */}
      <div className="mt-12">
        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl text-primary mb-4">Prévention & Conseils Personnalisés</h2>
            <p className="text-base-content/90 max-w-2xl">
              Nous vous accompagnons dans la prévention des pathologies du pied et vous donnons des conseils adaptés à votre mode de vie, à vos chaussures et à vos activités.
            </p>
            <div className="card-actions justify-center mt-6">
              <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Prendre rendez-vous pour un soin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PodologiePage; 