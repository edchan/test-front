import React, { useState, useEffect } from 'react';

interface ImageWithModalProps {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
}

const ImageWithModal: React.FC<ImageWithModalProps> = ({
  src,
  alt = '',
  imageClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
        <img
          src={`./images/${src}`}
          alt={alt}
          className={`cursor-pointer transition duration-200 ease-in-out hover:opacity-80 ${imageClassName}`}
          onClick={handleOpen}
        />
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={handleClose}
        >
          <div
            className="relative max-w-[90%] max-h-[90%] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute w-10 h-10 top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 cursor-pointer"
            >
              ✕
            </button>
            <img src={`./images/${src}`} alt={alt} className="max-w-full max-h-[80vh]" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageWithModal;