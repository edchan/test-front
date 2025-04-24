// components/ImageBlock.tsx
import React from 'react';
import ImageWithModal from '../ImageWithModal';

interface ImageBlockProps {
  images: {
    src: string;
    alt: string;
    className?: string;
  }[];
}

const ImageBlock: React.FC<ImageBlockProps> = ({ images }) => {
  return (
    <div className="order-2 md:order-1 flex flex-col sm:flex-row gap-2 md:w-2/3 mb-6 md:mb-0">
      <div className="flex-1">
        <ImageWithModal
          src={images[0].src}
          alt={images[0].alt}
          imageClassName={`w-full sm:h-[600px] object-cover ${images[0].className || ''}`}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="sm:h-[296px]">
          <ImageWithModal
            src={images[1].src}
            alt={images[1].alt}
            imageClassName={`w-full h-full object-cover ${images[1].className || ''}`}
          />
        </div>
        <div className="sm:h-[296px] mt-2">
          <ImageWithModal
            src={images[2].src}
            alt={images[2].alt}
            imageClassName={`w-full h-full object-cover ${images[2].className || ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
