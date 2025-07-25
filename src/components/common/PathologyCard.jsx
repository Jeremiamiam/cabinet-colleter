import React from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

const PathologyCard = ({ 
  title, 
  description, 
  symptoms = [], 
  solutions = [], 
  imageAlt = "Illustration de la pathologie",
  linkTo = "#"
}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-48">
        <ImagePlaceholder alt={imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-base-content/80">{description}</p>
        
        {symptoms.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold text-secondary mb-2">Symptômes courants :</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>
        )}
        
        {solutions.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold text-primary mb-2">Nos solutions :</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="card-actions justify-end mt-4">
          <Link to={linkTo} className="btn btn-secondary btn-sm">
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PathologyCard; 