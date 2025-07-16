import React from 'react';

const ProPage = () => (
  <div className="p-8">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Espace Professionnels de Santé</h1>
      <p className="py-6 text-lg">Collaborons pour offrir le meilleur traitement à vos patients.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-12">
      <div className="card bg-base-200 shadow">
        <div className="card-body">
          <h2 className="card-title">Pourquoi nous référer un patient ?</h2>
          <p>Notre cabinet s'engage à fournir un bilan postural et biomécanique complet, des solutions d'orthèses sur-mesure de haute technicité et un suivi rigoureux en collaboration avec vous.</p>
          <ul>
            <li className="mt-2">✅ Compte-rendu détaillé systématique.</li>
            <li className="mt-1">✅ Ligne directe pour un suivi conjoint.</li>
            <li className="mt-1">✅ Prise en charge rapide et spécialisée.</li>
          </ul>
        </div>
      </div>
      <div className="card bg-base-200 shadow">
        <div className="card-body">
          <h2 className="card-title">Nos Domaines d'Expertise</h2>
          <p>Nous intervenons sur un large spectre de pathologies, notamment :</p>
          <div className="flex gap-2 flex-wrap mt-2">
              <div className="badge badge-primary">Posturologie du Sportif</div>
              <div className="badge badge-primary">Rhizarthrose</div>
              <div className="badge badge-primary">Canal Carpien</div>
              <div className="badge badge-secondary">Fasciite Plantaire</div>
              <div className="badge badge-secondary">Syndrome de l'essuie-glace</div>
              <div className="badge badge-accent">Suites Post-Opératoires (Main)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProPage; 