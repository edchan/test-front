import React from 'react';

interface ContentBlockProps {
  heading: string;
  paragraph: string;
  subheading: string;
  subparagraph: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  heading,
  paragraph,
  subheading,
  subparagraph,
}) => {
  return (
    <article className="order-1 md:order-2 md:w-1/3">
      <h2>
        <a href="#">{heading}</a>
      </h2>
      <p className="line-clamp-paragraph mb-6">
        {paragraph}
      </p>
      <h3 className="flex-grow-0 font-bold text-[15px] leading-[1.4] text-left text-[#cf1430] mb-2">
        {subheading}
      </h3>
      <p className="flex-grow-0 !font-bold">
        {subparagraph}
      </p>
    </article>
  );
};

export default ContentBlock;
