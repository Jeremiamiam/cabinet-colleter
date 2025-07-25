import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/common/ImagePlaceholder';

const CabinetPage = () => (
  <>
    <div className="hero bg-base-200 min-h-[50vh]">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold">L'Humain derrière l'Expertise</h1>
          <p className="py-6 text-lg">Découvrez l'histoire, les valeurs et l'environnement d'un cabinet qui place le patient au cœur de sa pratique.</p>
        </div>
      </div>
    </div>
    
    <div className="container mx-auto p-8">
        {/* Section Notre Histoire */}
        <div className="card lg:card-side bg-base-100 shadow-xl mb-16">
          <figure className="lg:w-1/3">
            <ImagePlaceholder />
          </figure>
          <div className="card-body lg:w-2/3">
            <h2 className="card-title text-3xl">Notre Histoire</h2>
            <p className="mt-4">Fondé il y a plus de 25 ans par Julie Colléter, le cabinet a toujours eu pour vocation d'offrir une expertise de pointe en podologie et posturologie. Animés par la volonté de proposer une prise en charge globale, nous avons récemment accueilli Louis Chaudet, spécialiste des orthèses de la main, pour allier expérience et innovation.</p>
            <p>Cette alliance de compétences nous permet aujourd'hui de vous proposer un pôle d'excellence unique, dédié à l'analyse du mouvement et aux solutions sur-mesure pour l'ensemble du corps.</p>
          </div>
        </div>
        
        {/* Section Philosophie */}
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Notre Philosophie</h2>
            <p className="text-lg mt-2 text-base-content/70">Trois piliers guident notre pratique au quotidien.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Valeur 1 */}
            <div className="card bg-base-100 text-center shadow">
                <div className="card-body">
                    {/* Icon Placeholder */}
                    <div className="p-4 bg-primary text-primary-content rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/><path d="m16 10-4 4-4-4"/></svg>
                    </div>
                    <h3 className="card-title justify-center mt-4">Proximité</h3>
                    <p>Nous croyons en une relation de confiance et d'écoute pour un accompagnement personnalisé.</p>
                </div>
            </div>
             {/* Valeur 2 */}
            <div className="card bg-base-100 text-center shadow">
                <div className="card-body">
                     {/* Icon Placeholder */}
                    <div className="p-4 bg-primary text-primary-content rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="m16 10-4 4L8 10"/></svg>
                    </div>
                    <h3 className="card-title justify-center mt-4">Rigueur</h3>
                    <p>Nos diagnostics s'appuient sur des analyses précises et des technologies de pointe.</p>
                </div>
            </div>
             {/* Valeur 3 */}
            <div className="card bg-base-100 text-center shadow">
                <div className="card-body">
                     {/* Icon Placeholder */}
                    <div className="p-4 bg-primary text-primary-content rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-8m0-4V4m8 8h-8m-4 0H4"/></svg>
                    </div>
                    <h3 className="card-title justify-center mt-4">Suivi</h3>
                    <p>Nous vous accompagnons à chaque étape pour garantir l'efficacité de nos traitements.</p>
                </div>
            </div>
        </div>

        {/* Section Visite */}
        <div className="bg-base-200 rounded-box p-8 lg:p-16 my-16">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold">Un Espace Conçu Pour Vous</h2>
                <p className="text-lg mt-2 text-base-content/70">Nous vous accueillons dans un environnement moderne et chaleureux.</p>
            </div>
            <div className="max-w-4xl mx-auto h-96">
                <ImagePlaceholder className="rounded-box shadow-lg" />
            </div>
        </div>

        {/* Section CTA Experts */}
        <div className="text-center">
            <h2 className="text-4xl font-bold">Découvrez nos Pôles d'Expertise</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                {/* Expert 1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h3 className="card-title">Julie Colléter</h3>
                        <p className="font-bold text-primary">L'Expérience & la Posture</p>
                        <p className="text-sm text-base-content/70 mt-2">Spécialiste en posturologie et semelles orthopédiques sur-mesure</p>
                        <div className="card-actions">
                        <Link to="/posturologie-semelles" className="btn btn-primary">
                            Voir son expertise
                        </Link>
                        </div>
                    </div>
                </div>
                 {/* Expert 2 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h3 className="card-title">Louis Chaudet</h3>
                        <p className="font-bold text-secondary">L'Innovation & la Main</p>
                        <p className="text-sm text-base-content/70 mt-2">Spécialiste des orthèses de main, pratique également la posturologie</p>
                        <div className="card-actions">
                        <Link to="/ortheses-main" className="btn btn-secondary">
                           Voir son expertise
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
);

export default CabinetPage; 