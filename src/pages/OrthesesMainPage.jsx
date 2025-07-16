import React from 'react';
import ImagePlaceholder from '../components/common/ImagePlaceholder';

const OrthesesMainPage = () => (
  <>
    {/* Hero Section */}
    <div className="hero bg-base-200 py-16 min-h-[50vh]">
      <div className="hero-content container flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <ImagePlaceholder />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary">Expertise en Orthèses de la Main & Membre Supérieur</h1>
          <p className="py-6 text-xl text-base-content/80">Le pôle d'innovation de Louis Chaudet, pour des solutions sur-mesure et de haute technicité.</p>
          <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Prendre rendez-vous pour une orthèse</a>
        </div>
      </div>
    </div>

    <div className="container mx-auto p-8">
      {/* Section Qu'est-ce qu'une orthèse ? */}
      <div className="mt-12">
        <div className="card lg:card-side bg-base-200 shadow-xl w-full">
          <figure className="lg:w-1/2">
            <ImagePlaceholder />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-3xl text-secondary mb-4">Qu'est-ce qu'une orthèse sur-mesure ?</h2>
            <p className="text-base-content/90 mb-4">
              Contrairement aux solutions standards que vous trouvez en pharmacie, une orthèse sur-mesure est moulée directement sur vous. Elle est parfaitement adaptée à votre morphologie et à votre pathologie, garantissant un confort optimal et une efficacité maximale. C'est un véritable appareillage de haute précision.
            </p>
          </div>
        </div>
      </div>

      {/* Section Pathologies Traitées */}
      <div className="my-12">
         <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary">Pathologies traitées par nos orthèses</h2>
             <ul className="list-disc pl-5 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              <li>Rhizarthrose (arthrose du pouce)</li>
              <li>Syndrome du Canal Carpien</li>
              <li>Tendinites (De Quervain, épicondylite)</li>
              <li>Lésions des ligaments et doigts à ressaut</li>
              <li>Immobilisation post-opératoire ou après une fracture</li>
            </ul>
          </div>
        </div>
      </div>

       {/* Section Processus */}
      <div className="mt-12">
        <div className="card bg-base-100 shadow-xl w-full">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl text-secondary mb-4">Un processus de fabrication artisanal et technique</h2>
            <p className="text-base-content/90 mb-6 max-w-3xl">
              Nous thermoformons chaque orthèse sur place, en quelques minutes. Ce processus garantit un ajustement parfait et une mise en place immédiate de votre traitement.
            </p>
             <div className="flex justify-center">
               <div className="w-[800px] h-[400px] max-w-full">
                   <ImagePlaceholder />
                </div>
             </div>
            <p className="text-sm mt-4 text-center text-base-content/70 max-w-2xl">
              Nous travaillons en étroite collaboration avec les chirurgiens et les médecins pour assurer une prise en charge optimale.
            </p>
            <div className="card-actions justify-center mt-6">
              <a href="https://www.doctolib.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Prendre rendez-vous pour une orthèse</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default OrthesesMainPage; 