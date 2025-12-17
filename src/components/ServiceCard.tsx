import { Link } from "react-router-dom";

interface ServiceCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText?: string;
  animationDelay?: number;
  linkTo?: string;
}

const ServiceCard = ({ 
  image, 
  imageAlt, 
  title, 
  description, 
  buttonText = "Läs mer",
  animationDelay = 0,
  linkTo
}: ServiceCardProps) => {
  return (
    <article 
      className="flex flex-col animate-fade-in max-w-[320px]"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Card Image */}
      <div className="w-full mb-4">
        <img 
          src={image} 
          alt={imageAlt} 
          className="w-full max-w-[320px] aspect-square object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      
      {/* Card Title */}
      <h3 className="font-heading font-medium text-h4 text-foreground mb-3">
        {title}
      </h3>
      
      {/* Card Description */}
      <p className="font-body text-body text-foreground mb-6 flex-grow">
        {description}
      </p>
      
      {/* CTA Button */}
      <div>
        {linkTo ? (
          <Link 
            to={linkTo}
            className="inline-block font-body font-medium text-button bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200"
          >
            {buttonText}
          </Link>
        ) : (
          <button 
            className="font-body font-medium text-button bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200"
          >
            {buttonText}
          </button>
        )}
      </div>
    </article>
  );
};

export default ServiceCard;
