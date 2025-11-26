import React from 'react';
import { SlideContainer } from './SlideContainer';
import { motion } from 'framer-motion';

export const ContentSlide = ({ title, subtitle, content }) => {
  return (
    <SlideContainer>
      <div className="mb-16 border-b border-gray-100 pb-8 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-black text-tn-blue mb-2 tracking-tight">{title}</h2>
          {subtitle && <h3 className="text-xl text-tn-text font-light">{subtitle}</h3>}
        </div>
        <div className="w-12 h-1 bg-tn-blue rounded-full mb-2 opacity-20" />
      </div>

      <div className="grid gap-12 max-w-5xl">
        {content.map((block, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="group"
          >
            <h4 className="text-2xl font-bold text-tn-blue mb-3 group-hover:text-tn-lightblue transition-colors">
              {block.heading}
            </h4>
            <p className="text-xl text-tn-text font-light leading-relaxed opacity-90 border-l-2 border-gray-100 pl-6 group-hover:border-tn-lightblue/30 transition-colors">
              {block.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideContainer>
  );
};
