import React from 'react';
import Item from './Item'; // Adjust path as needed

interface ItemData {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const BottomBlock: React.FC = () => {
  const blockTitle = "Taste the Colours";
  const items: ItemData[] = [
    {
      image: "/images/image4.png",
      alt: 'Red image',
      title: "Red",
      description: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
    },
    {
      image: "/images/image5.png",
      alt: 'Green image',
      title: "Green",
      description: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours",
    },
    {
      image: "/images/image6.png",
      alt: 'White image',
      title: "White",
      description: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
    },
  ];

  return (
    <section className="main-section">
      <div className="max-w-6xl mx-auto max-w-[1146px]">
        <div className="flex justify-center">
          <h2 className="inline-block text-center border-b border-white mb-[30px] pb-[30px] text-[30px] font-light leading-[1.1] uppercase">
            <a href="#">{blockTitle}</a>
          </h2>
        </div>
        <div className="flex justify-center flex-wrap h-full gap-2">
          {items.map((item, index) => (
            <Item
              key={index}
              image={item.image}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomBlock;
