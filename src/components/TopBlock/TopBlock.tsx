import React from 'react';
import ContentBlock from './ContentBlock';
import ImageBlock from './ImageBlock';

const TopBlock: React.FC = () => {
  const articleData = {
    heading: 'What Does Cooking Mean?',
    paragraph:
      'Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...',
    subheading: 'The Perfect Egg',
    subparagraph: 'Keep water between 67 and 68°C for a flavourful, tender yolk',
    images: [
      {
        src: 'image1.png',
        alt: 'Cooking close-up',
      },
      {
        src: 'image2.png',
        alt: 'Chef preparing ingredients',
      },
      {
        src: 'image3.png',
        alt: 'Eggs',
      },
    ],
  };

  return (
    <section className="main-section">
      <div className="max-w-6xl flex flex-col md:flex-row mx-auto items-start gap-8 max-w-[1146px]">
        <ContentBlock
          heading={articleData.heading}
          paragraph={articleData.paragraph}
          subheading={articleData.subheading}
          subparagraph={articleData.subparagraph}
        />
        <ImageBlock images={articleData.images} />
      </div>
    </section>
  );
};

export default TopBlock;
