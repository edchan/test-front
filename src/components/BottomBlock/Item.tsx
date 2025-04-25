import React from 'react';
import ImageWithModal from '../ImageWithModal';

interface ItemProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
}

const Item: React.FC<ItemProps> = ({ image, alt, title, description, className = '' }) => {
  return (
    <div className={`sm:flex-1 sm:flex-col text-center sm:w-[375px] mb-10 ${className}`}>
      <ImageWithModal src={image} alt={alt} />
      <h3 className="text-xl font-semibold mb-[10px] mx-[30px] mt-[30px]">
        <a href="#">{title}</a>
      </h3>
      <p className="sm:mx-[30px]">{description}</p>
    </div>
  );
};

export default Item;
